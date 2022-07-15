//여러가지 값을 한번에 저장하고 싶을 때 객체(object) 사용//
//'자바스크립트의 모든 것이 다 객체다!!->고로 그만큼 중요★!!//
//다양한 값이 들어갈 수 있기때문에 : 및 ,와 함께 값을 명확하게 지정해주어야 함.
// 속성(property)
// property name : property value로 구분
// property name 주의사항
// -보통 문자열(string)
// - 첫번째 글자는 반드시 문자, 밑줄(_), 달러기호($)중 하나로 시작
// - 띄어쓰기 금지, 하이픈(-)금지->위의 규칙을 벗어나는 경우 ★따옴표★로 감싸주면 객체로 만들수 있음.
//property value
// - 모든 자료형 객체 활용가능(객체 안에 객체도 사용 가능)

let codeit = {
    name:'코드잇',
    bornyear:2017,
    'birth-day':'94-04-15',
    isVertyNice:true,
    worstCourse:null,
    bestCourse:{
        title:'자바스크립트 프로그래밍 기초',
        language:'JavaScript'
    }
};


//점 표기법(objectName.propertyName)->가장간단하고 많이사용됨 but, 따옴표를 생략할 수 없는 property name으로는 접근할 수 없음.
console.log(codeit.bornyear)

//대괄호 표기법(objectName['propertyName])->propertyName을 좀더 유연하게 사용 가능
console.log(codeit['birth-day'])
console.log(codeit.bestCourse['title']); //객체안의 객체에 접근

let propertyName = 'name'
console.log(codeit[propertyName])

//객체의 property 수정
console.log(codeit.name);
codeit.name = 'codeit';
console.log(codeit.name);


//객체의 property 추가
console.log(codeit.ceo);
codeit.ceo = '강영훈';
console.log(codeit.ceo)

//property 삭제
console.log(codeit.worstCourse);
delete codeit.worstCourse;
console.log(codeit.worstCourse);


///property 존재여부 확인///

console.log(codeit.name !==undefined);

//in연산자//'propertyName' in object  -> 이해하기도 쉽고 property를 확인할 때 조금 더 안전함
console.log('name' in codeit);