<template>
    <div class="h-14 w-14 p-3.5 text-gray-500 hover:text-gray-900 hover:dark:text-gray-300" @click="toggleColorMode">
        <Icon class="w-full h-full" name="ph:moon" v-if="modeActually === 'dark'"></Icon>
        <Icon class="w-full h-full" name="ph:sun" v-else-if="modeActually === 'light'"></Icon>
    </div>
</template>
<script setup lang="ts">
type MODE = 'system' | 'dark' | 'light'
const colorMode = useColorMode()
const { colorModePreference } = useNaiveColorMode()
const mode = ref<MODE>(colorModePreference.value as MODE)
/** Sync NaiveUI color mode settings */
watch(mode, (value) => {
    colorMode.preference = value
})
const targetMode = computed(() => {
    switch(colorModePreference.value) {
        case 'light':
            return 'dark'
        case 'dark':
            return 'light'
        case 'system':
            return isSystemInDarkMode ? 'light' : 'dark'
    }
})

function toggleColorMode() {
    mode.value = targetMode.value
    colorMode.preference = targetMode.value
    colorModePreference.value = targetMode.value
}

const modeActually = computed(() => {
    if (mode.value === 'system') {
        return isSystemInDarkMode.value ? 'dark' : 'light'
    } else {
        return mode.value
    }
})

const isSystemInDarkMode = computed(() => {
    if(typeof window === 'undefined') {
        return false
    } 
    if (!window.matchMedia) {
    return false
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
})
</script>
<style scoped>

:deep(.n-switch .n-switch__rail) {
  @apply w-full h-full rounded-full;
}
</style>