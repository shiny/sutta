<template>
    <NPopover trigger="hover" placement="right">
        <template #trigger>
            <div class="bg-stone-100 hover:bg-stone-50 dark:bg-stone-800 dark:hover:bg-stone-700 rounded-full shadow h-14 w-14 p-3.5 text-gray-500 hover:text-gray-900 hover:dark:text-gray-300">
                <NuxtLink target="_blank" :to="link"><Icon class="w-full h-full" name="carbon:generate-pdf"></Icon></NuxtLink>
            </div>
        </template>
        下载 PDF 原版文件
    </NPopover>
</template>
<script setup lang="ts">
defineProps<{
    link: string
}>()
</script>