<script setup lang="ts">
import RoleBasedRender from "./role-based-render.vue"
</script>

<template>
    <RoleBasedRender roles="admin" v-bind="$attrs" :show-fallback="false">
        <slot />
    </RoleBasedRender>
</template>