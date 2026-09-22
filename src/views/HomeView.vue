<template>
  <section v-if="!catalog.launch_ready" class="space-y-3">
    <h1 class="text-2xl font-bold text-ink">筹备中</h1>
    <p class="text-lg text-mute">
      入门路径和分类目录还在收片。达到「路径至少 10 条、至少 8 个技术类有内容」后会在这里公开。
    </p>
  </section>
  <template v-else>
    <section class="space-y-4">
      <p class="text-lg text-mute">
        {{ catalog.site_title }}收集经过筛选的羽毛球动作教学，按技术分类和学习顺序帮你找到该练的片子。
      </p>
      <p>
        <RouterLink
          class="inline-block rounded-lg bg-accent px-4 py-2.5 font-bold text-on-accent no-underline hover:opacity-90"
          to="/path"
        >
          按学习路径开始
        </RouterLink>
      </p>
    </section>
    <section>
      <div class="mt-6 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
        <RouterLink
          v-for="cat in catalog.categories"
          :key="cat.slug"
          class="rounded-xl border border-line bg-panel p-4 text-ink no-underline hover:border-accent"
          :to="`/c/${cat.slug}`"
        >
          <h2 class="mb-2 text-base font-semibold">{{ cat.name }}</h2>
          <div class="text-sm text-mute">{{ cat.count }} 条</div>
        </RouterLink>
      </div>
    </section>
  </template>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { catalog } from '../catalog.js'
</script>
