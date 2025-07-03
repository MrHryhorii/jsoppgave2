const output = document.getElementById("output");

// function for double log
const log = (message) => {
    // show in console
    console.log(message); 
    // show on page
    const p = document.createElement("p"); 
    p.textContent = message;
    output.appendChild(p);
};

// create "hr" tag in output div
const separator = () => {
    output.appendChild(document.createElement("hr"));
};