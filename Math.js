//Math(객체)->자바스크립트의 내장 객체, 다양한 연산들을 유용하게 사용하기 위해 사용

//절댓값 (Absolute Number)->Math.abs()
//Math.abs(x)를 하면 x의 절댓값이 리턴
console.log(Math.abs(-10))//10 출력
console.log(Math.max(10))//10 출력

//최댓값 (Maximum)->Math.max()
//Math.max함수의 파라미터로 여러 수를 넘겨주면, 그 중 가장 큰 값이 리턴
console.log(Math.max(2, -1, 4, 5, 0));//5 출력

//최솟값 (Minimum)->Math.min()
//Math.min함수의 파라미터로 여러 수를 넘겨주면, 그 중 가장 작은 값이 리턴
console.log(Math.min(2, -1, 4, 5, 0));//-1 출력

//거듭제곱 (Exponentiation)->Math.pow(x, y)
//Math.pow(x, y)를 하면 x의 y숭의 결과값이 리턴
console.log(Math.pow(2, 3));//2의 3승인 8 출력
console.log(Math.pow(5, 2));//5의 2승인 25 출력

//제곱근 (Square Root)->Math.sqrt()
//Math.sqrt(x)를 하면 x의 제곱근이 리턴
console.log(Math.sqrt(25));//5 출력
console.log(Math.sqrt(49));//7 출력

//반올림 (Round)->Math.round()
//Math.round(x)를 하면 x의 반올림된 값이 리턴
//소수점 부분이 0.5 이상이면 가장 가까운 정숫값으로 올라가고, 소수점 부분이 0.5 미만이면 가장 가까운 정숫값으로 내려감
console.log(Math.round(2.3));
console.log(Math.round(2.4));
console.log(Math.round(2.49));
console.log(Math.round(2.5));
console.log(Math.round(2.6));

//버림과 올림 (Floor and Ceil)
// Math.floor(x)을 하면 x의 버림 값이, Math.ceil(x)을 하면 x의 올림 값이 리턴(소수 부분이 얼마인지는 상관없음)
console.log(Math.floor(2.4));//소수점이 버려져 2
console.log(Math.floor(2.49));//소수점이 버려져 2
console.log(Math.floor(2.8));//소수점이 버려져 2
console.log('-');
console.log(Math.ceil(2.4));//소수점이 올려져 3
console.log(Math.ceil(2.49));//소수점이 올려져 3
console.log(Math.ceil(2.8));//소수점이 올려져 3

//난수 (Random)->Math.random
// Math.random을 하면 0 이상 1 미만의 값이 랜덤으로 리턴
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//자바스크립트 숫자 합산
let sum = 0.1 + 0.2
console.log(sum)//0.3과 가까운 0.30000000000000004가 출력
// ->사람과 컴퓨터간의 숫자 다루는 방식이 다름. 컴퓨터는 0과1 2진수로만 이루워져있어 무한소수로 돌아가게되고 그러다 어느자리에서 반올림을 해서 값을 출력함
console.log(sum.toFixed(1))//0.3 출력->필요한 자릿수에서 반올림되게 만들어 결과를 출력(but, 이렇게 코드를 작성하면 문자열로 출력)
console.log(Number(sum.toFixed(1)))//숫자형으로 변환
console.log(+sum.toFixed(1))//숫자형으로 변환
console.log(Math.round(sum*10)/10)//필요한 소수점 자리수만큼 10의 거듭제곱을 하여 정수로 먼저 만들어 round 메소드로 계산을 한 후 다시 그만큼 나눠주어 계산


[다양한 Math 함수 보기:https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math]