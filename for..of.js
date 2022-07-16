//for...of
//for(변수 of 배열){
//     동작부분;
// }

let influencer = ['suwonlog','small.tiger','Minam.ludens','cu_convenience24']

for(let i = 0; i < influencer.length; i++) {
    console.log(influencer[i])
}

for (let element of influencer){
    console.log(element)
}

// for..in 문으로 작성하면 ↓(요소 in name)
for(let index in influencer){
    console.log(influencer[index])
}//for..in문은 일반적인 객체에 더 최적화되어있기 때문에 배열에는 사용하지 않을것을 권장함.



//배열 예제(학생회장 선거 투표집계)
// 투표 결과 리스트
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하', 
];

// 후보별 득표수 객체
let voteCounter = {};

// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
  // 코드를 작성하세요.
    if(name in voteCounter){
        voteCounter[name]+=1//반복문을 돌면서 name이 있다면 +1을 해주고
    }else{
        voteCounter[name]=1//더이상 name이 없다면 그냥 1로 출력(1번 언급되었다는 말말
    }
}

// 후보별 득표수 출력
console.log(voteCounter);
//->{이재식: 17, 이규하: 23}로 출력


//다차원 배열(multidimensional array)->배열안에 배열이 들어가는 것
//각 배열의 순서나 위치의 정보가 중요하여 의미를 부여하고 싶을 때 사용
let twoDimensional =[[1,2],[3,4]];
console.log(twoDimensional[0])//[1,2]가 출력
console.log(twoDimensional[0][1])//2가 출력



//예제(팀나누기)
// ->총 10명이 5명씩 팀을 나누고, 실력이 비슷한 사람끼리 가위바위보를 해 이긴사람이 0번index, 진 사람이 1번index의 배열을 정리
let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],
	[],
];

// 여기에 코드를 작성해 주세요.
for(let i=0; i<groups.length; i++){//groups의 길이만큼 반복
    for(let j = 0; j < groups[i].length; j++)//변수 j를 선언하고 groups[i]번째의 길이만큼 반복(2로 반복, 2열이기때문에)
        teams[j][i] = groups[i][j]//groups의 인덱스 [0][1]값을 teams[1][0]으로 뒤집어줌
}

// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);