const Heart_button = document.getElementsByClassName("btn-heart");


function toggleButton(e){
    e.classList.toggle("active")

}


for(let i = 0;i<Heart_button.length;i++)
{
    Heart_button[i].addEventListener("click",function(){
        toggleButton(this);
    })

}