<script setup lang="ts">
const { profile } = useAuthState()
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen p-6">
        <div class="w-full max-w-md">
            <div class="bg-white rounded-lg shadow-lg p-8 text-center">
                <div class="text-red-500 text-6xl mb-4">🚫</div>
                <h1 class="text-2xl font-bold text-gray-900 mb-2">Unauthorized Access</h1>
                <p class="text-gray-600 mb-6">
                    You don't have permission to access this page.
                </p>

                <div v-if="profile" class="bg-gray-50 rounded-lg p-4 mb-6">
                    <p class="text-sm text-gray-700">
                        <strong>Your role:</strong> {{ profile.role }}
                    </p>
                </div>
                
                <div class="flex flex-col gap-3">
                    <NuxtLink 
                    to="/dashboard"
                        class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                        Back to Dashboard
                    </NuxtLink>
                    <NuxtLink to="/" class="text-blue-600 hover:underline">
                        Go to Homepage
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>