<template>
    <nav
        class="fixed top-0 w-full z-50 transition-[background-color,transform] duration-500 bg-white/80 dark:bg-gray-800/75 shadow-md border-b shadow-gray-900/5 border-gray-600/20 backdrop-blur-md backdrop-saturate-150"
        :class="[isShow ? '' : 'md:-translate-y-16']"
    >
        <div class="flex h-14 max-w-[--page-witdh] mx-auto px-4 items-center">
            <div class="font-bold text-lg md:text-2xl font-mono">
                {{ config.title }}
            </div>
            <div class="hidden md:flex pl-8 gap-6">
                <a href="/">首页</a>
                <a href="/">归档</a>
                <a href="/">分类</a>
                <a href="/about">关于</a>
            </div>
            <div class="ml-auto flex gap-4">
                <button class="flex items-center">
                    <span class="iconify tabler--search text-xl md:transition-transform md:hover:scale-125"></span>
                </button>
                <button @click="toggleDarkMode" class="flex items-center">
                    <span class="iconify tabler--sun-filled text-xl dark:inline hidden md:transition-transform md:hover:scale-125"></span>
                    <span class="iconify tabler--moon-filled text-xl dark:hidden inline md:transition-transform md:hover:scale-125"></span>
                </button>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { config } from "@/config";
import { onMounted, onUnmounted, ref } from "vue";

const isShow = ref(true);

const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
};

let lastScrollTop = 0;
const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    isShow.value = lastScrollTop == 0 || scrollTop < lastScrollTop || scrollTop <= 100;
    lastScrollTop = scrollTop;
};

onMounted(() => {
    onScroll();
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
