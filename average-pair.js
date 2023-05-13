// add whatever parameters you deem necessary
function averagePair(arr, avg) {
   let left = 0;
   let right = arr.length - 1;
   while(left < right) {
    const currAvg = (arr[left] + arr[right]) / 2;
    if(currAvg === avg) {
        return true;
    } else if (currAvg < avg) {
        left++;
    } else {
        right--;
    }
   }
   return false;
}
