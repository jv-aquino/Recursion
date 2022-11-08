const mergeSort = (arr) => {
  if (arr.length == 1) {
    return arr;
  }
  else {
    let left = arr.slice(0, arr.length / 2);
    let right = arr.slice(arr.length / 2);
    return merge(mergeSort(left), mergeSort(right));
  }
}

const merge = (arr1, arr2) => {
  let combinedArr = [];
  let combinedLenght = (arr1.length + arr2. length);

  for (let i = 0; i < combinedLenght; i++) {
    let smallestArr1 = Math.min(...arr1);
    let smallestArr2 = Math.min(...arr2);
    let smallest = 0;

    if (smallestArr1 < smallestArr2) {
      smallest = smallestArr1;
      arr1.splice(arr1.indexOf(smallestArr1), 1);
    } 
    else {
      smallest = smallestArr2;
      arr2.splice(arr2.indexOf(smallestArr2), 1);
    }

    combinedArr.push(smallest);
  }

  return combinedArr;
}

const randomNumbers = [6, 2, 10, 5, 1, 7, 8, 3, 13, 4, 9, 8, 65, 100, 23, 21, 1, 0];
console.log(mergeSort(randomNumbers));