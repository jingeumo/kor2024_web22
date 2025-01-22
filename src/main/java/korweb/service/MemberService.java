package korweb.service;

import jakarta.transaction.Transactional;
import korweb.model.dto.MemberDto;
import korweb.model.entity.MemberEntity;
import korweb.model.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class MemberService {
    @Autowired private MemberRepository memberRepository;

    // 1. 회원가입 서비스
    @Transactional // 트랜잭션
    public boolean signup( MemberDto memberDto ){
        // 1.  저장할 dto를 entity 로 변환한다.
        MemberEntity memberEntity = memberDto.toEntity();
        // 2. 변환된 entity를 save한다.
        // 3. save(영속성/연결된) 한 엔티티를 반환 받는다.
        MemberEntity saveEntity = memberRepository.save( memberEntity );
        // 4. 만약에 영속된 엔티티의 회원번호가 0보다 크면 회원가입 성공
        if( saveEntity.getMno() > 0 ){ return true; }
        else{ return  false;}
    } // f end

    // 2. 로그인 서비스
    @Transactional // 트랜잭션
    public boolean login( MemberDto memberDto ){
        //[방법1]
        /*
        // (1) 모든 회원 엔티티를 조회한다.
        List<MemberEntity> memberEntityList = memberRepository.findAll();
        // (2) 모든 회원 엔티티를 하나씩 조회한다.
        for( int index = 0 ; index <= memberEntityList.size()-1 ; index++ ){
            // (3) index번째의 엔티티를 꺼내기
            MemberEntity memberEntity = memberEntityList.get(index);
            // (4) index번째의 엔티티 아이디가 입력받은(dto) 아이디와 같으면
            if( memberEntity.getMid().equals( memberDto.getMid() ) ) {
                // (5) index번째의 엔티티 비밀번호가 입력받은(dto)비밀번호와 같으면
                if( memberEntity.getMpwd().equals( memberDto.getMpwd() ) ){
                    System.out.println(" login OK ");
                    return true; // 로그인 성공
                } // if end
            } // if end
        } // for end
        return false; // 로그인 실패
        */

        // [방법2] JPA Repository 추상메소드 활용.
        boolean result
        = memberRepository.existsByMidAndMpwd( memberDto.getMid() , memberDto.getMpwd() );

        if( result == true ){
            System.out.println("로그인성공");
            return true; // 로그인 실패
        }else{
            System.out.println("로그인실패");
            return false; // 로그인 실패
        }

    } // f end
} // class end



















