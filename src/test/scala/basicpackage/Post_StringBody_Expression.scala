package basicpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class Post_StringBody_Expression extends Simulation {

  val apiKey = "2a9b90cf3cee486fa4138e9d8434d077"
  val linkshorten = csv("data/linkshortenUpdated.csv").circular
  val title = "myTitlee2"
  val slashtag = "mytaghundreed"
  var destination = ""

  // HTTP Protocol

  val httpConf = http.baseUrl("https://api.rebrandly.com/").header("apikey", apiKey)

  //SCENARIO

  val scn = scenario("CreateLink")
    .feed(linkshorten)
    .exec(
      session => {
        destination = session("destination").as[String]
        println(s"""{"destination": "$destination", "slashtag": "$slashtag", "title": "$title"}""")
        session
      }
    )
    .exec(http("createNewLink").post("/v1/links").body(StringBody( session => s"""{"destination": "$destination", "slashtag": "$slashtag", "title": "$title"}""")).asJson)

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
