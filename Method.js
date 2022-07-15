//메소드 (Method)
//연관성있는 함수들을 하나로 묶을 수 있음
//다른 함수와의 이름 중복을 피해 객체에 집중할 수 있음

let greeting = {
    sayHello: function (name) {
        console.log(`Hello ${name}!`);
    },
    sayHi: function() {
        console.log('Hi!');
    },
    sayBye: function() {
        console.log('Bye!')
    }
}


//점표기법 접근 -> 메서드 사용시 이 방법으로 접근을 많이함.
greeting.sayHello('codeit')

//대괄호 표기법 접근
greeting['sayHello']('codeit')


let myVoca = {
    addVoca: function(voca, mean){
        myVoca[voca] = mean;
    },
    deleteVoca: function(voca){
        delete myVoca(voca);
    },
    printVoca: function(voca) {
        console.log(`'${voca}'의 뜻은 '${mean}'입니다.`)
    }
}
// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');//addVa
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);