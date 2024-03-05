
//----------------------------- Show Date-----------------------------

document.getElementById("btn")

function ShowDate()
{
  document.getElementById("myElement").innerHTML = Date();
}
 
// -------------------------Checkbox-------------------------------

document.addEventListener('DOMContentLoaded', function() {
  let checkbox = document.getElementById("myCheckbox");
  let output = document.getElementById("output")

  checkbox.addEventListener('change',function() {
    if (checkbox.checked)
    {
      output.innerText = 'Checkbox is enabled';
      output.style.color = 'green';
    }
    else
    {
      output.innerText = 'Checkbox is disabled';
      output.style.color = 'red';
    }
  });
});


// -----------------------Select DOM Manipulation---------------------------

document.addEventListener('DOMContentLoaded', function() {
  let fruitSelect = document.getElementById("fruitSelect");
  let selectedFruit = document.getElementById("selectedFruit");

  fruitSelect.addEventListener("change", function(){
    let selectedOption = fruitSelect.options[fruitSelect.selectedIndex].text;
    selectedFruit.innerText = selectedOption
  })
})


// Form

document.getElementById("btn").addEventListener("click", function(event) {
  event.preventDefault();
});

function add(){
  let name = document.getElementById("name").value;
  let last_name = document.getElementById("last_name").value;
  let add = name + ' ' + last_name;
  document.getElementById("result").value = add;
}

// -------------------------------------------------addition------------------------------------------------------

document.getElementById("button").addEventListener("click", function(event) {
  event.preventDefault();
})

function addNumbers()
{
  let input_1 = document.getElementById("input_1").value;
  let result_1 = parseInt(input_1);
  let input_2 = document.getElementById("input_2").value;
  let result_2 = parseInt(input_2);
  let sum = result_1 + result_2;
  document.getElementById("Numaddition").value = sum;
}

// ------------------------ Changing Text Content ---------------------------------------

let originalText =  document.getElementById("originalText");
originalText.textContent = "This is updated text."