// Service worker：讓「加入主畫面」後以 App 形式開啟，並在離線時仍能打開網站外殼。
// 一律「網路優先」：連得上就拿最新檔案（部署後立即生效），連不上才用快取。
// 只處理同網域的 GET；資料 API（IIS 的 /api/、GitHub API）一律不碰，避免讀到舊資料。
const CACHE = 'wph-shell-v1'

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (e) => {
  const req = e.request
  const url = new URL(req.url)
  if (req.method !== 'GET' || url.origin !== self.location.origin || url.pathname.includes('/api/')) return
  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone()
          caches.open(CACHE).then((c) => c.put(req, copy))
        }
        return res
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))
  )
})
