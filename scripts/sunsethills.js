// Function for calculating Sunset Hills
function returnInput() {
    let input1 = parseInt(document.getElementById('b1').value);
    let input2 = parseInt(document.getElementById('b2').value);
    let input3 = parseInt(document.getElementById('b3').value);
    let input4 = parseInt(document.getElementById('b4').value);
    let input5 = parseInt(document.getElementById('b5').value);
    let input6 = parseInt(document.getElementById('b6').value);
    let count = 1;
    let array2 = [];
    let errorMessage = "Please enter 6 numbers starting from 1";
    if (isNaN(input1) || input1 < 1 ||
        isNaN(input2) || input2 < 1 ||
        isNaN(input3) || input3 < 1 ||
        isNaN(input4) || input4 < 1 ||
        isNaN(input5) || input5 < 1 ||
        isNaN(input6) || input6 < 1) {
        document.getElementById('errorMessage').innerHTML = errorMessage;
        document.getElementById('results').innerHTML = "";
        clearBuildings();
        return false;
    } else {
        reset();
        let array1 = [input1, input2, input3, input4, input5, input6];
        let currentMax = array1[0];
        array2.push(currentMax);
        for (let i = 1; i < array1.length; i++) {
            if (array1[i] > currentMax) {
                count++;
                array2.push(array1[i]);
                currentMax = array1[i];
            }
        }
    }
    document.getElementById('results').innerHTML = `${count} buildings can see the sunset <br> Buildings <br> ${array2.join(', ')} <br> all have a great view!`;
    document.getElementById('building1').innerHTML = `Building <br> ${input1}`;
    document.getElementById('building2').innerHTML = `Building <br> ${input2}`;
    document.getElementById('building3').innerHTML = `Building <br> ${input3}`;
    document.getElementById('building4').innerHTML = `Building <br> ${input4}`;
    document.getElementById('building5').innerHTML = `Building <br> ${input5}`;
    document.getElementById('building6').innerHTML = `Building <br> ${input6}`;
}


// Event listener for submit button
document.getElementById('submit').addEventListener('click', returnInput);

// Function to clear input
function reset() {
    document.getElementById('b1').value = ""
    document.getElementById('b2').value = "";
    document.getElementById('b3').value = "";
    document.getElementById('b4').value = "";
    document.getElementById('b5').value = "";
    document.getElementById('b6').value = "";
    document.getElementById('results').innerHTML = "";
    document.getElementById('errorMessage').innerHTML = "";
    clearBuildings();
}

// Function to clear buildings
function clearBuildings() {
    document.getElementById('building1').innerHTML = "";
    document.getElementById('building2').innerHTML = "";
    document.getElementById('building3').innerHTML = "";
    document.getElementById('building4').innerHTML = "";
    document.getElementById('building5').innerHTML = "";
    document.getElementById('building6').innerHTML = "";
}
