package starterpackage

//import
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps

class OpenBrewBasic_PrintSession extends Simulation {

  //HTTP PROTOCOL
  val httpProtocol = http.baseUrl("https://api.openbrewerydb.org")
  val csvFeeder = csv("data/brewery_csv.csv").eager.circular


  //SCENARIO WHICH WILL SEND THE HTTP REQUEST

  val scn = scenario("find_breweries")
    .feed(csvFeeder)
    .exec(http("all_breweries").get("/breweries")
      .check(status.is(200),
        substring("Ohio").exists)).exitHereIfFailed
            .pause(5 seconds)

    .exec(http("single_brewery").get("/breweries/${brewery_id}")
      .check(status.is(200),
        responseTimeInMillis.lte(1600)))
    .exec{session=>
      print(session)
      session
    }


  //INJECT LOAD
  setUp(scn.inject(atOnceUsers(2))).protocols(httpProtocol)


}
