<template>
    <nav class="fixed top-0 w-full shadow-md border-b shadow-gray-900/5 border-gray-600/20 backdrop-blur-md backdrop-saturate-150 z-50 transition-[background-color,transform] duration-500"
        :class="[isTop ? 'md:bg-gray-500-50 text-[#CFD2D8]' : ' bg-white/80 dark:bg-gray-800/75', isShow ? '' : 'md:-translate-y-16']">
        <div class="flex h-14 max-w-[--page-witdh] mx-auto px-4 items-center">
            <div class="font-bold text-lg md:text-2xl font-mono">
                {{ config.title }}
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { config } from '@/config';
import { onMounted, onUnmounted, ref } from 'vue';

const isTop = ref(true)
const isShow = ref(true)

const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
};

let lastScrollTop = 0
const onScroll = () => {
    requestAnimationFrame
    const scrollTop = document.documentElement.scrollTop;
    isTop.value = scrollTop <= 200
    isShow.value = lastScrollTop == 0 || scrollTop < lastScrollTop || scrollTop <= 100
    lastScrollTop = scrollTop
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, {
        capture: false,
        passive: true,
    })
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll, {
        capture: false,
    })
})
</script>
