import type { GlobalConfig } from '@/types/config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
    const config = ref<GlobalConfig>()
    const isLoading = ref<boolean>(true)

    const setConfig = (v: GlobalConfig) => {
        config.value = v
    }

    const setIsLoading = (v: boolean) => {
        isLoading.value = v
    }

    return {
        config,
        isLoading,
        setConfig,
        setIsLoading
    }
})
