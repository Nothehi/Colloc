<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useCollocation } from '@/stores/collocation'
import ProgressBar from '@/components/ProgressBar.vue'
import { IconArrowBackUp, IconArrowForwardUp, IconChevronLeft, IconEye, IconEyeClosed } from '@tabler/icons-vue'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
const collection = useCollocation()

const book = collection.find(route.params.category, route.params.collection)
const showAnswer = ref(false)

function isPreviuesAvailable(): boolean {
	return Number(route.params.dictionary) - 1 > 0
}

function isNextAvailable(): boolean {
	return !(Number(route.params.dictionary) + 1 > book!.dictionaries.length)
}

function previues() {
	showAnswer.value = false

	if (isPreviuesAvailable()) {
		return router.replace(`${Number(route.params.dictionary) - 1}`)
	}
}

function next() {
	showAnswer.value = false
    
	if (isNextAvailable()) {
		return router.replace(`${Number(route.params.dictionary) + 1}`)
	}
}
</script>

<template>
    <main class="flex flex-col items-center justify-center w-full px-4 space-y-10">
        <header class="flex flex-row items-center justify-center w-full">
            <button @click="router.push({ name: 'collection', replace: true})" class="p-1 rounded-full">
                <icon-chevron-left />
            </button>

            <div class="flex flex-col items-start justify-center flex-grow py-2 ml-2">
                <h2 class="font-patua">{{ book!.title }}</h2>
                
                <div class="flex flex-row items-baseline justify-center w-full mt-1">
                    <span class="mr-2 font-mono text-xs whitespace-nowrap">{{ book!.dictionaries.length }} Words</span>
                    <progress-bar :total="book!.dictionaries.length" :current="Number(route.params.dictionary)" />
                </div>
            </div>
        </header>

        <section class="relative w-full px-2 py-16 text-center bg-white border-2 border-black rounded-lg shadow-neuburtal">
            <div class="flex flex-col items-center justify-center">
                <h1 class="after:content-[' '] after:w-4/6 after:h-1/3 after:bg-lime-400 after:block after:-right-1 
                    after:bottom-0.5 after:absolute after:-z-10 relative z-10 h-full text-2xl font-bold font-mplus">
                    {{ book!.dictionaries[Number(route.params.dictionary) - 1].en }}
                </h1>

                <span class="mt-2 text-sm text-gray-600">
                    {{ book!.dictionaries[Number(route.params.dictionary) - 1].phonetic }}
                </span>
            </div>

            <h3 class="w-full mt-6 text-lg font-bold font-vazir text-lime-500" 
                :class="[showAnswer ? 'opacity-100' : 'opacity-0']">
                {{ book!.dictionaries[Number(route.params.dictionary) - 1].fa }}
            </h3>
        </section>

        <footer class="fixed flex flex-row items-center justify-center w-full space-x-5 bottom-10">
            <button @click="previues"
                    :disabled="!isPreviuesAvailable()"
                    class="p-3 bg-white border-2 border-black rounded-full shadow-neuburtal 
                        active:translate-x-0.5 active:translate-y-0.5 active:shadow-neuburtal-sm 
                        disabled:translate-x-0.5 disabled:translate-y-0.5 disabled:shadow-neuburtal-sm">
                <icon-arrow-back-up />
            </button>

            <button @click="showAnswer = !showAnswer" 
                    class="p-4 bg-lime-400 border-2 border-black rounded-full shadow-neuburtal active:translate-x-0.5 
                            active:translate-y-0.5 active:shadow-neuburtal-sm">
                <icon-eye-closed v-if="!showAnswer" :size="32" />
                <icon-eye v-else :size="32" />
            </button>
            
            <button @click="next"
                    :disabled="!isNextAvailable()"
                    class="p-3 bg-white border-2 border-black rounded-full shadow-neuburtal 
                        active:translate-x-0.5 active:translate-y-0.5 active:shadow-neuburtal-sm
                        disabled:translate-x-0.5 disabled:translate-y-0.5 disabled:shadow-neuburtal-sm">
                <icon-arrow-forward-up />
            </button>
        </footer>
    </main>
</template>
