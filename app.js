const age = parseInt(prompt("how old are you?")); 

if(isNaN(age)){
    alert("plese write number");
} else if(age < 18){
    alert("you need agreement from your parents")
} else {
    alert(age);
}



// constant can not change (상수)
// variable with "let" can change value (변수)
// Before time we use "var" <- 옛날 거 아무것도 구분 못 함
// let 은 새로운 것을 생성 할 때만  
// boolean은 true 또는 False
// "null" mean none, nothing
// "undefined"는 정의 되지 않았다 
// array 는 파이썬에 리스트와 비슷 하다, 그러나 데이터와 더 가깝다, index도 똑같이 적용된다
// object 를 만들기 위해서는 {}를 사용한다, 파이썬의 딕션어리와 비슷하다
// 수정, 추가도 가능, ex: ayden.siblings = true;
// function을 만들기 위해서는 function을 적는다, 오브젝트와 비슷
//function()<-으로 세상과 연결 해준다
// const player = {
//     name : "ay",
//     sayHello : function(name){
//         console.log("hello " + name);
//     },
// };

// player.sayHello();
// we will make some function that just return result to variable. To do that we should use "return"
// 조건문, if else 
// prompt 는 파이썬에 input과 비슷하다? 
// parserInt 는 파이썬에 int()와 비슷하다
//console.log(typeof(age), typeof(parseInt(age)))
//isNan <- 숫가자 아냐냐? 라고 물어보는 것
// else if == elif in python