//숫자표기법
let millionaire = 1000000000;
let myNumber = 1e9; //지수표기법(왼쪽에 있는 수의 오른쪽의 수만큼 10의 거듭제곱)
console.log(millionaire);
console.log(myNumber)
console.log(millionaire === myNumber)

console.log(25e5 === 2500000);
console.log(5.3e3 === 5300);
console.log(-6.1e8 === -610000000);
console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === -0.000091);

//16진법(Hexadecimal)//구성->0+Hexadecimal의 x+16진수
let hex1 = 0xff; //255
let hex2 = 0xFF; //255
//8진법(Octal)//구성->0+octal의 o+8진수
let octal = 0o377; //255
//2진법(binary numeral system)//구성->0+binary의 b+2진수
let binary = 0b11111111 // 255

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);



//Number(객체)
let myNumber2 = 0.3591;

//toFixed(0~100)(메소드->소수를 다룰때 사용 파라미터로 숫자값을 전달하면 그만큼 소수점 자리수를 고정)
console.log(Number(myNumber2.toFixed(3)))
console.log(Number(myNumber2.toFixed(7)))//파라미터로 전달하는 값이 숫자값의 자릿수를 초과하면 0으로 입력됨//->0.3591000으로 출력
console.log(typeof myNumber2.toFixed(3))//계산된값은 문자열로 출력되니 더하기 연산을 할때 주의해야함.
console.log(Number(myNumber2.toFixed(3)))//Number을 입력하여 숫자형으로 변환
console.log(+myNumber2.toFixed(2))//값앞에 +부호를 붙여주면 Number로 변환됨

//toString->파라미터로 전달하는 숫자의 진법으로 숫자를 전환
let myNumber3 = 255;
console.log(myNumber3.toString(2))
console.log(myNumber3.toString(8))
console.log(myNumber3.toString(16))

//숫자형 메소드 사용시 주의사항
// console.log(255.toString(2))//이와 같이 변수이름이 아닌 정수에 바로 .을 찍어 표기하면 소수점으로 인식해 오류가 날 수 있음.
console.log(255..toString(2))//..점두개를 찍으면 정수형 숫자값도 인식할 수 있음
console.log((255).toString(2))//숫자를 괄호 안에 담아도 인식 가능

console.log(Number((4 * 30 + 3).toString(10)))
console.log((123.456).toFixed(0))
console.log(1.23e2)
console.log(0x7b.toString(10) * 1)