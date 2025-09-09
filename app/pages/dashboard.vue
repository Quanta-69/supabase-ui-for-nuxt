<script lang="ts" setup>
definePageMeta({
    requiresAuth: true,
    middleware: 'auth'
})
</script>

<template>
    <div>
        <supabase-profile-upload/>
    </div>
</template>

<style lang="postcss" scoped>
    
</style>
