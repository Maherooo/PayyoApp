// showing cashout
document.getElementById('show-cash-out')
.addEventListener('click',function(){
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('cashadd-form').classList.add('hidden');
    document.getElementById('Transaction-section').classList.add('hidden');
})


document.getElementById('show-cash-Add')
.addEventListener('click',function(){
    document.getElementById('cashadd-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('Transaction-section').classList.add('hidden');
})

document.getElementById('Transaction')
.addEventListener('click',function(){
    document.getElementById('cashadd-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('Transaction-section').classList.remove('hidden');
})