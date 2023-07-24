<template>
  <NaiveConfig>
    <NuxtPage />
  </NaiveConfig>
</template>
<script setup lang="ts">
useServerHead({
  link: [{
    rel: 'icon',
    type: 'image/png',
    href: '/icon.png'
  }]
})

</script>