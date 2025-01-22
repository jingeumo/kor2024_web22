
// JS자동완성 : 1. VSCODE 2. 플러그인 : tabnine

// [1] 회원가입 함수
const onSignUp = ( ) => { console.log('함수 실행됨.');
    // (1) INPUT DOM 가져온다.
    let midInput = document.querySelector('.midInput');     console.log( midInput )
    let mpwdInput = document.querySelector('.mpwdInput');   console.log( mpwdInput )
    let mpwdCheckInput = document.querySelector('.mpwdCheckInput'); console.log( mpwdCheckInput )
    let mnameInput = document.querySelector('.mnameInput'); console.log( mnameInput )
    let memailInput = document.querySelector('.memailInput'); console.log( memailInput )
    // (2) DOM의 value(입력받은값) 반환 받는다.
    let mid = midInput.value;               console.log( mid )
    let mpwd = mpwdInput.value;             console.log( mpwd )
    let mpwdCheck = mpwdCheckInput.value;   console.log( mpwdCheck )
    let mname = mnameInput.value;           console.log( mname )
    let memail = memailInput.value;         console.log( memail )
    // (!!!생략) 다양한 유효성검사 코드 생략 .

    // (3) 입력받은 값들을 서버에게 보낼 객체 만들기
    let dataObj = { mid : mid , mpwd : mpwd , mname : mname , memail : memail }; 
    console.log( dataObj );

    // (4) fetch 옵션 

    // (5) fetch 통신 

    // (6) fetch 응답 에 따른 화면 구현 

} // f end
