package otherprotocols

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps

class WebSocketExample1 extends Simulation {

//Configuration
  //wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self
  //https://www.piesocket.com/websocket-tester

  val httpProtocol = http.baseUrl("https://www.piesocket.com/websocket-tester").wsBaseUrl("wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self")

  val scn = scenario("testwebsocketscenario")
    .exec(http("firstrequest").get("/")).pause(2 seconds)
    .exec(
      ws("opensocket").connect("/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self")
      .onConnected(exec(ws("sendmessage").sendText("hello!"))
          exec(ws("send second text").sendText("I am from qamilestone")
            .await(20)(ws.checkTextMessage("check1").check(regex("qa").saveAs("mystring")))
          )))
    .exec{session=>
      {
        println("hello"+session("mystring").as[String])
        session
      }
    }
    .exec(ws("closeconnection").close)

  setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)

}
