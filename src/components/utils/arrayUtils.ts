function replaceInArray<T extends any>(
    originalArray: T[],
    index: number,
    newItem: T
  ): T[] {
    const newArray = [...originalArray];
  
    newArray.splice(index, 1, newItem);
  
    return newArray;
}

export { replaceInArray }