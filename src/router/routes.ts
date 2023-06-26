// layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'

// views
import HomeView from '@/views/HomeView.vue'
import TailWind from '@/views/TailWind.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: DefaultLayout,
    props: { view: HomeView }
  },
  {
    path: '/tailwind',
    name: 'tailwind',
    component: DefaultLayout,
    props: { view: TailWind }
  },
]