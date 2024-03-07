
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


// ----------------------------TextBox Manipulation Demo--------------------------

  document.addEventListener('DOMContentLoaded', function() {
    let textBox = document.getElementById('textBox');
    let inputText = document.getElementById('inputText') ;

    textBox.addEventListener('input', function() {
      inputText.textContent = "You entered: " + textBox.value;
    });

    textBox.addEventListener('focus', function() {
      textBox.style.border = '2px solid blue';
    });

    textBox.addEventListener('blur', function() {
      textBox.style.border = '';
    });

    textBox.addEventListener('keypress', function (event) {
      console.log('key pressed:', event.key)
    });

    textBox.addEventListener('keydown', function (event) {
      console.log('Key down:', event.key)
    })

    textBox.addEventListener('keyup', function (event) {
      console.log('key up:', event.key)
    });
  })

  //------------------------- Button Manipulation Demo----------------------

  let changeTextBtn = document.getElementById('changeTextBtn');
  let toggleBtn = document.getElementById('toggleBtn');

  let buttonText = 'Click Me!'
  let isButtonEnabled = true;

  function changeButtonText() {
    buttonText = prompt('Enter new text for the button:', buttonText);
    if (buttonText === null) {
      return;
    }
    updateButtonText();
  }

  function toggleButton() {
    isButtonEnabled = !isButtonEnabled;
    updateButtonState();
  }

  function updateButtonText() {
    changeTextBtn.textContent = buttonText;
  }

  function updateButtonState() {
    toggleBtn.textContent = isButtonEnabled ? 'Disable' : 'Enable';
    changeTextBtn.disabled = !isButtonEnabled;
  }

  updateButtonText();
  updateButtonState();