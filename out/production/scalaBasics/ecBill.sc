
/*def calculateBill( units: Int, ratePerUnit : Double = 0.3 ) = units * ratePerUnit

def displayBill (billAmount : Double): Unit = {
  println("You electricity bill is: US$" + billAmount)
}

var unitsConsumed : Int = 100

val rate = unitsConsumed match {
  case x if 0 to 100 contains x => 0.1
  case x if 101 to 500 contains x => 0.2
  case _ => 0.3
}

//val myBill = calculateBill(unitsConsumed)

displayBill(calculateBill(unitsConsumed))*/


def displayFinal (guess : Int, correction : String )= {
  println("You answer is " + guess + " which is: " + correction)
}

def displayQuestion () {
  println("Quem descobriu o Brasil? Pedro Alvares Ca...")
  println("1)brau")
  println("2)breu")
  println("3)briu")
}

var answer : Int = 2

val correction = answer match {
  case 1 => "Correct"
  case 2 => "Almost"
  case _ => "Wrong"
}

displayQuestion()
displayFinal(answer, correction)
