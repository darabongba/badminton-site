import { ref } from 'vue'

export const catalog = ref(null)
export const loadError = ref('')

export async function loadCatalog() {
  if (catalog.value) return catalog.value
  const url = `${import.meta.env.BASE_URL}data/catalog.json`
  const res = await fetch(url)
  if (!res.ok) {
    loadError.value = '目录加载失败'
    throw new Error(loadError.value)
  }
  catalog.value = await res.json()
  return catalog.value
}

export function videosForCategory(slug) {
  const videos = catalog.value?.videos || []
  const order = { beginner: 0, intermediate: 1, advanced: 2 }
  return videos
    .filter((v) => v.primary_category === slug || v.secondary_category === slug)
    .sort((a, b) => (order[a.difficulty] ?? 9) - (order[b.difficulty] ?? 9) || a.title.localeCompare(b.title, 'zh'))
}
