// apps/web/app/composables/useAutoSave.ts
type AutoSaveOptions<T> = {
  key: string
  version: number
  defaultValue: () => T
  debounceMs?: number
}

export function useAutoSave<T extends Record<string, any>>(options: AutoSaveOptions<T>) {
  const { key, version, defaultValue, debounceMs = 400 } = options

  const state = ref<T>(defaultValue())
  const lastSavedAt = ref<string | null>(null)
  const hydrated = ref(false)

  const storageKey = `${key}:v${version}`

  function load(): boolean {
    if (!import.meta.client) return false
    const raw = localStorage.getItem(storageKey)
    if (!raw) return false

    try {
      const parsed = JSON.parse(raw) as { data: T; savedAt: string }
      if (!parsed?.data) return false
      state.value = parsed.data
      lastSavedAt.value = parsed.savedAt || null
      return true
    } catch {
      return false
    }
  }

  function save() {
    if (!import.meta.client) return
    const savedAt = new Date().toISOString()
    localStorage.setItem(storageKey, JSON.stringify({ data: state.value, savedAt }))
    lastSavedAt.value = savedAt
  }

  function clear() {
    if (!import.meta.client) return
    localStorage.removeItem(storageKey)
    lastSavedAt.value = null
    state.value = defaultValue()
  }

  // Debounce helper
  let t: ReturnType<typeof setTimeout> | null = null
  function scheduleSave() {
    if (!import.meta.client) return
    if (!hydrated.value) return
    if (t) clearTimeout(t)
    t = setTimeout(() => save(), debounceMs)
  }

  // Initialize on client
  if (import.meta.client) {
    load()
    hydrated.value = true
  }

  // Persist changes
  watch(
    state,
    () => {
      scheduleSave()
    },
    { deep: true }
  )

  return {
    state,
    lastSavedAt,
    save,
    load,
    clear,
  }
}
