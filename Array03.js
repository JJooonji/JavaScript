//배열의 메소드(Array's Method)
let members = ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle']
console.log(members)


//배열의 첫 요소를 삭제: shift() ㅡ>파라미터가 없음
let members2 = ['쿤갈레', 'Zerrard66', '우리생각해써','흙토끼','End Miracle']
members2.shift();
console.log(members2);

//배열의 마지막 요소를 삭제: pop()
let members3 = ['쿤갈레', 'Zerrard66', '우리생각해써','흙토끼','End Miracle']
members3.pop();
console.log(members3)

//배열의 첫 요소로 값 추가:unshift(value) -> 값을 추가하는 것이기 때문에 파라미터를 입력해 줘야함.
let members4 = ['쿤갈레', 'Zerrard66', '우리생각해써','흙토끼','End Miracle']
members4.unshift('NiceCodeit')
console.log(members4)

//배열의 마지막 요소로 값 추가: push(value)
let members5 = ['쿤갈레', 'Zerrard66', '우리생각해써','흙토끼','End Miracle']
members5.push('Hicodeit');
console.log(members5)


//예제
function range(start, count, step) {
    let arr = [];
    for(let i = 0; i < count; i++){
        arr.push(start+i*step)
    }
    return arr;
}
console.log(range(1,10,3));
//[1, 4, 7, 10, 13, 16, 19, 22, 25, 28] 출력
///해설 
//-> range함수의 해석이 중요!! 내부동작을 살펴보면, 가장 먼저 빈 배열을 만들고 반복문을 통해 파라미터로 전달받은 개수만큼 반복
//   반복문 내부에서는 push메소드를 통해 매 반복마다 배열의 마지막 요소로 특별한 연산식에 의한 결괏값을 추가하는 동작을 하고 있음.
//   연산식이 start+i*step 으로 사칙연산 우선순위에 따라 곱셈을 먼저 계산
//   결과적으로 총 count 만큼의 요소 개수를 가지고, start값부터 갈수록 값이 step만큼 증가하는 배열을 리턴하게 됨.



//배열에서 특정값 찾기(indexod / lastIndexof)
//indexof 예제 -> 값이 포함이 되어있는지를 확인해줌.(포함되어있다면 값이 있는 인덱스가 리턴, 포함되어있지않다면 -1이 리턴, 여러번 포함되어있다면 처음 발견된 인덱스가 리턴)
let brands = ['Google', 'KaKao', 'Naver', 'KaKao']
console.log(brands.indexOf('KaKao'))//값이 포함되어 있고, 여러개가 포함되어있음으로 처음 발견한 인덱스인 1이 출력
console.log(brands.indexOf('Daum'))//값이 포함되어있지 않음으로 -1이 출력
//lastIndexof 예제 -> indexof와 반대로 뒤에서부터 탐색함.
console.log(brands.lastIndexOf('KaKao'))//값이 포함되어 있고, 여러개가 포함되어있기 대문에 뒤에서부터 탐색했을 때 처음 발견한 인덱스인 3이 출력
console.log(brands.lastIndexOf('Daum'))//마찬가지로 값이 포함되어있지 않기때문에 -1로 출력


//배열에서 특정 값이 있는지 확인하기(includes)
//->그냥 단순히 그 값이 배열안에 있는지의 여부만 확인하고 싶을 때 사용(true, false로 출력)
console.log(brands.includes('KaKao'))
console.log(brands.includes('Daum'))


//배열뒤집기(reverse)->배열의 순서를 뒤집음.
console.log(brands)
brands.reverse()
console.log(brands)