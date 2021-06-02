export class HashTable {
  collection: [string, any][][]

  constructor(size: number) {
    this.collection = new Array(size)
  }

  private hash(key: string): number {
    let total = 0
    const prime = 31

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i]
      const value = char.charCodeAt(0) - 96
      total = (total * prime + value) % this.collection.length
    }

    return total
  }

  set(key: string, value: any): HashTable {
    const index = this.hash(key)

    if (!this.collection[index]) this.collection[index] = []
    this.collection[index].push([key, value])

    return this
  }

  get(key: string): any {
    const index = this.hash(key)
    const hashMap = this.collection[index]

    if (!hashMap || !hashMap.length) return undefined

    return hashMap.find((item) => item[0] === key)[1]
  }

  keys(): string[] {
    return this.collection
      .map((hashMap) => hashMap.map((item) => item[0]))
      .flat()
  }

  values(): any[] {
    return this.collection
      .map((hashMap) => hashMap.map((item) => item[1]))
      .flat()
  }
}
