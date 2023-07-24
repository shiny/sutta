<template>
    <div class="items-center transition-all flex gap-0.5 h-14 text-gray-500 hover:text-gray-900 hover:dark:text-gray-300 overflow-hidden" :class="{ 'w-64': expended, 'w-14': !expended }">
        <div class="flex-none w-14 text-center" @click="expended = !expended">
            <Icon class="w-8 h-8" name="fluent:text-font-16-regular" />
        </div>
        <div class="pr-6 grow">
            <n-slider class="w-full" :default-value="defaultNumber" :tooltip="false" @update-value="onChange" :marks="fontSizeOptions" :step="20" />
        </div>
    </div>
</template>
<script setup lang="ts">
const expended = ref(false)
const props = defineProps<{
    defaultValue: typeof values[number]
}>()
const fontSizeOptions: Record<number, string> = {
  0: 'base',
  20: 'lg',
  40: 'xl',
  60: '2xl',
  80: '3xl',
  100: '4xl',
}
const options = { ...fontSizeOptions } as const
const defaultNumber = computed(() => {
    const numbers: number[] = Object.keys(fontSizeOptions).map(str => parseInt(str))
    return numbers.find((val: number) => {
        return fontSizeOptions[val] === props.defaultValue
    })
})
const values = Object.values(fontSizeOptions)
const emit = defineEmits<{
    (e: 'change', value: typeof values[number]): void
}>()
const onChange = (value: keyof typeof options) => {
    emit('change', fontSizeOptions[value])
}
</script>
<style scoped>
:deep(.n-slider-mark) {
    @apply hidden;
}
:deep(.n-slider.n-slider--with-mark) {
    margin-bottom: 8px;
}
</style>