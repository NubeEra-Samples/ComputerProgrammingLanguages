document.addEventListener("DOMContentLoaded", function(){
    var fruitSelect = document.getElementById("fruitSelect");
    var selectFruit = document.getElementById("selectedFruit");

    fruitSelect.addEventListener("change", function(){
        var selectedOption = fruitSelect.options[fruitSelect.selectedIndex].text;
        selectFruit.innerText = selectedOption;
    });
    
});