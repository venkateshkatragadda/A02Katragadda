 var pizza_prices = new Array();
 pizza_prices["SMALL"]=15;
 pizza_prices["MEDIUM"]=20;
 pizza_prices["LARGE"]=25;
 
 var toppings_prices= new Array();
 toppings_prices["None"]=0;
 toppings_prices["Lemon"]=5;
 toppings_prices["Custard"]=5;
 toppings_prices["Fudge"]=7;
 toppings_prices["Tomatos"]=8;
 toppings_prices["Raspberry"]=10;
 toppings_prices["Pineapple"]=5;
 toppings_prices["Dobash"]=9;
 toppings_prices["Chicken"]=5;
 toppings_prices["Cherry"]=5;
 toppings_prices["Apricot"]=8;
 toppings_prices["Green Olives"]=7;
 toppings_prices["Roasted Red Peppers"]=12;
 
 var pizz_prices = new Array();
 pizz_prices["Pepsi"]=5;
 pizz_prices["Sprite"]=5;
 pizz_prices["MountDew"]=7;
 pizz_prices["Coke"]=8;
 
function getPizzaSizePrice()
{  
   var pizzaSizePrice=0;
    
   var theForm = document.forms["pizzaform"];
    
   var selectedPizza = theForm.elements["selectedpizza"];
   for(var i = 0; i < selectedPizza.length; i++)
    {      
        if(selectedPizza[i].checked)
        {      
           pizzaSizePrice = pizza_prices[selectedPizza[i].value];
           break;
       }
   }
    return pizzaSizePrice;
}



function getToppingsPrice()
{
    var pizzaToppingsPrice=0;
    var theForm = document.forms["pizzaform"];
    var selectedFilling = theForm.elements["toppings"];
    pizzaFillingPrice = toppings_prices[selectedFilling.value];
    return pizzaFillingPrice;
}
function ranchPrice()
{
	var ranchPrice=0;
	
	var theForm=document.forms["pizzaform"];
	//var includeranch=theForm.elements["includeranch"];
	$ranchPrice1=$("#includeranch").val();
	ranchPrice=$ranchPrice1;
	if(includeranch.checked==true)
	{
		ranchPrice=5;
		}
	return ranchPrice;
	
}
function getSoftDrinks()
{  
    var SoftDrinks=0;
    
    var theForm = document.forms["pizzaform"];
    
    var selectedPizz = theForm.elements["selectedpizz"];
    
	for(var i = 0; i < selectedPizz.length; i++)
    {      
        if(selectedPizz[i].checked)
        {      
            SoftDrinks = pizz_prices[selectedPizz[i].value];
            break;
        }
    }
    return SoftDrinks;
}
        
function calculateTotal()
{
    var pizzaPrice = getPizzaSizePrice() + getToppingsPrice() + ranchPrice()+getSoftDrinks();
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the PIZZA $"+pizzaPrice;
	

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}