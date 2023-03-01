package basicpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class RawFileBody_Post extends Simulation {

  val httpConf = http.baseUrl("https://api.rebrandly.com/").header("apikey", "2a9b90cf3cee486fa4138e9d8434d077")

  val scn = scenario("CreateLink").exec(http("CreateLinkRequest").post("/v1/links").body(RawFileBody("bodies/myFile.json")).asJson)

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
