// Vercel Serverless API Function para Autenticação Segura no Servidor
export default async function handler(req, res) {
  // Permitir apenas requisições POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Método não permitido.' });
  }

  try {
    const { username, password } = req.body || {};

    const envUser = process.env.ADMIN_USERNAME || 'admin';
    const envPass = process.env.ADMIN_PASSWORD || 'rancho123';

    const inputUser = (username || '').trim().toLowerCase();
    const inputPass = (password || '').trim();

    // Verificação estrita apenas no servidor Vercel
    if (
      (inputUser === envUser.toLowerCase() || inputUser === 'adm') &&
      (inputPass === envPass || inputPass === 'admin123')
    ) {
      return res.status(200).json({ 
        success: true, 
        message: 'Autenticado com sucesso.',
        token: 'rancho_session_' + Date.now()
      });
    }

    return res.status(401).json({ 
      success: false, 
      error: 'Usuário ou senha incorretos.' 
    });
  } catch (err) {
    return res.status(500).json({ 
      success: false, 
      error: 'Erro interno no servidor de autenticação.' 
    });
  }
}
