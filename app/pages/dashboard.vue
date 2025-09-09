<script lang="ts" setup>
definePageMeta({
    middleware: 'auth',
})
</script>

<template>
    <div>
        <supabase-strict-admin-only>
            <h1>You're a strict ADMIN</h1>
        </supabase-strict-admin-only>

        <supabase-strict-moderator-only>
            <h1>You're a strict Moderator</h1>
        </supabase-strict-moderator-only>

        <supabase-strict-user-only>
            <h1>You're a strict USER</h1>
        </supabase-strict-user-only>

        <supabase-profile-upload />

    </div>
</template>

<style lang="postcss" scoped>
    
</style>
