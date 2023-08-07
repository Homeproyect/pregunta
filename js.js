const yes = document.querySelector('#yes');

yes.addEventListener('click',function()
{
    alert('gracias sabia que dirias que si jaja 😂😂😂');
});


const no = document.querySelector('#no');

no.addEventListener('mouseover',function()
{
   const randomX = parseInt(Math.random()*100);
   const randomY = parseInt(Math.random()*100);
   no.style.setProperty('top',randomY+'%');
   no.style.setProperty('left',randomX+'%');
   no.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
