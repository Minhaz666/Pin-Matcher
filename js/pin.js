// 1st phase for generate pin by click generate pin
function generatepin()
{
    const random= Math.round(Math.random()*10000) ;
    return random;
}

function getpin()
{
    const pin= generatepin();
    const pinstr=pin+'';
    if(pinstr.length===4)
    {
        
        return pin;
    }
    else{ 
        console.log('pin not match 4',pin)
        return getpin() }  

}


document.getElementById('generate-pin').addEventListener('click',function ()
{
    const pin= getpin();

    const displaypin=document.getElementById('pininput');
    const pinfield=displaypin.value;
    displaypin.value=pin;
    
})

// 2nd phase

document.getElementById('calculator').addEventListener('click',function (event)
{
 const number=event.target.innerText;
 const typenumberfield=document.getElementById('numberfield')
 const previousnumber=typenumberfield.value;
 if(isNaN(number))
 {
    if(number=== 'C')
    {
        typenumberfield.value='';
    }
    else if(number=== '<')
    {
        const digit=previousnumber.split('');
        digit.pop();
        const remainingdigit =digit.join('');
        typenumberfield.value=remainingdigit;
    }
 }
 else
 {
    const newnumber=previousnumber+number;
    typenumberfield.value=newnumber 
 }

})

// 3rd phase success or not success mess

document.getElementById('Verifypin').addEventListener('click',function()
{
    const pininputfield=document.getElementById('pininput')
    const pininput=pininputfield.value;
    
    const numberfield=document.getElementById('numberfield')
    const number =numberfield.value;
    
    if(pininput===number)
    {
    const success=document.getElementById('success')
    success.style.display='block';
    fail.style.display='none'
    }
    else
    {
    const fail=document.getElementById('fail')
    fail.style.display='block'
    success.style.display='none';
    }
})

