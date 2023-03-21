package sessionpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class BasicGetGameDetails extends Simulation {
  val httpConf = http.baseUrl("https://www.freetogame.com")

  //val appId="701491b9"
  //val appKey="a33c1f63da644e3ce7ba565599809d0f"
  //val dateofDepart="20190426"

  //val csvfeeder_bus= csv("data/busdetails.csv").circular

  //val scn = scenario("GetBusDetails").feed(csvfeeder_bus)
    //.exec(http("getgamerequest").get("/api/bus/search/?app_id="+ appId+"&app_key="+ appKey+"&format=json&source=${source}&destination=${destination}&dateofdeparture="+ dateofDepart))

  val csvfeeder_games = csv("data/game_csv.csv").circular

  val scn = scenario("GetGame").feed(csvfeeder_games)
    .exec(http("getgamerequest").get("/api/game?id=${game_id}"))

  setUp(scn.inject(atOnceUsers(3))).protocols(httpConf)
    .assertions(
      global.successfulRequests.percent.is(100)
    )
}