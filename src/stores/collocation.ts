import { defineStore } from 'pinia'
import collections from '@/data/collections.json'

export interface Dictionary {
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

	function find(category: string, slug: string) {
		if (collection[category] !== undefined) {
			return collection[category].find((item: Item) => getSlug(item.title) == slug)
		}

		return 'not found!'
	}

	return { collection, find, getSlug }
})