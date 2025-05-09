self.addEventListener('install', event => {
  console.log('Service Worker installé');
});

self.addEventListener('fetch', event => {
  // Tu peux mettre ici de la mise en cache plus tard
});
