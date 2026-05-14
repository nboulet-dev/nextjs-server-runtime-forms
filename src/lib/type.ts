export type Book<T extends string = string> = {
  id: number
  title: string
  description?: string
  chapters?: T[]
  questions?: Question<T>[]
  createdAt?: string
  updatedAt?: string
}

export type Question<T extends string> = {
  question: string
  answer?: string
  chapter: T
}
