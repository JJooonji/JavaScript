# JavaScript의 특성

## 느슨한 타입(loosely typed)의 동적(dynamic) 언어
- 자바스크립트는 느슨한 타입의 동적언어라고 한다.
<br>느슨한데 동적인 것은 무슨말일까...<br>일단 느슨한 타입이 어떤 것인지부터 알아보자!

#### <느슨한 타입>은 타입없이 변수를 선언하는것, 반대로는 강력한 타입을 사용하는 언어는 타입과 함께 변수를 선언해야 한다.
<br>예를 들어, 자바스크립트의 느슨한 타입에서는 아래와 같이 변수를 선언했을 때, 각자의 타입이 출력될 것이다.
```
var a = 9
var b = "sparta"
```
하지만, 강력한 타입에서는 var같은 변수를 선언하는 것이 아닌 이것은 문자열이라는 String이, 이것은 정수다! 라는 int가 선언되어야 한다는 것이다.<br>그리고 미리 어떠한 타입인지 결정되는 것이 아니고, 코드 실행 시 타입이 결정되어 나오기 때문에 자바스크립트는 느슨한 타입의 동적 언어라고 말할 수 있을 것이다.

<br>

### <동적 언어>
#### 동적 언어의 장점은 런타임까지 타입에 대한 결정을 끌고가기 때문에 선택의 여지가 있다. 하지만, 문제점으로 실행 도중 변수에 예상치못한 타입이 들어와 타입에러가 발생하는 경우가 생길 수 있어 안정성이 떨어지게 된다.

#### 이에 대한 보완방법으로 Typescript를 사용할 수 있다.<br>타입스트립트는 자바스크립트 기반의 정적 타입 언어로, 객체 지향적인 언어이다. 자바스크립트의 모든 기능을 포함하면서 정적 타입을 지원한다.<br>정적 타입은 코드의 양이 많을 때 생산성이 높고, 런타임 이전에 타입이 올바른지 검사를 시행하고, 컴파일하는 과정에서 오류를 발견한다.
<br>

---

## 자바스크립트의 형변환
- 형 변환 : 처음의 값으로 정해진 자료형을 다른 자료형으로 바꾸는 것 <br>     타입이 다른 변수의 값을 연산했을 때 의도치 않은 결과값이 나올 수 있기때문에 형변환을 통해 정확한 값을 도출해내기 위해 사용
- 형 변환의 종류는 크게 문자형/숫자형/불린형으로 나누어진다.
이름 그대로 문자형은 문자로 변환 / 숫자형은 숫자로 전환
 / 불린형은 참과 거짓의 형태로 전환하는 것이다.

<br>

1. 문자형 변환(String 함수)
<br>

* 숫자 -> 문자
```
let a = 123;
console.log(a); -> 숫자형 123으로 출력
console.log(String(a)); ->문자형 123으로 출력
console.log(typeof a); ->number 출력
console.log(typeof String(a)); ->string 출력
```

* 불린 -> 문자
```
let y = true
console.log(y); ->불린형 true 출력
console.log(String(y)); ->문자형 true 출력
console.log(typeof y); ->boolean 출력
console.log(typeof String(y)); ->string 출력
```

<br>

2. 숫자형 변환(Number 함수)<br>
-주의사항 : 숫자가 아닌 형태의 문자값들은 숫자로 변환할 때 NaN으로 출력되지만, 숫자형태의 문자값들은 숫자로 바로 형 변환이 되어 잘 출력된다.
<br>
* 문자 -> 숫자

```
let x = '문자';
console.log(x); ->문자형 문자으로 출력
console.log(Number(x)); ->NaN 출력
console.log(typeof x); ->string 출력
console.log(typeof Number(x)); ->number 출력

let z = '123';
console.log(z); ->문자형123으로 출력
console.log(Number(z)); ->숫자형 123 출력
console.log(typeof z); ->string 출력
console.log(typeof Number(z)); ->number 출력
```

* 불린 -> 숫자
```
let y = true
console.log(y); ->불린형 true 출력
console.log(Number(y)); ->숫자형 1 출력//true라면 1, false라면 0으로 숫자값이 출력됨
console.log(typeof y); ->boolean 출력
console.log(typeof Number(y)); ->number 출력
```

<br>

