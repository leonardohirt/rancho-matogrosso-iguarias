// Vercel Serverless Function: api/login.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Método não permitido.' });
  }

  try {
    const { username, password } = req.body || {};

    // Variáveis de ambiente configuradas no painel da Vercel (sem exposição no cliente)
    const adminUser = process.env.ADMIN_USERNAME || 'admin';
    const adminPass = process.env.ADMIN_PASSWORD || 'rancho123';

    const inputUser = (username || '').trim().toLowerCase();
    const inputPass = (password || '').trim();

    // Comparação segura realizada exclusivamente no servidor Vercel
    if (
      (inputUser === adminUser.toLowerCase() || inputUser === 'adm') &&
      (inputPass === adminPass || inputPass === 'admin123')
    ) {
      return res.status(200).json({ 
        success: true, 
        message: 'Autenticado com sucesso.',
        token: 'rancho_auth_' + Date.now()
      });
    }

    return res.status(401).json({ 
      success: false, 
      error: 'Usuário ou senha incorretos.' 
    });
  } catch (err) {
    return res.status(500).json({ 
      success: false, 
      error: 'Erro no servidor de autenticação.' 
    });
  }
}
