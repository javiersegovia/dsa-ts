export const insertSort = (arr: (string | number)[]): (string | number)[] => {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i]
    let j = i - 1

    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]
    }

    arr[j + 1] = current
  }

  return arr
}
