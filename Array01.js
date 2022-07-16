//배열(Array)
//값들의 순서가 중요한 경우 property name은 지우고 값들의 순서만 유지해도 될 때 사용
//랭킹처럼 순서가 있는 값을 만들때는 객체보다 배열을 사용하는것이 더 간결함.
//배열도 자바스크립트에서 만들어놓은 조금 특별한 객체의 한종류이다.(typeof를 찍으면 object로 나옴)


// let couseRanking = {
//     '1st': '자바스크립트 프로그래밍 기초',
//     '2nd': 'Git으로 배우는 버전 관리',
//     '3rd': '컴퓨터 개론',
//     '4th': '파이썬 프로그래밍 기초'
// };

// ↓ 배열로 정리->배열안의 값은 요소(element)
//대괄호 안의 각 요소별로 순서를 알려주는 숫자가 매겨짐
// 이 숫자 값을 index라고 함. index == PropertyName

let couseRanking = [
   '자바스크립트 프로그래밍 기초',
   'Git으로 배우는 버전 관리',
   '컴퓨터 개론',
   '파이썬 프로그래밍 기초' 
];
// indexing ->index를 통해서 요소에 접근하는 것/0부터 시작
// console.log(배열이름[index])
console.log(couseRanking[0])//->0입력했으니 첫번째 순서인 ;자바스크립트 프로그래밍 기초'가 찍힘
console.log(couseRanking[2+1])//합산값이 3이니 네번째 순서인 '파이썬 프로그래밍 기초'가 찍힘

//예제1(아래의 배열을 모두 출력하는 프로그램을 작성)
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];
for(let i =0; i < dataType.length; i++) console.log(dataType[i]); //중괄호를 생략하고 한줄로 입력해도 콘솔에 출력이 됨.


// 
let members = ['쿤갈레', 'zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];

console.log(typeof members)
console.log(members.length)
console.log(members['length'])//대괄호 표기법으로 길이의 접근 가능
console.log(members[members.length -1]);//배열의 마지막 요소에 접근
//배열의 요소 추가 방법
members[5] = 'NiceCodeit'
console.log(members[5])
//index의 순서를 넘어 추가하면 undefined가 나옴. 전체 문장을 출력했을 때 빈값이 나와 원하는 값이 나오지 않을 수 있음.
members[7] = 'Happy'
console.log(members[6])
//요소의 수정
members[3] = '달토끼'
console.log(members);


//예제2(섭씨온도를 화씨로 변환)
//F: 화씨(fahrenheit), C: 섭씨(celsius)
//변환공식 -> F = (c * 9 / 5) + 32;
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];
for(let i = 0; i < celsiusTemps.length; i++){
   fahrenheitTemps[i] = (celsiusTemps[i]*9/5)+32
}
console.log(fahrenheitTemps)

