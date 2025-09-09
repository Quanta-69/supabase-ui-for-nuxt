<script setup lang="ts">
definePageMeta({
    middleware: ['auth', 'role'], // Apply both middleware in order
    role: 'admin' // This is used by the role middleware
})
</script>
<template>
    <div>
        <h1>Admin Dashboard</h1>
    </div>
</template>