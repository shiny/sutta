<template>
    <div class="h-screen p-10 max-w-7xl m-auto">
        <NuxtLink to="/" class="flex my-16">
            <img src="/icon.png" class="w-14 h-14 " />
            <div class="ml-4">
                <h1 class="text-3xl font-black text-slate-900 songti">佛典电子化计划</h1>
                <p class="description">用现代 Web 技术重排佛典</p>
            </div>
        </NuxtLink>
        <ul class="flex">
            <li>
                <NuxtLink class="flex hover:bg-stone-50 p-2 rounded" to="/xifangquezhi">
                    <img class="w-16" src="/cover/xifangquezhi.jpg" />
                    <div class="p-3">
                        <span class="font-semibold text-base mb-2 block">西方确指</span>
                        <p class="block text-gray-400 whitespace-pre-line text-[12px]">觉明妙行菩萨说
                        菩萨戒弟子常摄集</p>
                        <p class="text-gray-400 whitespace-pre-line text-[12px]">庐山东林寺印经处</p>
                    </div>
                </NuxtLink>
            </li>
        </ul>
        <footer class="bottom-0 absolute text-[13px] p-5 text-gray-500">
            <ul>
                <li>* 本站是开源项目 <NuxtLink to="https://github.com/shiny/sutta/"><Icon name="bxl:github" />佛典电子化计划</NuxtLink>，与各地的护法寺均不存在任何关系</li>
                <li>&copy; 2023 GPL-3.0 license </li>
            </ul>
        </footer>
    </div>
</template>
<script setup>
useSeoMeta({
    title: '佛典电子化计划'
})
</script>
<style scoped>

body {
  @apply bg-neutral-50;
}
.description {
    @apply text-gray-500 text-sm py-0 px-1;
}
</style>