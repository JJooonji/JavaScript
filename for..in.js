// for..in
// for (변수 in 객체) {
//     동작부분
// }

let codeit = {
    name:'코드잇',
    bornyear:2017,
    isVertyNice:true,
    worstCourse:null,
    bestCourse:{
        title:'자바스크립트 프로그래밍 기초',
        language:'JavaScript'
    }
};

for(let k in codeit) {
    console.log(k)//name추출
    console.log(codeit[k])//value값 추출
}

///1.숫자형(양수) 프로퍼티 네임///
let myObject = {
    300:'정수',
    1.2:'소수',
};
for (let key in myObject) {
    console.log(`${key}의 자료형은 ${typeof key}입니다.`)
} //아래와 같이 결과 출력
//300의 자료형은 string입니다.
// 1.2의 자료형은 string입니다.

//예외적인 파라미터 네임은 접근할 때 대괄호표기법으로만 접근이 가능
console.log(myObject['300']);
console.log(myObject['1.2']);
// console.log(myObject.300); // Error!
// console.log(myObject.1.2); // Error!


///2.정수형 프로퍼티 네임///->for in문 사용할 때 가장 주의해야함!
//객체는 정수형 프로퍼티 네일을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있음
let myObjects = {
    3:'정수3',
    name:'condeit',
    1:'정수1',
    birthday:'2017.5.17',
    2:'정수2'
}
for (let kk in myObjects){
    console.log(kk)
}
//->이렇게 입력하면 1 -> 2-> 3-> name ->  birthday의 순서로 출력이 됨
//자동정렬 특성이 장점일 수 있지만, 의도치 않은 결과를 자겨올 수 있기때문에 정수형 프로퍼티는 잘 사용되지않음.
//불가피하게 사용하는 경우에는 이런 객체 정렬방식을 이해한 상태에서 가급적 명확한 의미가 있는 프로퍼티 네임을 사용해야 함.



//예시->시험결과계산
let hyesoonScore = {
    '데이터 모델링의 이해': 10,
    '데이터 모델과 성능': 8,
    'SQL 기본': 22,
    'SQL 활용': 18,
    'SQL 최적화 기본 원리': 20,
};
let minsoonScore = {
    '데이터 모델링의 이해': 14,
    '데이터 모델과 성능': 8,
    'SQL 기본': 12,
    'SQL 활용': 4,
    'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject){
    let totalScore = 0;
    for(let kkk in scoreObject){
        totalScore += scoreObject[kkk]
    }
    if(totalScore>=60){
        console.log('축하합니다! 합격입니다')
    }else{
        console.log('아쉽지만 불합격입니다.')
    }
}
passChecker(hyesoonScore)
passChecker(minsoonScore)