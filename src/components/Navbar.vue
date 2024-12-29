<template>
    <nav class="fixed top-0 w-full shadow-md border-b shadow-gray-900/5 border-gray-600/20 backdrop-blur-md backdrop-saturate-150 z-50">
        <div class="flex h-16 max-w-[--page-witdh] mx-auto px-4 items-center">
            <div @click="toggleDarkMode">111</div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
const toggleDarkMode = () => {
    console.log(1111)
};
</script>
