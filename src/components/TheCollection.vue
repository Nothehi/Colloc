<script setup lang="ts">
import { type Item, useCollocation } from '@/stores/collocation'

interface Props {
    item: Item,
    category: string
}

defineProps<Props>()
</script>

<template>
    <router-link :to="{ name: 'collection', params: { category, collection: useCollocation().getSlug(item.title) } }">
        <img 
            :src="item.image"
            class="shadow-neuburtal w-40 h-60 rounded-lg border-black border-2 hover:shadow-neuburtal-sm transition-all 
                hover:translate-x-0.5 hover:translate-y-0.5 active:saturate-50">
    </router-link>
</template>