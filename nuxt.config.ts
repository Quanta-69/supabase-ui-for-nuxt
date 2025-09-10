export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  supabase: {
    redirect: false,
    redirectOptions: {
    login: '/', /* This makes that default forceful middleware to return home if you don't have a middleware */
    callback: '/',
    include: [],
    exclude: []
  },
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/supabase',
  ],
  css: ['~/assets/css/tailwind.css'],
  shadcn: {
    /**
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./app/components/ui"
     */
    componentDir: './app/components/ui'
  },
})