package electricityBill

import java.util.Calendar
import java.util._

class generateBill (units : Int) {

  val rate = units match {
    case x if 0 to 100 contains x => 0.1
    case x if 101 to 200 contains x => 0.2
    case _ => 0.3
  }


  def calculateBill() = units * rate

  def displayBill ( billAmount : Double ): Unit = {
    println("You electricity bill is: " + billAmount)

    //s String Interpolator
    println(s"You electricity bill is: ${billAmount + 1}")

    //f String Interpolator
    println(f"You electricity bill is: $billAmount%.2f")

    // raw String Interpolator
    println(raw"You electricity bill is: \t" + billAmount)
  }

}

object Main {
  def main (args : Array[String]): Unit = {
    val bill = new generateBill(200)

    try{
      bill.displayBill(bill.calculateBill())
    }catch{
      case e: ArithmeticException => println("Arithmetic Exception occurred")
      case e: Exception => println("Exception occurred")
    } finally {
      println("In Finally block")
    }

  }
}
