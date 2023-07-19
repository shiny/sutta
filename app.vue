<template>
  <NaiveConfig>
    <NuxtPage />
  </NaiveConfig>
</template>
<script setup>
useServerHead({
  link: [{
    rel: 'icon',
    type: 'image/png',
    href: '/icon.png'
  }]
})
</script>