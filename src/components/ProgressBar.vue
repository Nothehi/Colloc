<script setup lang="ts">
interface Props {
    total: number,
    current: number
}

defineProps<Props>()
</script>

<template>
    <div class="relative w-full h-3 bg-white border-2 border-black rounded-lg shadow-neuburtal-sm">
        <div :style="`width :${current / total * 100}%`" class="h-full rounded-lg bg-lime-400"></div>
    </div>
</template>