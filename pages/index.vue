<template>
    <div class="app">
        <div class="py-10 max-w-7xl m-auto">
            <NuxtLink to="/" class="flex my-16">
                <NuxtImg src="/icon.png" class="w-14 h-14 " />
                <div class="ml-4">
                    <h1 class="text-3xl font-black text-slate-900 dark:text-slate-200 songti">佛典电子化计划</h1>
                    <p class="description">用现代 Web 技术重排佛典</p>
                </div>
            </NuxtLink>
            <ul class="flex">
                <li>
                    <NuxtLink class="flex transition bg-stone-50 dark:bg-neutral-800 hover:bg-white dark:hover:bg-stone-800 hover:shadow p-3 rounded" to="/xifangquezhi">
                        <NuxtImg :width="128" class="w-16" src="/cover/xifangquezhi.jpg" />
                        <div class="p-3">
                            <span class="dark:text-white font-semibold text-base mb-2 block">西方确指</span>
                            <p class="block text-gray-400 whitespace-pre-line text-[12px]">觉明妙行菩萨说
                            菩萨戒弟子常摄集</p>
                            <p class="text-gray-400 whitespace-pre-line text-[12px]">庐山东林寺印经处</p>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <footer class="mt-10 w-full border-t dark:border-zinc-800">
            <section class="max-w-7xl m-auto text-[13px] py-5 text-gray-500">
                <p class="text-sm kaiti text-zinc-600 dark:text-zinc-200">
                    <h3>回向偈</h3>
                    愿以此功德，
                    庄严佛净土。
                    上报四重恩，
                    下济三途苦。
                    若有见闻者，
                    悉发菩提心。
                    尽此一报身，
                    同生极乐国。
                </p>
                <ul class="mt-3">
                    <li class="kaiti"></li>
                    <li>* 本项目与各地的护法寺均不存在任何关系</li>
                    <li>&copy; 2023 <NuxtLink to="https://github.com/shiny/sutta/"><Icon name="bxl:github" />佛典电子化计划</NuxtLink> GPL-3.0 license </li>
                </ul>
            </section>
        </footer>
    </div>
</template>
<script setup>
useSeoMeta({
    title: '佛典电子化计划'
})
</script>
<style scoped>

.app {
  @apply h-screen bg-[--background-color] bg-stone-100 dark:bg-stone-900 relative;
}
.description {
    @apply text-gray-500 dark:text-gray-400 text-sm py-0 px-1;
}
</style>