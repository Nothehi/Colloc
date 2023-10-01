<script setup lang="ts">
import { IconSearch } from '@tabler/icons-vue'
</script>

<template>
    <div class="relative w-full">
        <input type="text" class="w-full py-1 pl-2 pr-6 border-2 border-black rounded-lg font-patua shadow-neuburtal-sm focus:outline-none">
        <button class="absolute right-0 inline-flex items-center justify-center w-6 h-full mr-2 rounded-r-lg">
            <icon-search />
        </button>
    </div>
</template>