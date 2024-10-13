function findFloor(input) {
    if (input !== '(' || input !== ')') {
        throw new Error("Please enter '(' or ')'")
    }
    const splitedInput = input.split('')
    let floor = 0
    splitedInput.forEach((input) => {
        if (input === '(') {
            floor++
        } else if (input === ")") {
            floor--
        }
    })
    return floor
}

console.log(findFloor(''));