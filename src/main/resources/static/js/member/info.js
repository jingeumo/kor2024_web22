

// [1] 
const getMyInfo = ( ) => {

    // 1. 
    fetch("/member/myinfo.do", { method : 'GET'})
    .then( response => response.json() )
    .then( data =>{
        if( data != '' ){

            document.querySelector('.midInput').value = data.mname;
            document.querySelector('.mnameInput').value = data.mname;
            document.querySelector('.memailInput').value = data.memail;
        }
    }).catch( e => console.log(e))
}
getMyInfo();

const onDelete = ( ) => {

    let result = confirm('정말 탈퇴 하실건가요?');
    if( result == false ) { return; }

    fetch('/member/delete.do', { method : 'DELETE' })
    .then( response => response.json() )
    .then( data => {
        if( data == true){ alert('탈퇴 성공'); location.href='/';}
        else{ alert('탈퇴 실패'); }
    }).catch( e => {console.log(e); })
}