document.getElementById('Add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addmoney=gettingvalu('add-money-input')
    const pin=gettingvalu('pin-number');
    if(pin==="10203040")
    {
        const curammount=document.getElementById('current-ammount').innerText;
        if(isNaN(addmoney))
        {
            alert("This is not a number");
        }
        else{
            const money=parseInt(curammount)+parseInt(addmoney);
        document.getElementById('current-ammount').innerText=money;
        const p=document.createElement('p');
        p.innerText=`Add Money: ${addmoney} New Balance :${money}`;
        console.log(p);
        p.classList.add('bg-blue-300')

        document.getElementById('Transaction-section').appendChild(p);
        }
        
    }
    else
        {
            alert("Password is incorrect");
        }
})