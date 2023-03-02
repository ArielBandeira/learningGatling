package basicpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class ElFileBody_Dynamic_Data extends Simulation {

  val apiKey = "2a9b90cf3cee486fa4138e9d8434d077"
  val linkshorten = csv("data/linkshorten.csv").circular //this csv is stored at data folder
  val title = "mytitle2" //keep it as it is and add to session as attribute using set method

  //Create http configuration
  val httpProtocol = http.baseUrl("https://api.rebrandly.com")
    .headers(Map("Content-Type" -> "application/json", "apikey" -> apiKey))


  val scn = scenario("CreateLink").exec(session => {
    //set slashtag as session attribute
    session.set("title", title)
  }).feed(linkshorten)
    .exec(http("CreateLinkRequest").post("/v1/links").body(ElFileBody("bodies/myDynamicFile.json")).asJson) //send post request

  //inject user to send http request
  setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol) //inject one user

}
