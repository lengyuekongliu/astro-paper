<template>
    <transition name="fade">
        <img v-if="showElement" :src="blurhash" :alt="alt" :class="class" />
    </transition>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const props = defineProps<{
    src: string;
    blurhash: string;
    alt?: string;
    class: string;
    onlyBlur: boolean;
}>();

const showElement = ref(true);

onMounted(() => {
    if (!props.onlyBlur) {
        const img = new Image();
        img.src = props.src;
        img.onload = () => {
            showElement.value = false;
        };
    }
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave {
    opacity: 1;
}
</style>
