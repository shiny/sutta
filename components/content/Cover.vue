<template>
    <div class="h-56 relative flex items-center">
        <div class=""><slot /></div>
    </div>
</template>
<style scoped>
:deep(h1) {
    font-size: 180%;
    @apply font-semibold;
}
:deep(h2) {
    font-size: 160%;
    @apply font-semibold;
}
</style>