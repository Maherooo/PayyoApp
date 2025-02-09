const logform=document.getElementById('login-form');
logform.addEventListener('click',function(e)
{
    e.preventDefault();
    const number=gettingvalu('numberval');
    const pin=gettingvalu('pinnum');
    const spell=document.getElementById('div');
    if(number==="01303455983" && pin==="10203040")
    {
        window.location.href='/hello.html'
    }
})