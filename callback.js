//callback
//숫자, 함수는 변수의 값이 될 수 있음->first class Citisen(1급 시민)
//조건문은 변수의 값이 될 수 없음->second class citisen

//callback 함수 => 바로 실행되지는 않지만, 다른 함수의 입력값으로 전달되서 다른 함수에 의해서 나중에 호출되는 것

//filter 함수
//arr.filter(callback(element[,index[,array]]))[, thisArg] =>element는 필수고 나머지는 옵션으로 사용
//callback->true를 반환하면 요소를 유지하고, false를 반환하면 버림.
//element->처리할 현재 요소 / index, Optional -> 처리할 현재 요소의 인덱스

//1.filter 함수 사용
words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
function callback(element){
    console.log(element)
}
words.filter(callback)

//2.words2 중 길이가 6이상인 요소만 추출
words2 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
function callback(element){
    console.log(element)
    if(element.length > 6){
        return true
    } else {
        return false
    }
}
newwords = words2.filter(callback)
console.log(newwords)

//3. 2번 코드 정리_1(filter 함수 자체가 참이면 트루를 리턴한다는 특성을 가지고 코드 정리)
words3 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
newwords2 = words3.filter(function (element){
    return element.length >6
})
console.log(newwords2)


//4. 3번 코드정리(arrow function 활용)
words4 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
newwords3 = words4.filter((element)=>{
    return element.length >6
})
console.log(newwords3)


//5. 4번 코드 정리(파라미터가 하나일 경우 괄호가 필요없음)
words4 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
newwords3 = words4.filter(element=>{
    return element.length >6
})
console.log(newwords3)


//6. 5번 코드 정리(코드가 한줄일 경우 중괄호와 return도 필요없음)
words5 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
newwords4 = words5.filter(element => element.length >6)
console.log(newwords4)

//7. callback 함수를 소비하는 함수
words6 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
// newwords5 = words6.filter(element => element.length >6)
function myfilter(origin, callback){//filter와 똑같은 역할을 하는 함수
    var result = [];
    for(var i =0; i<origin.length; i++){
        var current = origin[i]
        if(callback(current)){
            result.push(current)
        }
    }
    return result;
}
newwords5 = myfilter(words6, element => element.length >6)
console.log(newwords5)
