package newtour

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class NewtourLogin extends Simulation {
  val httpProtocol = http
    .baseUrl("http://newtours.demoaut.com")
    .inferHtmlResources(Blacklist(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg"""))
    .acceptHeader("image/wep, image/apng, image/*, */*;q=0.8")
    .acceptEncodingHeader("gzip, deflate")

  val header_1 = Map
}
