<template>
  <div class="app">
    <div class="max-w-7xl m-auto flex">
      <main class="flex gap-4 w-full max-w-3xl text-zinc-900 whitespace-pre-line ">
        <ContentDoc class="p-10 leading-relaxed bg-neutral-50" :class="`text-${fontSize} paragraph-${fontSize}`" />
        <div class="relative mb-3">
          <div class="fixed bottom-3 bg-white rounded-full shadow">
            <SettingsFontSize :default-value="fontSize" @change="(value) => fontSize = value" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">

const { page } = useContent()
useContentHead(page)
const fontSize = ref('lg')
</script>
<style scoped>
.app {
  @apply bg-stone-200;
}
:deep(.paragraph-base p){
  @apply py-1;
}
:deep(.paragraph-lg p){
  @apply py-1.5;
}
:deep(.paragraph-xl p){
  @apply py-2;
}
:deep(.paragraph-2xl p){
  @apply py-3;
}
:deep(.paragraph-3xl p){
  @apply py-4;
}
:deep(.paragraph-4xl p){
  @apply py-5;
}
</style>  