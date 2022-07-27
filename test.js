function solution(n){
	let sum = 0;
    let num = String(n)
    let arr = [...num].reverse()

    for(let i=0; i<num.length; i++){
        sum += Number(num[i])
    }
    let change = arr.join("+")
    let result = `${change} = ${sum}`
    
	return result;
}

console.log(solution(718253))