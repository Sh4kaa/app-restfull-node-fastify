import { randomUUID } from "crypto"



export class DataBaseMemory {
  #items = new Map()

  list(search) {
    return Array.from(this.#items.entries()).map(item => {
      const id = item[0]
      const data = item[1]
      return {
        id,
        ...data
      }
    }).filter(item => {
      if (search) {
        return item.name.includes(search)
      }
      return true
    })
  }

  create(video) {
    const id = randomUUID()
    this.#items.set(id, video)
  }

  update(id, video) {
    this.#items.set(id, video)
  }

  delete(id) {
    this.#items.delete(id)
  }
}