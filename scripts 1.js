/****************** YOUR NAME: DEVKUMAR MANOJBHAI CHHATRALA

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

let modelName = "Model XYZ";
let duration = 0;





/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
function recalculate() {
    // Get the element where the calculated cost will be displayed
    let costLabel = document.getElementById("calculated-cost");

    // Define an object to store the cost per day for each model
    const modelCosts = {
        "Model XYZ": 100,
        "Model CPRG": 213,
        // Add more models and their corresponding costs as needed
    };

    // Retrieve the cost per day based on the current model
    let costPerDay = modelCosts[modelName];

    if (costPerDay !== undefined) {
        // Calculate the total cost
        let totalCost = duration * costPerDay;

        // Round the total cost to two decimal places
        let roundedCost = Math.round(totalCost * 100) / 100;

        // Update the displayed cost
        costLabel.innerHTML = `$${roundedCost}`;
    } else {
        // If the model is not found, display an error message
        costLabel.innerHTML = "Error: Model not found.";
    }
}










/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE
// Get reference to the model button
let modelButton = document.getElementById("model-button");

// Define an array of model names
let models = ["MODEL XYZ", "MODEL CPRG"];  // Add more models to this array as needed
let currentModelIndex = 0;  // Index to track the current model

// Function to change the model
function changeModel() {
    // Switch to the next model in the array, looping back to the start if at the end
    currentModelIndex = (currentModelIndex + 1) % models.length;
    let newModelName = models[currentModelIndex];  // Get the new model name

    // Update the model text on the page
    let modelText = document.getElementById("model-text");
    modelText.innerHTML = newModelName;

    // Update the global modelName variable
    modelName = newModelName;

    // Recalculate or update other logic based on the new model
    recalculate();
}

// Add event listener to change model on button click
modelButton.addEventListener("click", changeModel);









/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

// Get the button and text elements
let durationButton = document.getElementById("duration-button");
let durationText = document.getElementById("duration-text");

// Function to change the rental duration
function changeDuration() {
    // Prompt user to enter a new rental duration
    let newDuration = prompt("Enter the number of days for the rental:");

    // Check if the user entered a valid number
    if (newDuration !== null) {
        // Convert the input to a number
        newDuration = parseFloat(newDuration);

        // Validate the input
        if (!isNaN(newDuration) && newDuration > 0) {
            // Update the duration and display it
            duration = newDuration;
            durationText.innerHTML = `${duration} days`; // Display duration with "days"

            // Recalculate based on the new duration
            recalculate();
        } else {
            // Display an alert if the input is not valid
            alert("Please enter a valid positive number greater than 0.");
        }
    } else {
        // If the user cancels the prompt
        alert("You cancelled the input. The duration was not updated.");
    }
}

// Add event listener to the duration button
durationButton.addEventListener("click", changeDuration);


