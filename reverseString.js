function mergeShort(arr1,arr2) {
    let mergedArray=[]
    arr1.forEach(e=> {
        mergedArray.push(e)
    });

    arr2.forEach(e=> {
        mergedArray.push(e)
    });
    
    console.log(mergedArray);

    let sortedArray=[]
    
    for(let i=0; i<mergedArray.length;i++){
        if (mergedArray[i] < mergedArray[i + 1]) {
          sortedArray.push(mergedArray[i]);
        } else {
          sortedArray.push(mergedArray[i + 1]);
        }
    }

    return sortedArray
}

console.log(mergeShort([0, 3, 4, 31], [4, 6, 30]));