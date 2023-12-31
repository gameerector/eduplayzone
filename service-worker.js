// const CACHE_NAME = 'EPZ-cache-v3';
// const offlinePage = 'offlinePage/index.html';
// const offlinePageCss = 'offlinePage/style.css';

// const urlsToCache = [
//   '/',
//   'index.html',
//   'styles.css',
//   'script.js',
//   offlinePage,
//   offlinePageCss,
//   // Add more URLs of your resources to cache
// ];

// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then((cache) => {
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//       .then((response) => {
//         if (response) {
//           return response;
//         }

//         return fetch(event.request)
//           .then((response) => {
//             if (!response || response.status !== 200 || response.type !== 'basic') {
//               // Check if the device is online before serving the offline page
//               if (!navigator.onLine) {
//                 return caches.match(offlinePage);
//               }
//             }

//             const responseToCache = response.clone();

//             caches.open(CACHE_NAME)
//               .then((cache) => {
//                 cache.put(event.request, responseToCache);
//               });

//             return response;
//           })
//           .catch(() => {
//             // Fetch failed, return the offline page only if the device is offline
//             if (!navigator.onLine) {
//               return caches.match(offlinePage);
//             }
//           });
//       })
//   );
// });

// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((name) => {
//           if (name !== CACHE_NAME) {
//             return caches.delete(name);
//           }
//         })
//       );
//     })
//   );
// });

// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
// });
