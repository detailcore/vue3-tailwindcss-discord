export interface IItem {
  id: number
  label: string
}

export interface IMessage {
  user: string
  date: string
  text: string
  avatarUrl: string
}

export interface IChannel extends IItem {
  icon?: string
  unread?: boolean
  messages: IMessage[]
  description?: string
}

export interface ICategory extends IItem {
  isShow?: boolean
  channels: IChannel[]
}

export interface IBasic {
  label: string
  img?: string
  categories: ICategory[]
}

export interface IMain {
  1: IBasic
  2: IBasic
  3: IBasic
}

export interface IServer {
  id: number
  alias: string
  name: string
  img: string
}