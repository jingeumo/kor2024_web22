package korweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// ============= 템플릿 반환 하는 컨트롤러 클래스 =========== //
@Controller
public class ViewController {

    // [1] 메인페이지를 반환해주는 메소드
    @GetMapping("") // http://localhost:8080
    public String index(){   return "index.html"; }

}
