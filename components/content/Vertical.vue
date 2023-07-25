<template>
    <p class="vertical-rl">
        <slot />
    </p>
</template>
<style scoped>
.vertical-rl {
  @apply lg:[writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb];
}
</style>