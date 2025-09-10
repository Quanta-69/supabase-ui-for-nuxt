import { ref, computed, watch } from 'vue'

export const useAuthState = () => {
  const user = useSupabaseUser()
  
  const isLoading = ref(true)
  const error = ref<string | null>(null)
  const isAuthenticated = computed(() => !!user.value)

  
  // Fetch profile when user changes
  watch(user, (newUser) => {
    if (newUser) {
      return
    } else {
      isLoading.value = false
    }
  }, { immediate: true })
  
  return {
    user,
    isLoading,
    error,
    isAuthenticated,
  }
}