3. 불린형 변환(Boolean 함수)<br>
-보통 어떤 값을 불린형으로 변환할 때는 true로 변환된다.<br>
-false로 변환되는 경우 => 없거나 비어있는듯한 느낌을 줄때/ 문자형의 경우 let i ='';일때, 숫자형의 경우 let j = 0; 또는 let j = NaN;일때
   - '', 0, NaN, undefined, null과 같이 불린형태로 변환했을 때 false로 나오게 하는 값을 falsy값이라고 부른다.
<br>

* 문자 -> 불린
```
let i = '문자';
console.log(i); ->문자형 문자으로 출력
console.log(Boolean(i)); ->불린형 true로 출력
console.log(typeof i); ->string 출력
console.log(typeof Boolean(i)); ->boolean 출력
```
<br>

* 숫자 -> 불린
```
let j = '123';
console.log(j); ->숫자형 123으로 출력
console.log(Boolean(j)); ->불린형 true로 출력
console.log(typeof j); ->number 출력
console.log(typeof Boolean(j)); ->boolean 출력
```
<br>

---

## 비교 연산자
### '=='은 Equal Operator이고, '==='은 Strict Equal Operator이다.<br>'=='은 값이 같은지를 비교해서 같으면 true, 다르면 false로 출력된다.<br>'==='은 엄격한(Strict) Equal Operator로 엄격하게 같음을 비교한다.<br>'=='와 같이 값만 같은지를 비교하는게 아니라 값과 타입까지 모두가 같아야 true, 다르면 false로 출력된다.
<br>

1.기본자료형

* 변수에 똑같은 1값을 주어도 숫자인지, 문자열인지에 따라 비교연산자의 값이 다르게 나온다<br>
'=='로 했을 땐 값이 1로 같기때문에 true, '==='로 비교했을 땐 숫자형과 문자형으로 타입이 다르기때문에 false 출력된다

* null과 undefined는 값이 없음을 뜻하는 것이 같아 '=='로 비교했을때는 true가 나오지만, '==='로 비교했을 때는 데이터 타입이 다르기 때문에 false가 출력된다

<br>

2.객체형

* 배열을 할당할 때, 각 변수는 각 메모리의 주소를 참조한다.
  두 변수 a, b의 값과 데이터 타입이 같지만, 참조하는 메모리의 주소가 다르기 때문에 a,b는 같지 않다.
```
var a = [1,2,3]; 
var b = [1,2,3]; 
console.log(a == b); // false 출력 
console.log(a === b); // false 출력
```

* 새로운 변수 c에 변수 b를 할당해주면 변수 c는 b의 메모리 주소를 가지게 되어 c와 b를 비교했을때, true가 출력된다.(객체도 마찬가지)
```
var a = [1,2,3]; 
var b = [1,2,3]; 
var c = b; 
console.log(b === c); // true 
console.log(b == c); // ture 
```
<br>

---

## undefined와 null
- undefined와 null은 공통적으로 자바스크립트에서 값이 없음을 나타낸다.

<br>


1.undefined

- 아무 값도 할당받지 않은 상태를 의미하며 하나의 값으로서 동작을 한다. <br>
- 변수를 선언한 이후 값을 할당하지 않은 변수를 출력하고자 하면 undefined가 나온다.<br>
- 변수를 참조했을 때 undefined가 반환된다면 선언 이후 값이 할당되지않은, 초기화되지않은 변수라는 것을 알 수 있다.

<br>

2.null
- 명시적으로 값이 비어있음을 나타내는데 사용한다.
- 아무것도 참조하고 있지 않다는 의미로, 주로 객체를 담을 변수를 초기화할 때 많이 사용한다.
- undefined는 변수를 선언하고 값을 주지 않아도 반환되지만, null은 변수를 선언한후 null로 값을 주어야한다.
- 변수에 null을 할당하는 것은 변수가 이전에 참조하던 값을 더이상 참조하지 않겠다는 의미이다.

* typeof 에서 null 
  - typeof로 nulld을 확인할 때 object로 반환하는데, 이는 null이 빈 참조를 나타내는데 자주 사용되기 때문이다.

* 함수가 반환하는 null
  - 함수가 유효한 값을 반환할 수 없는 경우에 명시적으로 null을 반환하기도 한다.

