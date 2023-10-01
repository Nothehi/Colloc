import { defineStore } from 'pinia'
import collections from '@/data/collections.json'

export interface Dictionary {
    phonetic: string,
    en: string,
    fa: string
}

export interface Item {
    title: string,
    image: string,
    dictionaries: Array<Dictionary>
}

export interface Collection {
    books: Array<Item>
}

export const useCollocation = defineStore('collocation', () => {
	const collection: Collection = collections

	function getSlug(title: string) {
		return title.toLowerCase().replaceAll(' ', '-')
	}

	function find(category: string | string[], slug: string | string[]) {
		if (category == 'books') {
			return collection.books.find((item: Item) => getSlug(item.title) == slug)
		}

		return undefined
	}

	return { collection, find, getSlug }
})