//요소의 삭제->완벽한 삭제를 위해 배열이 가지고 있는 method를 활용해야함.

//배열의 메소드(Array's Method)
let members = ['쿤갈레', 'Werrard66', '우리생각해써', '흙토끼','End Miracle']
console.log(members)
delete members[4];
console.log(members)

//splice//배열을 삭제할 때 사용
members.splice(1)//전달된 요소로부터 그 이후의 모든 요소가 삭제됨.
console.log(members)

//splice(StartIndex, deleteCount)->splice(삭제를 시작할 인덱스, 삭제할 갯수)
let members2 = ['하나', '둘', '셋', '넷', '다섯']
members2.splice(1,1);//첫번째 인덱스로 부터 1개를 지웠음으로 '둘'이 삭제됨.
console.log(members2)

//splice(StatIndex, deleteCount, Item)-> 마지막 item은 삭제한 요소자리의 값을 추가할 수 있음
let members3 = ['일', '이', '삼', '사', '오']
members3.splice(1,1, 'two', 'three')//이가 사라지고 two와 three가 추가됨
console.log(members3)

members3.splice(1,0, 'four', 'five')//숫자를 0으로 민들어주면 아무것도 삭제되지 않고 첫번째 요소 이후로 item 입력값이 추가됨.
console.log(members3)

//요소의 수정
let members4 = ['영우','동그','라미','권모','술수','준호']
members4.splice(4,1,'수연')//4번째인 '권모'의 다음인 '술수'1개를 '수연'으로 바꿔줌
console.log(members4)


///예제1
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요.
fruits.splice(1,1,'사과','청포도')
console.log(fruits)

// fruits 배열의 첫 번째 요소를 삭제해 주세요.
fruits.splice(0,1)
console.log(fruits)


// ages 배열에 마지막 요소를 삭제해 주세요.
ages.splice(5,1)
console.log(ages)

// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.
ages.splice(2,2,26,28)
console.log(ages)


// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.
numbers.splice(1,0 ,1,2,3,5,8,9)
console.log(numbers)

// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !==0){
        numbers.splice(i,1)
        i--
    
        //반복문에서 i++에 의해 다음 차례에서 확인해야 할 인덱스의 값의 요소가 지워지면서 건너띌 수 있게 됨.(동작이 수행할때마다 i가 증가하기 때문에 삭제될 때 만큼은 i가 증가되는 현상을 방지)
        //그래서 요소가 지워지더라고 서--를 해서 지워진 요소로 인해 앞 인덱스로 땡겨졌던 원래 확인하여야할 요소를 접근할 수 있게 해줌.
    }
}


// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);
