<template>
    <nav class="fixed top-0 w-full z-50 transition-[background-color,transform] duration-500 bg-white/80 dark:bg-gray-800/75 shadow-md border-b shadow-gray-900/5 border-gray-600/20 backdrop-blur-md backdrop-saturate-150"
        :class="[isShow ? '' : 'md:-translate-y-16']">
        <div class="flex h-14 max-w-[--page-witdh] mx-auto px-4 items-center">
            <a href="/" class="font-bold text-lg md:text-2xl font-mono">
                {{ config.title }}
            </a>
            <div class="hidden md:flex pl-8 gap-6">
                <a href="/" class="transition-transform active:scale-90 hover:text-sky-600">首页</a>
                <a href="/" class="transition-transform active:scale-90 hover:text-sky-600">归档</a>
                <a href="/" class="transition-transform active:scale-90 hover:text-sky-600">分类</a>
                <a href="/about" class="transition-transform active:scale-90 hover:text-sky-600">关于</a>
            </div>
            <div class="ml-auto flex">
                <button
                    class="flex items-center justify-center w-8 h-8 transition-transform md:active:scale-90 md:hover:text-sky-600">
                    <span class="iconify tabler--search text-xl"></span>
                </button>
                <button @click="toggleDarkMode"
                    class="flex items-center justify-center w-8 h-8  transition-transform md:active:scale-90 md:hover:text-sky-600">
                    <span class="iconify tabler--sun text-xl dark:inline hidden"></span>
                    <span class="iconify tabler--moon text-xl dark:hidden inline"></span>
                </button>
                <button @click="onClickMenuIcon"
                    class="md:hidden flex items-center justify-center w-8 h-8  transition-transform md:active:scale-90 md:hover:text-sky-600">
                    <span class="iconify tabler--menu-2 text-xl"></span>
                </button>
            </div>
        </div>
        <div class="absolute top-16 right-4 p-2 bg-gray-50 dark:bg-gray-700 shadow-md rounded-md transition-opacity"
            :class="[isMenuOpend ? 'opacity-100' : 'pointer-events-none opacity-0']">
            <a href="/" class="flex justify-between pl-3 pr-1 py-2 text-sm items-center w-32">
                <span>首页</span>
                <span class="iconify tabler--chevron-right text-xl text-sky-600"></span>
            </a>
            <a href="/" class="flex justify-between pl-3 pr-1 py-2 text-sm items-center w-32">
                <span>归档</span>
                <span class="iconify tabler--chevron-right text-xl text-sky-600"></span>
            </a>
            <a href="/" class="flex justify-between pl-3 pr-1 py-2 text-sm items-center w-32">
                <span>分类</span>
                <span class="iconify tabler--chevron-right text-xl text-sky-600"></span>
            </a>
            <a href="/about" class="flex justify-between pl-3 pr-1 py-2 text-sm items-center w-32">
                <span>关于</span>
                <span class="iconify tabler--chevron-right text-xl text-sky-600"></span>
            </a>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { config } from "@/config";
import loadsh from "lodash";
import { onMounted, onUnmounted, ref } from "vue";

const isShow = ref(true);
const isMenuOpend = ref(false)

const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
};

let lastScrollTop = 0;
const onScroll = loadsh.throttle(() => {
    const scrollTop = document.documentElement.scrollTop;
    isShow.value = scrollTop < lastScrollTop || scrollTop <= 100;
    lastScrollTop = scrollTop;
});

const onClickMenuIcon = () => {
    isMenuOpend.value = !isMenuOpend.value
}

onMounted(async () => {
    window.addEventListener("scroll", onScroll, {
        capture: false,
        passive: true,
    });
});

onUnmounted(() => {
    window.removeEventListener("scroll", onScroll, {
        capture: false,
    });
});
</script>
