<template>
    <div class="h-56 relative flex items-center">
        <div class=""><slot /></div>
    </div>
</template>
<style scoped>
:deep(h1) {
    @apply font-semibold text-5xl text-center;
}
:deep(h2) {
    @apply font-semibold text-center text-3xl;
}
</style>