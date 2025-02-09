document.getElementById('Cash-out-money').addEventListener('click',function(event){
    event.preventDefault();
    const inputval=gettingvalu('cashout-input');
    const pinvalue=gettingvalu('pin-number-cash');
    if(pinvalue==="10203040")
    {
        const curammount=document.getElementById('current-ammount').innerText;
        const money=parseInt(curammount)-parseInt(inputval);
        document.getElementById('current-ammount').innerText=money;
        const p=document.createElement('p');
        p.innerText=`CashOut: ${inputval} New Balance :${money}`;
        console.log(p);
        document.getElementById('Transaction-section').appendChild(p);
    }
})