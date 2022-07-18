//String
let myString = 'Hi Codeit'

//부분 문자열 접근 slice(start, end)
console.log(myString.slice(0,2));//시작 인덱스인 0부터 2번인덱스 직전까지 리턴(->0번 인덱스와 1번 인덱스 출력)
console.log(myString.slice(3));//splice메소드와 마찬가지로 시작지점인덱스부터 끝까지 리턴
console.log(myString.slice());//값이 생략되어있다면 모든 문자열 출력


//양 끝 공백 제거
console.log(myString.trim())//trim 메소드

//대소문자 변환
console.log(myString.toUpperCase())//모두 대문자로 변환
console.log(myString.toLowerCase())//모두 소문자로 변환

//요소 탐색
console.log(myString.indexOf('i'))//앞부터 탐색
console.log(myString.indexOf('a'))//문자열에 없는 문자열을 찾으려고 하면 -1이 출력
console.log(myString.lastIndexOf('i'))//뒤부터 탐색

//요소 접근
console.log(myString[3])//대괄호 표기법
console.log(myString.charAt(3))//charAt 메소드

//문자열 길이(공백포함 길이를 알려줌)
console.log(myString.length)//length 프로퍼티



///문자열과 배열///
//1. 비슷한 점 : lengrg 프로퍼티를 가지고있고, 대괄호 표기법으로 각 요소에 접근할 수 있음. 
let myString2 = 'Codeit';

for (let str of myString2) {
  console.log(str);
}//str이라는 이름으로 myString2의 문자열을 뽑아내서 출력함.

//2. 다른점(문자열과 객체라는 차이가 있음)
let myString3 = 'Codeit';
let myArray = ['C', 'o', 'd', 'e', 'i', 't'];

console.log(typeof myString3);
console.log(typeof myArray);

//★가장 중요한 차이!!//
// 배열은 'mutable(바뀔 수 있는)' 자료형인 반면 문자열은 'immutable(바뀔 수 없는)' 자료형
// 배열은 mutable->요소에 접근해서 할당연산자를 통해 요소 수정 가능
let myArray2 = ['C', 'o', 'd', 'e', 'i', 't'];
myArray2[0] = 'B';
console.log(myArray2);//['B', 'o', 'd', 'e', 'i', 't']로 0번 인덱스값이 수정되어 출력

// 문자열은 immutable->한 번 할당된 값을 수정할 수 없음. 
//변수에 할당된 문자열을 바꾸고 싶다면, 일부를 바꾸는게 아니라 새로운 문자열을 지정해주어야 함. =>따라서 요소값을 지정해 삭제하는 splice와 같은 메소드는 사용불가
let myString4 = 'Codeit';
myString[0] = 'B';
console.log(myString4);



//예제
let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

// 코드를 작성해 주세요.
let hd = lyrics.indexOf("형돈")
hd_part = lyrics.slice(hd-1)
let hd_end = hd_part.indexOf('[',1)

// 테스트 코드
console.log(hd_part.slice(0,hd_end));