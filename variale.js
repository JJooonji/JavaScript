//변수(variable)
//const->재할당이 불가=>코드를 안전하고 일관되게 사용 가능

//변수의 const  vs  상수의 const
//-> 이름을 짓는 방식으로 구분 가능
//변수 이름은 기본적으로 영어 소문자로 작성(ex>name), 여러단어들이 조합될 때는 두번째로 오는 단어부터는 각문자의 첫 문자를 대문자로 작성(ex>myName)
//상수 이름은 기본적으로 영어 대문자로 작성(ex>NAME), 여러단어들이 조합될 때는 밑줄로 단어를 구분(ex>MY_NAME)
//일관된 값으로 상수가 필요할 때는 이름을 명확하게 상수로 표현하는 것이 좋음

//예제
let team1 = ['Drum', 'Bass', 'Saxophone'];
const team2 = team1;//배열이 참조형이기때문에 주소값이 복사되어 같은 배열을 가리킴.

team1.splice(2, 1, 'Trumpet');//->[ 'Drum', 'Bass', 'Trumpet' ]이 되고,
team2.splice(2, 1, 'Piano');//->여기서 다시 [ 'Drum', 'Bass', 'Piano' ]이 됨.
//const 키워드로 변수를 선언하게 되면 값을 재할당할 수 없지만, 할당된 값이 객체나 배열일 경우 메소드를 통해서 그 값을 변경할 수가 있음.

console.log(team1);
console.log(team2);