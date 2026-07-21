const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Configuração de retenção: Avaliações com mais de 60 dias serão excluídas automaticamente!
const RETENTION_DAYS = 60; 

app.use(cors());
app.use(express.json());

// Conexão ao Banco de Dados SQLite
const dbPath = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados SQLite:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite com sucesso!');
    initDb();
  }
});

// Inicialização das Tabelas e Seed Inicial
function initDb() {
  db.run(`
    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      city TEXT NOT NULL,
      rating INTEGER NOT NULL,
      product TEXT NOT NULL,
      comment TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Erro ao criar tabela de avaliações:', err.message);
      return;
    }
    
    // Purga automática inicial
    purgeOldReviews();
    
    // Seed de avaliações iniciais se o banco estiver vazio
    db.get('SELECT COUNT(*) as count FROM reviews', (err, row) => {
      if (!err && row.count === 0) {
        seedInitialReviews();
      }
    });
  });
}

// Função para purgar/excluir avaliações mais antigas que RETENTION_DAYS
function purgeOldReviews(days = RETENTION_DAYS) {
  const query = `DELETE FROM reviews WHERE created_at < datetime('now', '-${days} days')`;
  db.run(query, function (err) {
    if (err) {
      console.error('Erro na limpeza automática de avaliações antigas:', err.message);
    } else if (this.changes > 0) {
      console.log(`[LIMPEZA AUTOMÁTICA] ${this.changes} avaliação(ões) com mais de ${days} dias foram excluídas.`);
    }
  });
}

// Inserir avaliações iniciais
function seedInitialReviews() {
  const initialData = [
    {
      name: 'Fernanda Oliveira',
      city: 'Guarapuava - Centro',
      rating: 5,
      product: 'Morango Red Gold',
      comment: 'Sem dúvidas o melhor morango que já comi na vida! Os morangos da caixa Red Gold são realmente gigantes e supersuculentos. Atendimento impecável do Alex!'
    },
    {
      name: 'Ricardo Silveira',
      city: 'Guarapuava - Santa Cruz',
      rating: 5,
      product: 'Geleia de Morango 0% Açúcar',
      comment: 'Comprei a geleia sem açúcar por recomendação médica e fiquei impressionado! O sabor natural da fruta sobressai perfeitamente. Retiro sempre na feira da Unicentro.'
    },
    {
      name: 'Juliana Mendes',
      city: 'Curitiba - PR',
      rating: 5,
      product: 'Licor de Morango / Butiá',
      comment: 'O Licor de Butiá edição numerada é uma verdadeira obra de arte gastronômica. Comprei para presentear meu pai e foi um sucesso total!'
    },
    {
      name: 'Camila Pires',
      city: 'Guarapuava - Vila Carli',
      rating: 5,
      product: 'Kokedama com Muda',
      comment: 'A kokedama de morango é uma graça! Ficou linda na minha varanda e já está dando moranguinhos doces. A Indianara me deu todas as dicas de cuidado.'
    }
  ];

  const stmt = db.prepare('INSERT INTO reviews (name, city, rating, product, comment) VALUES (?, ?, ?, ?, ?)');
  initialData.forEach(r => stmt.run(r.name, r.city, r.rating, r.product, r.comment));
  stmt.finalize();
  console.log('Avaliações iniciais cadastradas no SQLite!');
}

// Agendar limpeza automática a cada 24 horas (86.400.000 ms)
setInterval(() => {
  purgeOldReviews();
}, 24 * 60 * 60 * 1000);

// --- ENDPOINTS DA API ---

// 1. Obter todas as avaliações válidas (ordenadas da mais recente para a mais antiga)
app.get('/api/reviews', (req, res) => {
  // Purga antes de retornar
  purgeOldReviews();

  db.all('SELECT * FROM reviews ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    // Formatar datas amigáveis
    const formatted = rows.map(r => ({
      ...r,
      date: new Date(r.created_at).toLocaleDateString('pt-BR')
    }));

    res.json(formatted);
  });
});

// 2. Criar uma nova avaliação
app.post('/api/reviews', (req, res) => {
  const { name, city, rating, product, comment } = req.body;

  if (!name || !city || !rating || !comment) {
    res.status(400).json({ error: 'Por favor, preencha todos os campos obrigatórios.' });
    return;
  }

  const query = 'INSERT INTO reviews (name, city, rating, product, comment) VALUES (?, ?, ?, ?, ?)';
  db.run(query, [name, city, rating, product || 'Outras Iguarias', comment], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Executa a limpeza automática após nova inserção
    purgeOldReviews();

    const newReview = {
      id: this.lastID,
      name,
      city,
      rating,
      product: product || 'Outras Iguarias',
      comment,
      date: new Date().toLocaleDateString('pt-BR')
    };

    res.status(201).json(newReview);
  });
});

// 3. Endpoint manual para purgar avaliações antigas (ex: definir limite de dias)
app.post('/api/reviews/cleanup', (req, res) => {
  const { days = RETENTION_DAYS } = req.body;
  
  const query = `DELETE FROM reviews WHERE created_at < datetime('now', '-${days} days')`;
  db.run(query, function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: `Limpeza concluída! ${this.changes} avaliação(ões) com mais de ${days} dias foram removidas.` });
  });
});

// Inicializar Servidor Backend
app.listen(PORT, () => {
  console.log(`Servidor de Banco de Dados da Rancho Matogrosso rodando na porta ${PORT}`);
  console.log(`Regra de retenção ativa: Avaliações com mais de ${RETENTION_DAYS} dias são excluídas automaticamente.`);
});
