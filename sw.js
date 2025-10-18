self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('fetch', function(event) {
  // Default pass-through, bisa di-custom untuk offline
});
