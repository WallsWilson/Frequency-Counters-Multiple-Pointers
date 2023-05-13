// add whatever parameters you deem necessary
function twoArrayObject(arr, keys) {
    if(arr.length !== keys.length) {
        return false;
    }
    const arrObj = {};
    keys.forEach((key, i) => {
        arrObj[key] = arr[i];
        });
        return arrObj;
}
