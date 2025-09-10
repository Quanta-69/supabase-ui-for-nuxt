<script lang="ts" setup>
const { user } = useAuthState();
definePageMeta({
    middleware: 'auth',
})
</script>

<template>
    <div class="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div class="w-full max-w-lg">
                <h1 class="text-2xl font-bold">Seeing this dashboard because you are logged in</h1>
                <h2>Email: {{ user?.email }}</h2>
                <h2>Role: {{ user?.role }}</h2>
                <div class="my-10">
                    <supabase-logout-button />
                </div>
                <h2 class="note">Note that as you are authenticated, you cannot access any routes under <span>/auth/*</span></h2>
        </div>
    </div>
</template>

<style scoped>
@reference "tailwindcss"; /* This line is crucial for using tailwind in internal styles */

.note{
    span{
        @apply text-red-500
    }
    @apply my-10 text-2xl font-bold text-center 
}
</style>
