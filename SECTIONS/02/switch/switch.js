document.write("</br> Escolha seu pedido: </br>");
document.write("</br> 0 - Computer </br>");
document.write("</br> 2 - Laptop </br>");
document.write("</br>")


function pedi(){

    x = prompt("What is the order?");

    switch(x){
    
        case "0":
            alert("x = " + x);
            break;
        case "1":
            alert("x = " + x);
            break;
        case "2":
            alert("x = " + x);
            break;
        default:
            alert("We can't find this order")
            break;
    
    }


}
