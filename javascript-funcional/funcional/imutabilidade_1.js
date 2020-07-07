function ordernar(array){
    return [...array].sort((a, b) => a - b) //muda a ordenação ASC padrão do sort para ordenação númerica
}

const nums = [3, 1, 7, 9, 4, 6]
const numsOrdenados = ordernar(nums)
console.log(nums, numsOrdenados)

const parteNums = nums.slice(2)

console.log(parteNums, nums)