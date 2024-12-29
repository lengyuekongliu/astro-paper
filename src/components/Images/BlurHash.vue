<template>
    <transition name="fade">
        <img v-if="showElement" :src="dataUrl" :alt="alt" :class="class" />
    </transition>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const props = defineProps<{
    src: string;
    dataUrl: string;
    alt?: string;
    class: string;
}>();

const showElement = ref(true);

onMounted(() => {
    const img = new Image();
    img.src = props.src;
    img.onload = () => {
        showElement.value = false;
    };
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
