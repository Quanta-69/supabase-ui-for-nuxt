<script lang="ts" setup>
const { profile, user } = useAuthorization();
const { isAuthenticated } = useAuthState();
</script>

<template>
    <div class="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div class="w-full max-w-sm">
            <template v-if="isAuthenticated && user?.role === 'authenticated'">
                <h1 class="text-2xl font-bold">Authenticated</h1>
                <h2>Hello {{ profile?.username }}</h2>
                <supabase-logout-button />
            </template>
            <template v-else>
                <h1 class="text-2xl font-bold">Unauthenticated</h1>
                <h2>You need to log in</h2>
            </template>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
    
</style>
