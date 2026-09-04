nums = [2,2,1,1,1,2,2]

function maxElement(nums){
    let max = null
    let count = 0;
    
    for(const num of nums){
        if(count === 0){
            max = num
        }
        count += (num === max) ? 1 : -1
    }


    return max
}

console.log(maxElement(nums))


/*

Time complexity : O(n)
Space complexity : O(1)

*/
