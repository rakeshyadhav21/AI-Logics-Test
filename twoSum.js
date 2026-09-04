const nums = [2,7,11,15]
const target = 9

function twoSum(nums,target){
    const solution = []

    for(let i=0;i<nums.length;i++){
        let num = target-nums[i]
        if(nums.includes(num)){
            let index1 = i;
            let index2 = nums.indexOf(num)
            if(!solution.includes(index1) && !solution.includes(index2)){
                solution.push(index1)
                solution.push(index2)
            }
        }
    }

    return solution.sort((a,b) => a-b)
}

console.log(twoSum(nums,target))


/*

Time complexity : O(n)

*/
