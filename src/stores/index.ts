import { ref } from 'vue'
import { defineStore } from 'pinia'
import data from './dataOfServer.json'
import { ICategory, IServer, IMain } from './index.interfaces'


export const useMainStore = defineStore('main', () => {
  const servers = ref<IServer[]>([
    { id: 1, alias: 'tailwind', name: 'Tailwind', img: 'tailwind.png' },
    { id: 2, alias: 'mirage', name: 'Mirage', img: 'mirage.png' },
    { id: 3, alias: 'next', name: 'Next', img: 'next.png' },
  ])
  // type TKeysOfServer = keyof typeof servers.value

  const dataOfServer = ref<IMain>(data)

  const getNameServerByAlias = (alias: string): string => {
    for (const item of servers.value) {
      if(item.alias == alias) return item.name
    }
    return 'Unnamed'
  }

  const setShowCategories = (categories: ICategory[]) => {
    categories.forEach(category => {
      category.isShow = true
    })
  }

  const toggleCategory = (categoryId: number) => { // альтернативный вариант
    // dataOfServer.value[1].categories.forEach(category => {
    //   if(category.id == categoryId) {
    //     category.isShow = !category.isShow
    //     return
    //   }
    // })
  }


  return {
    servers,
    dataOfServer,

    getNameServerByAlias,

    setShowCategories,
    toggleCategory,
  }
})
