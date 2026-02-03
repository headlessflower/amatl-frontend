// apps/web/app/composables/useExchangeRate.ts
export function useExchangeRate() {
  const rate = ref<number | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const lastUpdated = ref<string | null>(null)

  const CACHE_KEY = 'amatl_usd_mxn_rate_v1'

  function loadFromCache() {
    if (!import.meta.client) return false
    const cached = localStorage.getItem(CACHE_KEY)
    if (!cached) return false

    try {
      const parsed = JSON.parse(cached) as { rate: number; date: string }
      if (typeof parsed.rate !== 'number' || !parsed.date) return false
      rate.value = parsed.rate
      lastUpdated.value = parsed.date
      return true
    } catch {
      return false
    }
  }

  function saveToCache(r: number, date: string) {
    if (!import.meta.client) return
    localStorage.setItem(CACHE_KEY, JSON.stringify({ rate: r, date }))
  }

  async function refresh() {
    loading.value = true
    error.value = null

    try {
      // No key needed; good for MVP
      const res = await fetch('https://api.exchangerate.host/latest?base=USD&symbols=MXN')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const data = await res.json()
      const r = data?.rates?.MXN
      const date = data?.date

      if (typeof r !== 'number' || !date) throw new Error('Malformed response')

      rate.value = r
      lastUpdated.value = date
      saveToCache(r, date)
    } catch (e) {
      error.value = 'Could not fetch exchange rate'
    } finally {
      loading.value = false
    }
  }

  // init (client only)
  if (import.meta.client) {
    const hasCache = loadFromCache()
    if (!hasCache) {
      // fire and forget
      refresh()
    }
  }

  return { rate, loading, error, lastUpdated, refresh }
}
