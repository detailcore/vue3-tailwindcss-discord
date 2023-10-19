import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { data } from './dataOfServer.js'
import { ICategory, IServer, IMain, IBasic } from './index.interfaces'
import { useRoute } from 'vue-router'


export const useMainStore = defineStore('main', () => {
  const route = useRoute()
  const dataOfServer = ref<IMain>(data)

  // Избыточные данные
  const servers = ref<IServer[]>([
    { id: 1, alias: 'tailwind', name: 'Tailwind', img: 'tailwind.png' },
    { id: 2, alias: 'mirage', name: 'Mirage', img: 'mirage.png' },
    { id: 3, alias: 'next', name: 'Next', img: 'next.png' },
  ])

  // @ts-ignore
  const getServer = computed<IBasic>(() => dataOfServer.value[+route.params.sid])
  const getServerName = computed<string>(() => getServer.value.label)
  const getServerCategories = computed<ICategory[]>(() => getServer.value.categories)

  const setShowCategories = (categories: ICategory[]) => {
    categories.forEach(category => {
      category.isShow = true
    })
  }

  const toggleCategory = (categoryId: number) => {
    getServerCategories.value.forEach((category: ICategory) => {
      if(category.id == categoryId) {
        category.isShow = !category.isShow
        return
      }
    })
  }


  return {
    servers,

    getServer,
    getServerName,
    getServerCategories,

    setShowCategories,
    toggleCategory,
  }
})
