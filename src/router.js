import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import PathView from './views/PathView.vue'
import CategoryView from './views/CategoryView.vue'
import VideoView from './views/VideoView.vue'

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/path', name: 'path', component: PathView },
    { path: '/c/:slug', name: 'category', component: CategoryView },
    { path: '/v/:bvid', name: 'video', component: VideoView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
