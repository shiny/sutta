<template>
    <div>
        <NSwitch
            class="w-full h-full relative"
            :checked-value="isSystemDarkMode ? 'system' : 'dark'"
            :unchecked-value="!isSystemDarkMode ? 'system' : 'light'"
            v-model:value="$colorMode.preference"
        >
            <template #checked-icon>
                <Icon name="ph:moon" />
            </template>
            <template #unchecked-icon>
            <Icon name="ph:sun" />
            </template>
        </NSwitch>
    </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
/** Sync NaiveUI color mode settings */
const { colorModePreference } = useNaiveColorMode()
watch(colorMode, () => {
    if (['light', 'dark', 'system'].includes(colorMode.preference)) {
        colorModePreference.value = colorMode.preference as 'light' | 'dark' | 'system'
    }
})

const isSystemDarkMode = computed(() => {
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