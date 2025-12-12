// content.js - Bloquer la page des messages Instagram

// Fonction pour bloquer la page
function blockPage() {
	if (window.location.href.includes('instagram.com/direct/inbox') ||
		window.location.href.includes('instagram.com/direct/t/')) {

		console.log('🚫 Tentative de blocage de la page Instagram Messages');

		// Créer une page de blocage
		document.documentElement.innerHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Page bloquée</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <div style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          margin: 0;
          color: white;
        ">
          <div style="
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 60px 40px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            max-width: 500px;
          ">
            <div style="font-size: 80px; margin-bottom: 20px;">🚫</div>
            <h1 style="
              font-size: 32px;
              margin: 0 0 15px 0;
              font-weight: 600;
            ">Page bloquée</h1>
            <p style="
              font-size: 18px;
              margin: 0 0 30px 0;
              opacity: 0.9;
              line-height: 1.5;
            ">
              Les messages Instagram sont temporairement bloqués.<br>
              Concentre-toi sur tes tâches importantes !
            </p>
            <div style="
              background: rgba(255, 255, 255, 0.2);
              padding: 15px;
              border-radius: 10px;
              font-size: 14px;
              opacity: 0.8;
            ">
              💡 Astuce : Désactive l'extension si tu as vraiment besoin d'accéder aux messages
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

		console.log('✅ Instagram Messages bloqués par l\'extension');
		return true;
	}
	return false;
}

// Bloquer au chargement initial
blockPage();

// Surveiller les changements d'URL (pour les SPA comme Instagram)
let lastUrl = location.href;
new MutationObserver(() => {
	const url = location.href;
	if (url !== lastUrl) {
		lastUrl = url;
		console.log('🔄 URL changée:', url);
		blockPage();
	}
}).observe(document, { subtree: true, childList: true });

// Vérifier périodiquement (au cas où)
setInterval(() => {
	if (window.location.href.includes('instagram.com/direct/inbox') ||
		window.location.href.includes('instagram.com/direct/t/')) {
		blockPage();
	}
}, 500);