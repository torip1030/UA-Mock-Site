function showTopButton(){
    var topButton = document.getElementById("topButton");
    var y = window.scrollY;
    if (y >= 300) {
        topButton.className = "topButtonWrapper show";
    }
    else{
        topButton.className = "topButtonWrapper";
    }
}

function goToTop()
{
    window.scrollTo(0,0);
}

