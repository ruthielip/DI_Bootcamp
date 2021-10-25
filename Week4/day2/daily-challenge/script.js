let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let shopping = groceries;
groceries.totalPrice = "35$";
// shopping totalPrice will also be changed to 35$.

groceries.other.payed = false;
// The shopping payed value will also be changed to false, 
// because both groceries and shopping point to the same
// address, objects are passed by refrence.