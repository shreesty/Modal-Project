let btn=document.getElementById('btn');
let modelContainer=document.getElementById('model-container');
let closeBtn=document.getElementById('close');



btn.addEventListener('click',function()
{
modelContainer.style.display='block';


})


closeBtn.addEventListener('click',function()
{
modelContainer.style.display='none';


})


 window.addEventListener('click',function(e)
 {
    if(e.target===modelContainer)
    {
       modelContainer.style.display='none';

    }


 })



 