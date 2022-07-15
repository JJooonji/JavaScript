//Date
let myDate = new Date();
console.log(myDate)//현재 시간이 출력됨->[Fri Jul 15 2022 22:58:23 GMT+0900 (한국 표준시)]
//아래 3가지 메소드는 사용자의 브라우저에 설정된 국가의 표기에 맞춰 날짜와 시간을 보여줌
console.log(myDate.toLocaleDateString());//myDate가 가진 날짜에 대한 정보(년. 월. 일)
console.log(myDate.toLocaleTimeString());//myDate가 가진 시간에 대한 정보(시:분:초)
console.log(myDate.toLocaleString());//myDate가 가진 날짜와 시간에 대한 정보(년. 월. 일 시:분:초)

//new Date(milliseconds) -> 1970년 1월 1일 00:00:00 UTC+1000밀리초(1초)만큼 지난 객체가 나옴
let myDate1 = new Date(1000);
console.log(myDate1)

//new Date('YYYY-MM-DD')
let myDate2 = new Date('2017-05-18');
console.log(myDate2)//해당날짜가 출력됨

//new Date(''YYYY-MM-DDThh:mm:ss')//가운데에 T를 넣고 시간대로 설정하여 해당 일시로 출력
let myDate3 = new Date('2017-05-18T19:11:16')
console.log(myDate3)

//new Date(YYYY, MM, DD, hh, mm, ss, ms)연도와 월은 필수 작성이고 나머지 뒤에는 생략가능
//ex)new Date(YYYY, MM, 1, 0, 0, 0, 0)
//Month의 경우 0부터 시작함->1월은 0월로 인식하니 주의해서 입력해야함!
let myDate4 = new Date(2017, 4)
console.log(myDate4)//Mon May 01 2017 00:00:00 GMT+0900 (한국 표준시) 로 출력됨

//Date.getTime() //->Date 객체의 기준 날짜인 [1970년 1월 1일 00:00:00UTC]로부터 몇 밀리초가 지났는지 계산해줌
// 타임스탬프(time stamp)->Date 객체의 기준날짜인 1970년 1월 1일 00:00:00 UTC를 부르는 이름임
let myDate5 = new Date(2017, 4, 18, 19, 11, 16);
let today = new Date();

let timeDiff = myDate5.getTime() - today.getTime();

console.log(timeDiff + '밀리초')
console.log(timeDiff + '초')
console.log(timeDiff / 1000 / 60 + '분')
console.log(timeDiff / 1000 / 60 / 60 + '시간')


//Date.getTime()과 비슷한 객체 활용
let myDate6 = new Date(2017, 4, 18, 19, 11, 16);

console.log(myDate6.getFullYear())//2017 출력
console.log(myDate6.getMonth())//4 출력
console.log(myDate6.getDate())//18 출력 ->일자
console.log(myDate6.getDay())//4 출력 ->요일(일요일부터 0~6으로 나타남)/4는 목요일임
console.log(myDate6.getHours())//19 출력
console.log(myDate6.getMinutes())//11 출력
console.log(myDate6.getSeconds())//16출력
console.log(myDate6.getMilliseconds())//0 출력


//Date객체에는 자동으로 날짜를 수정해주는 기능이 잇음. 범위를 벗어나는 값을 설정하려고 하면 자동으로 날짜를 수정해줌.
let myDate7 = new Date(1988, 0, 32);//1988년 1월 32일은 없는 값임.
console.log(myDate7)//Mon Feb 01 1988 00:00:00 GMT+0900 (한국 표준시) -> 2월 1일로 자동고침이 됨.


//Date.now()//메소드가 호출된 시점의 타임스탬프를 반환함->새로운 객체를 만들지 않아도 바로 현 시점의 날짜 값을 얻어낼 수 있음.
let myDate8 = new Date();
console.log(Date.now() === myDate8.getTime()); // true


//Date객체의 형변환
let myDate9 = new Date(2017, 4, 18);

console.log(typeof myDate9); // object(객체)
console.log(String(myDate9)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
console.log(Number(myDate9)); // 149503320000 // ===console.log(myDate9.getTime())
console.log(Boolean(myDate9)); // true

// Date객체끼리의 사칙 연산도 가능함.
let myDate10 = new Date(2017, 4, 18);
let myDate11 = new Date(2017, 4, 19);

let timeDiff2 = myDate11 - myDate10;
console.log(timeDiff2); // 86400000 (ms)
console.log(timeDiff2 / 1000); // 86400 (sec)
console.log(timeDiff2 / 1000 / 60) // 1440 (min)
console.log(timeDiff2 / 1000 / 60 / 60) // 24 (hour)
console.log(timeDiff2 / 1000 / 60 / 60 / 24) // 1 (date)


//날짜를 표현하는 문자열
//YYYY-MM-DDThh:mm:ss형식 말고도 날짜를 표현하는 다양한 방식의 문자열이 존재
let date1 = new Date('12/15/1999 05:25:30');
let date2 = new Date('December 15, 1999 05:25:30');
let date3 = new Date('Dec 15 1999 05:25:30');
//하지만, 이런 방시을 사용하다보면 브라우저나, 컴퓨터를 사용하는 위치의 시간대에 따라 서로 다른 결과 값이 나올 수도 있기 때문에
//  IETF 호환 RFC 2822 타임스탬프와 ISO8601의 한 버전의 형식을 준수하는 문자열로 Date객체를 생성하는 것을 권장한다고 함.
