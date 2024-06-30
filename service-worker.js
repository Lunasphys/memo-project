const CACHE_NAME = 'my-vite-react-app-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/src/main.tsx',
    '/src/assets/react.svg',
    '/src/styles/global.css',
    '/src/styles/index.css',
    '/src/styles/card.css',
    '/src/styles/boxVisualization.css',
    '/src/App.tsx',
    '/src/App.css',
    '/src/index.css',
    '/src/pages/HomePage.tsx',
    '/src/pages/CategoryPage.tsx',
    '/src/pages/ReviewPage.tsx',
    '/src/pages/ThemePage.tsx',
    '/src/components/AddCardForm.tsx',
    '/src/components/Card.tsx',
    '/src/components/BoxVisualization.tsx',
    '/src/stores/useStore.ts',
];

// Installation du service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Gestion des requêtes
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Mise à jour du service worker
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
