<template>
  <p v-if="!video" class="text-sm text-mute">没有这条视频。</p>
  <article v-else>
    <h1 class="text-2xl font-bold text-ink">{{ video.title }}</h1>
    <div class="my-3 flex flex-wrap gap-2">
      <span class="rounded-full bg-chip px-2 py-0.5 text-xs text-mute">
        {{ names[video.primary_category] || video.primary_category }}
      </span>
      <span v-if="video.secondary_category" class="rounded-full bg-chip px-2 py-0.5 text-xs text-mute">
        {{ names[video.secondary_category] || video.secondary_category }}
      </span>
      <span class="rounded-full bg-chip px-2 py-0.5 text-xs text-mute">
        {{ diffs[video.difficulty] || video.difficulty }}
      </span>
      <span v-if="video.up_name" class="rounded-full bg-chip px-2 py-0.5 text-xs text-mute">
        {{ video.up_name }}
      </span>
    </div>
    <p class="mb-4 text-ink">{{ video.recommend_reason }}</p>
    <div class="hidden md:block">
      <iframe
        class="aspect-video w-full rounded-xl border-0 bg-black"
        :src="video.embed_url"
        allowfullscreen
      ></iframe>
    </div>
    <p class="mt-4 md:hidden">
      <a
        class="inline-block rounded-lg bg-accent px-4 py-2.5 font-bold text-on-accent no-underline hover:opacity-90"
        :href="video.video_url"
        target="_blank"
        rel="noopener"
      >
        去 B 站观看
      </a>
    </p>
    <p class="mt-4 text-sm text-mute">
      <a class="text-accent hover:underline" :href="video.video_url" target="_blank" rel="noopener">原视频</a>
    </p>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { catalog } from '../catalog.js'

const route = useRoute()
const video = computed(() => (catalog.value?.videos || []).find((v) => v.bvid === route.params.bvid))
const names = computed(() => catalog.value?.category_names || {})
const diffs = computed(() => catalog.value?.difficulty_names || {})
</script>
