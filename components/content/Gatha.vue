<template>
  <div class="gatha text-center text-[120%] p-0 leading-relaxed kaiti whitespace-pre-line">
    <slot />
  </div>
</template>
<style scoped>
.gatha :deep(p) {
  @apply p-0;
}
</style>