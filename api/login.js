// Vercel Serverless Function: api/login.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Método não permitido.' });
  }

  try {
    const { username, password } = req.body || {};

    // Variáveis de ambiente da Vercel sem qualquer fallback hardcoded
    const adminUser = process.env.ADMIN_USERNAME;
    const adminPass = process.env.ADMIN_PASSWORD;

    if (!adminUser || !adminPass) {
      return res.status(500).json({ 
        success: false, 
        error: 'Servidor mal configurado: Variáveis ADMIN_USERNAME e ADMIN_PASSWORD não encontradas.' 
      });
    }

    const inputUser = (username || '').trim().toLowerCase();
    const inputPass = (password || '').trim();

    // Verificação estrita contra variáveis de ambiente do servidor
    if (inputUser === adminUser.toLowerCase() && inputPass === adminPass) {
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
