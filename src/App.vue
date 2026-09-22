<template>
  <div class="mx-auto max-w-[960px] px-4 pb-16 pt-6">
    <header class="mb-7 flex items-baseline justify-between gap-4 border-b border-line pb-4">
      <RouterLink class="text-xl font-bold text-ink no-underline hover:text-accent" to="/">
        {{ catalog?.site_title || '羽毛球教程' }}
      </RouterLink>
      <nav>
        <RouterLink class="ml-4 text-mute no-underline hover:text-accent hover:underline" to="/path">
          学习路径
        </RouterLink>
      </nav>
    </header>
    <p v-if="loadError" class="text-sm text-mute">{{ loadError }}</p>
    <RouterView v-else-if="catalog" />
    <p v-else class="text-sm text-mute">加载中…</p>
    <footer class="mt-12 border-t border-line pt-4 text-[13px] text-mute">
      视频来自 B 站，版权归原作者。本站只做筛选和分类。运动风险自负。请量力而行并做好热身。
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { catalog, loadCatalog, loadError } from './catalog.js'

onMounted(() => {
  loadCatalog().catch(() => {})
})
</script>
