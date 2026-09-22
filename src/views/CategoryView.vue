<template>
  <section class="mb-6">
    <h1 class="text-2xl font-bold text-ink">{{ title }}</h1>
  </section>
  <div v-if="videos.length" class="flex flex-col gap-3">
    <article v-for="item in videos" :key="item.bvid" class="rounded-xl border border-line bg-panel p-4">
      <h2 class="text-lg font-semibold">
        <RouterLink class="text-ink no-underline hover:text-accent hover:underline" :to="`/v/${item.bvid}`">
          {{ item.title }}
        </RouterLink>
      </h2>
      <div class="my-3 flex flex-wrap gap-2">
        <span class="rounded-full bg-chip px-2 py-0.5 text-xs text-mute">
          {{ diffs[item.difficulty] || item.difficulty }}
        </span>
        <span v-if="item.up_name" class="rounded-full bg-chip px-2 py-0.5 text-xs text-mute">
          {{ item.up_name }}
        </span>
      </div>
      <p class="text-ink">{{ item.recommend_reason }}</p>
    </article>
  </div>
  <p v-else class="text-sm text-mute">这一类还没有片子。</p>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { catalog, videosForCategory } from '../catalog.js'

const route = useRoute()
const slug = computed(() => route.params.slug)
const title = computed(() => catalog.value?.category_names?.[slug.value] || slug.value)
const diffs = computed(() => catalog.value?.difficulty_names || {})
const videos = computed(() => videosForCategory(slug.value))
</script>
