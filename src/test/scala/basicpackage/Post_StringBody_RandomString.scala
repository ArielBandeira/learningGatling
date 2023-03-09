package basicpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.util.Random

class Post_StringBody_RandomString extends Simulation {

  val apiKey = "2a9b90cf3cee486fa4138e9d8434d077"
  val linkshorten = csv("data/linkshortenUpdated.csv").circular
  var title = ""
  var slashtag = ""
  var destination = ""

  def randString = Random.alphanumeric.take(4).mkString

  // HTTP Protocol

  val httpConf = http.baseUrl("https://api.rebrandly.com/").header("apikey", apiKey)

  //SCENARIO

  val scn = scenario("CreateLink").repeat(2) {
    feed(linkshorten)
      .exec(
        session => {
          destination = session("destination").as[String]
          slashtag = s"myslashtag_$randString"
          title = s"myTitle_$randString"
          println(s"""{"destination": "$destination", "slashtag": "$slashtag", "title": "$title"}""")
          session
        }
      )
      .exec(http("createNewLink").post("/v1/links").body(StringBody(session => s"""{"destination": "$destination", "slashtag": "$slashtag", "title": "$title"}""")).asJson)
  }

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
