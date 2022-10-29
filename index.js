const table = document.getElementById("table-data");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const max = document.getElementById("max");

function fizzbuzz() {
    event.preventDefault();
    let dataHTML = '<tr>';
    
    for (let i = 1; i <= max.value; i++) {
            if (i % num1.value === 0 && i % num2.value === 0){
                dataHTML += `<td>FizzBuzz</td>`;
            }
            else if (i % num1.value === 0){
                dataHTML += `<td>Fizz</td>`;
            }
            else if (i % num2.value === 0){
                dataHTML += `<td>Buzz</td>`;
            } else {
                dataHTML += `<td>${i}</td>`;
            }
            if(i % 5 == 0){
                dataHTML += `</tr><tr>`;
            }
        }
        
    table.innerHTML = dataHTML + `</tr>`;
}
