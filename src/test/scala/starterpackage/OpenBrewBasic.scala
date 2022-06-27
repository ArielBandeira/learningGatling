package starterpackage

//import
import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.language.postfixOps

class OpenBrewBasic extends Simulation {

  //HTTP PROTOCOL
  val httpProtocol = http.baseUrl("https://api.openbrewerydb.org")


  //SCENARIO WHICH WILL SEND THE HTTP REQUEST

  val scn = scenario("find_breweries")
    .exec(http("all_breweries").get("/breweries")
      .check(status.is(200), substring("Ohio").exists))

      .pause(5 seconds)

    .exec(http("single_brewery").get("/breweries/madtree-brewing-cincinnati")
      .check(status.is(200), responseTimeInMillis.lte(1600)))


  //INJECT LOAD
  setUp(scn.inject(atOnceUsers(2))).protocols(httpProtocol)


}
