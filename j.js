
const visaBtn= document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn= document.getElementById("payPalBtn");
const mySubmit= document.getElementById("mySubmit");
const paymentResult= document.getElementById("paymentResult");
 
mySubmit.onclick=function(){
    if(visaBtn.checked){
      paymentResult.textContent='You are paying with visa';
    }
    else if(masterCardBtn.checked){
              paymentResult.textContent='You are paying with masterCard';
    }
     else if(payPalBtn.checked){
              paymentResult.textContent='You are paying with payPal';
    }
    else{
                      paymentResult.textContent='You must select a payment type';
    }
}

