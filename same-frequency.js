// add whatever parameters you deem necessary
function freqCounter(arr) {
    let freq = new Map();

    for(let val of arr) {
        let valCount = freq.get(val) || 0;
        freq.set(val, valCount + 1);
    }
    return freq;
}

function sameFrequency(nums1, nums2) {
    if(nums1.length !== nums2.length) return false;

    let nums1Freqs = freqCounter(nums1);
    let nums2Freqs = freqCounter(nums2);

    for(let key of nums1Freqs.keys()) {
        if(nums2Freqs.has(key ** 2) === false) {
            return false;
        }
        if(nums2Freqs.get(key ** 2) !== nums1Freqs.get(key)) {
            return false;
        }
    }
    return true;
}
