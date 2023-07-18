<template>
    <main class="p-10 max-w-3xl text-lg text-zinc-900 bg-white leading-relaxed whitespace-pre-line ">
      <ContentDoc />
    </main>
</template>
<script setup lang="ts">

const { page } = useContent()
useContentHead(page)
</script>
<style scoped>
body {
  @apply bg-neutral-50;
}
:deep(p) {
  @apply py-2;
}
</style>  