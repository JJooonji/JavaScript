//자료형(Date Type)

//기본형(primitive Type)-> string, Number, Boolean, Null, Undefined
//=> 기본형값을 변수에 담아 사용할 때는 값이 그대로 할당(변수=값)

//참조형(Reference Type)->object
// =>참조형값을 변수에 담아 사용할 때는 해당 객체를 담은 주소값이 할당(변수=주소값)
let x = {name:'Codeit'}
let y = x

console.log(x)//{name: 'Codeit'} 출력
console.log(y)//{name: 'Codeit'}
y.birth = 2017
console.log(x)//{name: 'Codeit', birth: 2017}
//-> birth 값을 x에 따로 추가해주는 코드는 없지만 let y=x를 통해 주소값이 복사되어 같은 주소값을 가지고 있기때문에 한곳에만 추가해서 콘솔을 찍어도 같은 값이 출력됨
console.log(y)//{name: 'Codeit', birth: 2017}


//참조형 복사하기(Reference Type Copy)
//예시1(배열)
let numbers1 = [1, 2, 3]
let numbers2 = numbers1.slice()//slice의 원래 값이 그대로 리턴되는 특성을 활용해서 numbers2에만 값을 넣어줄 수 있음.

numbers2.push(4)

console.log(numbers1)
console.log(numbers2)

//예시2(객체)
let course1 = {
    title: '파이썬 프로그래밍 기초',
    language: 'Python'
}
let course2 = Object.assign({}, course1)//assugn  메소드를 활용하면 해당 객체에만 복사 가능

course2.title = '알고리즘의 정석'

console.log(course1)
console.log(course2)

//예시3(객체)
let course3 = {
    title: '파이썬 프로그래밍 기초',
    language: 'Python'
}
let course4 = {}

for(let key in course3) {
    course4[key] = course3[key]
}

course4.title = '자료 구조'

console.log(course3)
console.log(course4)

//예시4(객체)->만약 객체가 2개 이상일 때 사용->함수를 사용
function cloneDbject(object) {//파라미터로 복사할 객체를 전달받음
    let temp = {}//임시로 빈 객체를 생성

    for(let key2 in object) {
        temp[key2] = object[key2]
    }//for..in문으로 통해 객체를 복사

    return temp; //임시객체 리턴
}

let course5 = {
    title: '파이썬 프로그래밍 기초',
    language: 'Python'
}
let course6 = cloneDbject(course5);//복사된 객체가 course6에 담김
let course7 = cloneDbject(course5);

for(let key in course5) {
    course6[key] = course5[key]
}

course6.title = '자료 구조'

console.log(course5)
console.log(course6)


//실습 문제
// 아래 코드중 잘못된 부분을 수정해 주세요.
let espresso = ['espresso'];

let americano = espresso.slice();
americano.push('water');

let caffeLatte = espresso.slice();
caffeLatte.push('milk');

// 여기에 caffeMocha와 vanillaLatte 레시피를 만들어 주세요.
let caffeMocha = caffeLatte.slice();
caffeMocha.push('chocolateSyrup');

let vanillaLatte = caffeLatte.slice();
vanillaLatte.push('vanillaSyrup')


// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);