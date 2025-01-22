package korweb.controller;

import korweb.model.dto.MemberDto;
import korweb.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {

    @Autowired private MemberService memberService;

    // 1. 회원가입 HTTP 매핑
    @PostMapping("/member/signup.do")
    public boolean signup(@RequestBody MemberDto memberDto ){
        return memberService.signup( memberDto );
    }

}
