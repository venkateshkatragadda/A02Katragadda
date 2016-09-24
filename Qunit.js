
QUnit.test("Here's a test that should always pass", function (assert)
 {
    assert.ok(1 == "1", "1=1 success!");
});

var Test = {
	calculateTotal : function(tempF){
		var totalPrice;
		try{
			if(isNaN(calculateTotal())==true) throw "Not a Number";
			if(totalPrice == "") throw "Empty Value";
			totalPrice = getPizzaSizePrice() + getToppingsPrice() + ranchPrice()+getSoftDrinks();
			}
		catch(err){
				totalPrice = err;
			}
		return totalPrice;
	},
}








