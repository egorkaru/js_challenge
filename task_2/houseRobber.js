function houseRobber(nums) {
    const length = nums.length
    if (length == 0)
        return 0
    if (length == 1)
        return nums[0]
    const result = [
        nums[0], 
        Math.max(nums[0], nums[1])
    ]
    for(let i = 2; i < length; i++){
        result.push(Math.max(nums[i] + result[i - 2], result[i - 1]))
    }
    return result[length - 1]
}
