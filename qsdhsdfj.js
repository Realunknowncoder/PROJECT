function genaretePassword(length,lowerCase,upperCase,numbers,symbols) {
       const lowerCaseChars='abcdefghijklomnpqrstuvwxyz';
       const upperCaseChars='ABCDEFGHIJKLOMNPQRSTUVWXYZ';
       const numbersChars='0123456789';
       const symbolsChars='&~"$¤£;+-€£µ%';

       let allowedChars ="";
       let password ="";
   
    allowedChars+= lowerCase ? lowerCaseChars:"";
    allowedChars+= upperCase ? upperCaseChars:"";
    allowedChars+= numbers ? numbersChars:"";
    allowedChars+= symbols ? symbolsChars:"";


    if (length <=0) {
        return`(password length must be at least 1)`;
    }
    if (allowedChars.length ===0) {
        return`(At least 1 set of character needs to be selected)`;
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password+= allowedChars[randomIndex];
    }

    return password;
}
if (lowercase.checked) {
    lowerCase=true;
}
else{
    lowerCase=false;
}
let lowercase= document. getElementById="lowercase";
let uppercase;
let Number;
let Symbols;
const passwordLenght = 12;
let lowerCase=true;
let upperCase=true;
let numbers=true;
let symbols=true;

const password = genaretePassword(passwordLenght
                                  ,lowerCase,
                                  upperCase,
                                  numbers,
                                  symbols);
const p =document.getElementById("p");

p.textContent=(password)