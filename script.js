let itemName=prompt("What is the name of the items?"); 
let basedPrice = prompt("What is the base price? (i.e. the price before markup/markdown"); 
let blackFriday=prompt("Is today Black Friday?");
let findingProduct=prompt ("Did the purchaser find the product through a search engine?");
let comparisonShopping=prompt("Did purchaser visit a comparison-shopping site?");
let baseMessage = `Thank you for shopping. Your ${itemName} costs $${basedPrice}.` 



if (blackFriday==="yes"){
    basedPrice=basedPrice*0.75;
    baseMessage=baseMessage+"It is BlackFriday and we are dropping the price by 25%."
}

if (comparisonShopping==="yes"){
    basedPrice=basedPrice*0.90;
    baseMessage=baseMessage+"You are comparison shopper and we are going to reduce the price by 10%."

}
if (findingProduct==="yes"){
    basedPrice=basedPrice*1.01;
    baseMessage=baseMessage+"You used search Engine therefore we are going to raise the price by 1%"

}

alert(`${baseMessage} Your totals is ${basedPrice}.`)




    




    



 

