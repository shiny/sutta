<template>
    <div class="h-56 relative flex items-center">
        <div class=""><slot /></div>
    </div>
</template>
<style scoped>
:deep(h1) {
    font-size: 180%;
    @apply font-semibold text-center;
}
:deep(h2) {
    font-size: 150%;
    @apply font-semibold text-center;
}
</style>