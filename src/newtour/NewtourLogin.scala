package newtour;

import java.time.Duration;
import java.util.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import io.gatling.javaapi.jdbc.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import static io.gatling.javaapi.jdbc.JdbcDsl.*;

public class Newtourlogin extends Simulation {

  {
    HttpProtocolBuilder httpProtocol = http
      .baseUrl("https://demo.guru99.com")
      .inferHtmlResources(AllowList(), DenyList(".*\\.js", ".*\\.css", ".*\\.gif", ".*\\.jpeg", ".*\\.jpg", ".*\\.ico", ".*\\.woff", ".*\\.woff2", ".*\\.(t|o)tf", ".*\\.png", ".*detectportal\\.firefox\\.com.*"))
    ;

    Map<CharSequence, String> headers_0 = new HashMap<>();
    headers_0.put("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
    headers_0.put("accept-encoding", "gzip, deflate, br");
    headers_0.put("accept-language", "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7");
    headers_0.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102");
    headers_0.put("sec-ch-ua-mobile", "?0");
    headers_0.put("sec-ch-ua-platform", "Windows");
    headers_0.put("sec-fetch-dest", "document");
    headers_0.put("sec-fetch-mode", "navigate");
    headers_0.put("sec-fetch-site", "same-origin");
    headers_0.put("upgrade-insecure-requests", "1");
    headers_0.put("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36");

    Map<CharSequence, String> headers_1 = new HashMap<>();
    headers_1.put("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36");
    headers_1.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102");
    headers_1.put("sec-ch-ua-mobile", "?0");
    headers_1.put("sec-ch-ua-platform", "Windows");

    Map<CharSequence, String> headers_2 = new HashMap<>();
    headers_2.put("accept", "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8");
    headers_2.put("accept-encoding", "gzip, deflate, br");
    headers_2.put("accept-language", "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7");
    headers_2.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102");
    headers_2.put("sec-ch-ua-mobile", "?0");
    headers_2.put("sec-ch-ua-platform", "Windows");
    headers_2.put("sec-fetch-dest", "image");
    headers_2.put("sec-fetch-mode", "no-cors");
    headers_2.put("sec-fetch-site", "same-origin");
    headers_2.put("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36");

    Map<CharSequence, String> headers_3 = new HashMap<>();
    headers_3.put("accept", "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8");
    headers_3.put("accept-encoding", "gzip, deflate, br");
    headers_3.put("accept-language", "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7");
    headers_3.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102");
    headers_3.put("sec-ch-ua-mobile", "?0");
    headers_3.put("sec-ch-ua-platform", "Windows");
    headers_3.put("sec-fetch-dest", "image");
    headers_3.put("sec-fetch-mode", "no-cors");
    headers_3.put("sec-fetch-site", "cross-site");
    headers_3.put("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36");

    Map<CharSequence, String> headers_4 = new HashMap<>();
    headers_4.put("accept", "*/*");
    headers_4.put("accept-encoding", "gzip, deflate, br");
    headers_4.put("accept-language", "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7");
    headers_4.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102");
    headers_4.put("sec-ch-ua-mobile", "?0");
    headers_4.put("sec-ch-ua-platform", "Windows");
    headers_4.put("sec-fetch-dest", "script");
    headers_4.put("sec-fetch-mode", "no-cors");
    headers_4.put("sec-fetch-site", "cross-site");
    headers_4.put("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36");
    headers_4.put("x-client-data", "CIq2yQEIorbJAQjBtskBCKmdygEIlKHLAQjmhMwBCIirzAEIvrXMAQiWtswB");

    Map<CharSequence, String> headers_6 = new HashMap<>();
    headers_6.put("accept", "*/*");
    headers_6.put("accept-encoding", "gzip, deflate, br");
    headers_6.put("accept-language", "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7");
    headers_6.put("origin", "https://demo.guru99.com");
    headers_6.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102");
    headers_6.put("sec-ch-ua-mobile", "?0");
    headers_6.put("sec-ch-ua-platform", "Windows");
    headers_6.put("sec-fetch-dest", "empty");
    headers_6.put("sec-fetch-mode", "cors");
    headers_6.put("sec-fetch-site", "cross-site");
    headers_6.put("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36");
    headers_6.put("x-client-data", "CIq2yQEIorbJAQjBtskBCKmdygEIlKHLAQjmhMwBCIirzAEIvrXMAQiWtswB");

    Map<CharSequence, String> headers_9 = new HashMap<>();
    headers_9.put("accept", "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8");
    headers_9.put("accept-encoding", "gzip, deflate, br");
    headers_9.put("accept-language", "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7");
    headers_9.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102");
    headers_9.put("sec-ch-ua-mobile", "?0");
    headers_9.put("sec-ch-ua-platform", "Windows");
    headers_9.put("sec-fetch-dest", "image");
    headers_9.put("sec-fetch-mode", "no-cors");
    headers_9.put("sec-fetch-site", "same-origin");
    headers_9.put("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36");
    headers_9.put("x-client-data", "CIq2yQEIorbJAQjBtskBCKmdygEIlKHLAQjmhMwBCIirzAEIvrXMAQiWtswB");

    Map<CharSequence, String> headers_10 = new HashMap<>();
    headers_10.put("accept", "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8");
    headers_10.put("accept-encoding", "gzip, deflate, br");
    headers_10.put("accept-language", "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7");
    headers_10.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102");
    headers_10.put("sec-ch-ua-mobile", "?0");
    headers_10.put("sec-ch-ua-platform", "Windows");
    headers_10.put("sec-fetch-dest", "image");
    headers_10.put("sec-fetch-mode", "no-cors");
    headers_10.put("sec-fetch-site", "cross-site");
    headers_10.put("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36");
    headers_10.put("x-client-data", "CIq2yQEIorbJAQjBtskBCKmdygEIlKHLAQjmhMwBCIirzAEIvrXMAQiWtswB");

    String uri1 = "https://tpc.googlesyndication.com";

    String uri2 = "https://www.google-analytics.com/collect";

    String uri4 = "https://www.google.com/recaptcha/api2/aframe";

    String uri5 = "https://adservice.google.com/adsid/integrator.js";

    String uri6 = "https://pagead2.googlesyndication.com";

    String uri7 = "https://fonts.googleapis.com/css";

    String uri8 = "https://adservice.google.com.br/adsid/integrator.js";

    ScenarioBuilder scn = scenario("Newtourlogin")
      .exec(
        http("request_0")
          .get("/test/newtours/login_sucess.php")
          .headers(headers_0)
          .resources(
            http("request_1")
              .get(uri7 + "?family=Quicksand:400,700")
              .headers(headers_1),
            http("request_2")
              .get("/test/newtours/black")
              .headers(headers_2)
              .check(status().is(404)),
            http("request_3")
              .get(uri2 + "?v=1&_v=j96&a=1846684025&t=pageview&_s=1&dl=https%3A%2F%2Fdemo.guru99.com%2Ftest%2Fnewtours%2Flogin_sucess.php&ul=pt-br&de=UTF-8&dt=Login%3A%20Mercury%20Tours&sd=24-bit&sr=1920x1080&vp=649x959&je=0&_u=QACAAUAB~&jid=&gjid=&cid=1327958889.1655166228&tid=UA-1248015-24&_gid=1668524866.1655166228&gtm=2ou6d0&z=1018162695")
              .headers(headers_3),
            http("request_4")
              .get(uri8 + "?domain=demo.guru99.com")
              .headers(headers_4),
            http("request_5")
              .get(uri5 + "?domain=demo.guru99.com")
              .headers(headers_4),
            http("request_6")
              .get(uri6 + "/getconfig/sodar?sv=200&tid=gpt&tv=2022060901&st=env")
              .headers(headers_6),
            http("request_7")
              .get(uri1 + "/sodar/sodar2/225/runner.html"),
            http("request_8")
              .get(uri4),
            http("request_9")
              .get(uri1 + "/generate_204?QF8CfQ")
              .headers(headers_9),
            http("request_10")
              .get(uri6 + "/pagead/sodar?id=sodar2&v=225&li=gpt_2022060901&jk=1272111999889599&rc=null")
              .headers(headers_10),
            http("request_11")
              .get(uri6 + "/pagead/sodar?id=sodar2&v=225&t=2&li=gpt_2022060901&jk=1272111999889599&bg=!RUalRgLNAAaJfvByqX47ACkAdvg8Wo3F_OubJg9ZpYekaM57iPFeyvZ0IyeQPXYBVvXmlQRb1krYNgIAAAE1UgAAACNoAQeZAuP4HvGIbZXMS_Yvw7pi5lOBef2vwKNDpQJgn2DVZ7cMABhGNhY2LZ0wrNZQFKK1ysCypOZynBWlohRcia0d8MSzr7AxTmsJ4d4Lop7DmnXdJ-ZGYlNbAMmbQR1fEKOtteMIMorKYsMrqKP_p6S9SsTMtkqatI252BmK6zx6VQztXFL-Q_zxQx8XQRi2Vw_UhzwYwpU4e11j4JYSgui3MKpN-Vvbl6jZPH15_yeVKCc3QFiu-KC14ugBN_VGFg_tOGMby7Ilk4p8u98Q3pfIkORDAPQaag8rmC6r4gBDjxS7EGBfj_yHFW8F11UcmdKXJ-7gGEHJcrOcDyEZ8jrMhAKnw5Y9wkXfkrjJSfNugjSw73VYpPuFw2_31eT5ZZUSTe5EyBA4EzSlkuqrmnM9a5GegHMyrCsyuN1p_wX9W0ldo2nutptyOTnFddxFfgokvwbPxcEsdGen5wTB3Gy4d53QpV23AoWf-EgdkD3jPFS8gynqbK4ilJk7Z5EMkwS8RNSIJHkH2AxU34bmI5saG5gF3_y_nXNuTbEjdBmDWkcLG0jFCa0f2ngKVJteJcVGGAtwnEKNEpwfr2GBXTCVbkZiMGWuTUIbMOmKzJJVT9uMhq9_VqwE0BaKilP10tBF3n4nAKtJ6ofF0R1VKKES-BNFNCxIzEnD116a_-PlyEcgnY2NTybkev1bcI1mJKTj5jX0G8BLzlah6TvMRt50gSWCR1SGrZ6tBlF3oSKl0oL1l4j4pRky4LDGQHHeOIPMjIAnORW9dETmFzh2qdVo7stX2v8HbfxdY_2WpRrdjhRb93aKQYX9kwKQxnQjcD13jKQsbvMqc2xuSwO0lGY7aZ8xmP5ddHFVITEQ8095DFhUHSNT1sLahGmVYJSayHeS1mVC2slk0eyv355JUj2z4GiidVkdNT4xI0Udh23blptqwPzb0nHpDcmj7bt8CAdvE4RE02sLrnvACQdCSGNWFx_5s0gl")
              .headers(headers_10)
          )
      );

    setUp(scn.injectOpen(atOnceUsers(2))).protocols(httpProtocol);
  }
}
