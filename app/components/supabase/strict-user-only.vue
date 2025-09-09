<script setup lang="ts">
import RoleBasedRender from "./role-based-render.vue"
</script>

<template>
    <RoleBasedRender roles="user" v-bind="$attrs" :include-higher="false" :show-fallback="false">
        <slot />
    </RoleBasedRender>
</template>