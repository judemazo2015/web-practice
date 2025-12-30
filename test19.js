let nums1 = [1,2,3];
let nums2 = [0,...nums1,4];
alert(nums2);

function multiplyAll(...nums){
    let total = 1;
    for(let num of nums){
        total *= num;
    }
    return total;
}

alert(multiplyAll(2,3,4));