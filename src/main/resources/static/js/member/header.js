
// [1] 로그인 정보 요청 함수 정의 
const getLoginMid = ( ) =>{

    //  fetch 함수 활용하여 현재 로그인 상태 체크 
    // 1. fetch option
    const option = { method : 'GET' }
    // 2. fetch 
    fetch( '/member/login/id.do' , option )
        // .then( response => response.json() ) // SyntaxError: Unexpected token 'q', "qweqwe" is not valid JSON
        .then( response => response.text() ) // String controller 에서 String 타입으로 반환할 경우에는 .text() 함수로 변환해야한다.
        .then( data => {  console.log(data); 

            // - 로그인 상태에 따라 버튼 활성화 여부 다르게 표현 
                // 1. 출력할 위치 DOM 가져오기 
            let memberBox = document.querySelector('.memberBox')
                // 2. 
            let html = '';
            if( data == '' ){ // 응답 결과가 비어 있으면 
                console.log( '비로그인상태');
                // 3. 회원가입 버튼 , 로그인 버튼 활성화
                html += `<li class="nav-item">  <a class="nav-link" href="/member/signup"> 회원가입 </a> </li>
                        <li class="nav-item">  <a class="nav-link" href="/member/login"> 로그인 </a> </li>`
            }else{ // 응답 결과가 비어 있지 않으면 
                console.log( '로그인상태');
                //3. 로그아웃 버튼 , 마이페이지 버튼 , 로그인된 아이디 활성화 
                html +=`<li class="nav-item">  <a class="nav-link" href="#"> ${ data } 님 </a> </li>
                        <li class="nav-item">  <a class="nav-link" href="#" onclick="logOut()"> 로그아웃 </a> </li>
                        <li class="nav-item">  <a class="nav-link" href="/member/login"> 마이페이지 </a> </li>`
            }
            // 4. 출력하기 
            memberBox.innerHTML = html;
        })
        .catch( error => { console.log( error)})
} // f end 
getLoginMid(); // JS 실행될때. 로그인 정보 요청 함수 호출 

// [2] 로그아웃 함수
const logOut = ( ) => {
    // 1. fetch option
    const option = { method : 'GET' }
    // 2. fetch
    fetch( '/member/logout.do' , option )
        .then( response => response.json() )
        .then( data => {
            // 만약에 로그아웃 성공 했다면 로그인 페이지로 이동
            if( data == true ){ alert('로그아웃 했습니다.'); location.href="/member/login"; } 
        })
        .catch( e => { console.log(e); })
} // f end