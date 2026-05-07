const CACHE = 'hub-estudos-v1';
const ARQUIVOS = [
  '/Estudos/',
  '/Estudos/index.html',
  '/Estudos/manifest.json',
  'https://fonts.googleapis.com/css2?family=Syne:wght@500;700;800&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap'
];

// Instalar — faz cache dos arquivos principais
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll(ARQUIVOS).catch(() => {});
    })
  );
  self.skipWaiting();
});

// Ativar — limpa caches antigos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — serve do cache se offline, rede se online
self.addEventListener('fetch', e => {
  // Não interceptar chamadas da API Anthropic nem Firebase
  if (
    e.request.url.includes('api.anthropic.com') ||
    e.request.url.includes('firebase') ||
    e.request.url.includes('firestore') ||
    e.request.url.includes('googleapis.com/v1')
  ) {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Atualiza o cache com a versão mais recente
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, clone));
        return response;
      })
      .catch(() => {
        // Offline — serve do cache
        return caches.match(e.request).then(cached => {
          if (cached) return cached;
          // Se não tiver no cache, retorna o index.html
          return caches.match('/Estudos/index.html');
        });
      })
  );
});
