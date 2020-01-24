function favoriteProduct(heartDiv){
    var productImage = heartDiv.parentElement.children[0].getAttribute("src");
    var productName = heartDiv.parentElement.children[4].innerHTML;;
    var newMiniProduct = createMiniProduct(productName, productImage);
    addMiniProduct(newMiniProduct);
}

function createMiniProduct(name, image){
    var newHtml = "<div class='favoriteItem'><img class='miniProductImg' src='"+image+"'><div class='miniProductTitle'>"+name+"</div></div>";
    return newHtml;
}

function addMiniProduct(mini)
{
    var favDiv = document.getElementsByClassName("favoritesList")[0];
    favDiv.innerHTML += mini;
}