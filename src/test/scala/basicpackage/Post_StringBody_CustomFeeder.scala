package basicpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.util.Random

class Post_StringBody_CustomFeeder extends Simulation {

  val apiKey = "2a9b90cf3cee486fa4138e9d8434d077"
  val linkshorten = csv("data/linkshortenUpdated.csv").circular

  def randString = Random.alphanumeric.take(4).mkString
  var randomString = Iterator.continually(Map("slashtag" -> s"myslashtag_$randString", "title" -> s"mytitle_$randString"))

  // HTTP Protocol

  val httpConf = http.baseUrl("https://api.rebrandly.com/").header("apikey", apiKey)


  //SCENARIO

  val scn = scenario("CreateLink").repeat(2) {
    feed(linkshorten).feed(randomString)
      .exec(
        session =>
        {
          println(session("destination").as[String])
          println(session("slashtag").as[String])
          println(session("title").as[String])
          session
        })
      .exec(http("createNewLink").post("/v1/links").body(StringBody("""{"destination": "${destination}", "slashtag": "${slashtag}", "title": "${title}"}""")).asJson)
  }

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
