<template>
  <section class="mb-6 space-y-3">
    <h1 class="text-2xl font-bold text-ink">业余入门主路径</h1>
    <p class="text-lg text-mute">按这个顺序练。双打和战术放在后面，标成可选。</p>
  </section>
  <div v-if="path.length" class="flex flex-col gap-3">
    <article
      v-for="(item, index) in path"
      :key="item.bvid"
      class="rounded-xl border border-line bg-panel p-4"
    >
      <div class="text-sm text-mute">
        第 {{ index + 1 }} 课
        <template v-if="optional.has(item.primary_category)"> · 可选</template>
      </div>
      <h2 class="mt-1 text-lg font-semibold">
        <RouterLink class="text-ink no-underline hover:text-accent hover:underline" :to="`/v/${item.bvid}`">
          {{ item.title }}
        </RouterLink>
      </h2>
      <div class="my-3 flex flex-wrap gap-2">
        <span class="rounded-full bg-chip px-2 py-0.5 text-xs text-mute">
          {{ names[item.primary_category] || item.primary_category }}
        </span>
        <span class="rounded-full bg-chip px-2 py-0.5 text-xs text-mute">
          {{ diffs[item.difficulty] || item.difficulty }}
        </span>
      </div>
      <p class="text-ink">{{ item.recommend_reason }}</p>
    </article>
  </div>
  <p v-else class="text-sm text-mute">路径还是空的。</p>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { catalog } from '../catalog.js'

const path = computed(() => catalog.value?.path || [])
const names = computed(() => catalog.value?.category_names || {})
const diffs = computed(() => catalog.value?.difficulty_names || {})
const optional = computed(() => new Set(catalog.value?.path_optional || []))
</script>
