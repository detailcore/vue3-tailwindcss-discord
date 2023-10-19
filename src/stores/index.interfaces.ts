export interface IItem {
  id: number
  label: string
}

export interface IChannel extends IItem {
  icon?: string
  unread?: boolean
}

export interface ICategory extends IItem {
  isShow?: boolean
  channels: IChannel[]
}

export interface IMain {
  '1': {
    label: string
    categories: ICategory[]
  }
}

export interface IServer {
  id: number
  alias: string
  name: string
  img: string
}