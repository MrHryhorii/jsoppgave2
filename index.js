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

/****************************************************************************/

/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her
function oddOrEven(number) {
  return ( number & 1 ) ? "odd" : "even";
}

checkNumber1 = 5;
const checkResult1 = oddOrEven(checkNumber1);
let isOdd = checkResult1 == "odd" ? true : false;

const message1 = isOdd ? `Number ${checkNumber1} is odd.` : `Number ${checkNumber1} is even.`
log(message1);

separator();

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her
function getUpperCased(string){
    let newString = string.toUpperCase();
    newString += "!";
    return newString;
}

const taskString2 = "Dette er kult";
const newString2 = getUpperCased(taskString2);

const message2 = `String "${taskString2}" after function getUpperCased() is "${newString2}"`;
log(message2);

separator();

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her

function greetWithTime(name, time){

    let msg;

    switch (true){
        case (time >= 0 && time <= 5):
            msg = `Good night, ${name}!`;
            break;
        case (time >= 6 && time <= 11):
            msg = `Good morning, ${name}!`;
            break;
        case (time >= 12 && time <= 17):
            msg = `Good day, ${name}!`;
            break;
        case (time >= 18 && time <= 23):
            msg = `Good evening, ${name}!`;
            break;
        case (typeof time == 'undefined'):
            msg = "Error: time is undefined!";
            break;
        default:
            msg = "Not correct time!";
    }

    return msg;
}

const name3 = "John";
const time3_1 = 10;
const time3_2 = 12;
const time3_3 = -5;
const time3_4 = 27;
let message3 = "";

message3 = greetWithTime(name3, time3_1);
log(`Message if time is ${time3_1} : `  + message3);

message3 = greetWithTime(name3, time3_2);
log(`Message if time is ${time3_2} : `  + message3);

message3 = greetWithTime(name3, time3_3);
log(`Message if time is ${time3_3} : `  + message3);

message3 = greetWithTime(name3, time3_4);
log(`Message if time is ${time3_4} : `  + message3);

message3 = greetWithTime(name3); 
log(`Message if time is undefined : `  + message3);

separator();

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her

function cutArray(arr){
    let newArray = arr;
    newArray.shift(); // remove first item
    newArray.pop();   // remove last item
    return newArray;
}

const array4_1 = ["Rød", "Grønn", "Blå", "Gul"];
const array4_2 = ["En", "To", "Tre", "Fire", "Fem", "Seks"];

log(`Array [${array4_1}] after function cutArray() - [` + cutArray(array4_1) + "]");
log(`Array [${array4_2}] after function cutArray() - [` + cutArray(array4_2) + "]");

separator();

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her

function vanskeligToGøy(str){
    let newString = str;
    const trimmed = newString.trim();                       // return the trimmed string
    const replaced = trimmed.replace("vanskelig", "gøy");   // return the string with replaced word "vanskelig" to "gøy"

    return replaced;
}

const string5_1 = "  Javascript er vanskelig   ";
const string5_2 = " Det er vanskelig å bruke metoder ";
const string5_3 = "   vanskelig        ";

log(`String [${string5_1}] after function vanskeligToGøy() - [` + vanskeligToGøy(string5_1) + "]");
log(`String [${string5_2}] after function vanskeligToGøy() - [` + vanskeligToGøy(string5_2) + "]");
log(`String [${string5_3}] after function vanskeligToGøy() - [` + vanskeligToGøy(string5_3) + "]");

separator();

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her

// copy array
let array6 = items;
log("Original array : [" + array6 + "]");
// remove item with first id
array6 = array6.filter((item, index) => index !== 0);
log("The array with first element is removed : [" + array6 + "]");
// change first "Viskelær" to "Linjal"
array6[array6.indexOf("Viskelær")] = "Linjal";
log(`"Viskelær" is replaced with "Linjal": [${array6}]`);
// replace items "Penn" and "Notatbok" with "Markeringspenn"
array6.splice(0,2, "Markeringspenn");
log("The array after Penn and Notatbok are replaced with Markeringspenn : [" + array6 + "]");
// array to string with " | " as separator
array6 = array6.join(" | ");
log("The array is converted to string with | as separator : " + `"${array6}"`);

log(" ");
// new array where "e" exists in words
array6_extra = items;
array6_extra = array6_extra.filter((item) => item.includes("e"));
log("New array from original only with words include letter e : [" + array6_extra + "]");

separator();

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her
function addOrRemove(arr, str){
    let newArray;
    let isIncludes = false;
    //
    newArray = arr;
    isIncludes = arr.includes(str);
    //
    if(isIncludes){
        newArray = newArray.filter(item => item !== str);
    }
    else
    {
        newArray.push(str);
    }
    //
    return newArray;
}

//
const array7_1 = addOrRemove(["Rød", "Grønn"], "Blå");
log(`Function accepts (["Rød", "Grønn"], "Blå") and returns: [${array7_1}]`);
//
const array7_2 = addOrRemove(array7_1, "Grønn");
log(`Function accepts ([${array7_1}], "Grønn") and returns: [${array7_2}]`);

separator();
/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her

function explaneWithEnglish(data){
    let msg;

    switch(true){
        case (typeof data == "string"):
            msg = "😎" + data + "😎";
            break;
        case(typeof data == "number"):
            msg =  "😎" + data * data + "😎";
            break;
        case(typeof data == "boolean"):
            if(data){
                msg = "😎Ja😎";
            }
            else
            {
                msg = "😎Slapp av😎";
            }
            break;
        default:
            msg = "😎Kun primitive verdier😎";
    }
        
    return msg;
}

const testData8_1 = "Goodbye, World!"
const testData8_2 = 16;
const testData8_3 = false;
const testData8_4 = ["Goodbye", "World!"];

log(`Type function with data - |${testData8_1}| returns: ${explaneWithEnglish(testData8_1)}`);
log(`Type function with data - |${testData8_2}| returns: ${explaneWithEnglish(testData8_2)}`);
log(`Type function with data - |${testData8_3}| returns: ${explaneWithEnglish(testData8_3)}`);
log(`Type function with data - |[${testData8_4}]| returns: ${explaneWithEnglish(testData8_4)}`);