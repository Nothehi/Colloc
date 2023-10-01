<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useCollocation } from '@/stores/collocation'
import { IconChevronLeft } from '@tabler/icons-vue'

const route = useRoute()
const router = useRouter()
const collection = useCollocation()

const book = collection.find(route.params.category, route.params.collection)
</script>

<template>
    <main class="flex flex-col items-center justify-center w-full px-4 space-y-10">
        <header class="relative flex flex-row items-center justify-center w-full pt-3">
            <button @click="router.push({ path: '/', replace: true})" class="absolute left-0 p-1 rounded-full">
                <icon-chevron-left />
            </button>
            
            <h2 class="text-center font-patua">{{ book?.title }}</h2>
        </header>

        <section class="w-full space-y-4">
            <button
                v-for="(dic, idx) in book?.dictionaries" 
                :key="idx"
                @click="() => router.push({ name: 'dictionary', params: {dictionary: `${idx + 1}`} })"
                class="block w-full px-2 py-1 text-left bg-white border border-black rounded-lg shadow-neuburtal
                    active:shadow-neuburtal-sm active:translate-x-0.5 active:translate-y-0.5">
                {{ dic.en }}
            </button>
        </section>
    </main>
</template>
