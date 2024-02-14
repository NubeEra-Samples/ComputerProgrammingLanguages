// function FunctionCalling()
//{...}
// document.addEventListener("Event", FunctionCalling)

// document.addEventListener("Event", function (){....});


document.addEventListener('DOMContentLoaded', function () {
    debugger;
    var checkbox = document.getElementById('myCheckbox');
    var output = document.getElementById('output');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            output.innerText = 'Feature is enabled';
            output.style.color = 'green';
        } else {
            output.innerText = 'Feature is disabled';
            output.style.color = 'red';
        }
    });
   
});
