<script setup lang="ts">
import { useCollocation } from '@/stores/collocation'
import TheCollection from '@/components/TheCollection.vue'

const collocation = useCollocation()
</script>

<template>
    <main class="flex flex-col items-center justify-center w-full h-screen font-comfortaa">
        <div class="text-center">
            <h1 class="text-5xl font-bold">ColloC</h1>
            <h2 class="tracking-widest">collection's of collocation's</h2>
        </div>

        <ul class="p-5 mt-10">
            <li
                v-for="(book, idx) in collocation.collection.books" 
                :key="idx"
                class="inline-block w-40 p-2">
                <the-collection :item="book" category="books" />
            </li>
        </ul>

        <footer class="absolute bottom-0 w-full p-4 text-center">
            <p>Made with ❤️ by <a href="https://github.com/Nothehi">Nothehi</a></p>
        </footer>
    </main>
</template>
