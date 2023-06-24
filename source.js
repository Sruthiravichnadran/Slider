const container = document.querySelector('.total_container')
const btn = document.querySelectorAll('.btn')
const image = ["2nd","3rd","4th","5th"]

let index=0
btn.forEach((button)=> {
    button.addEventListener('click',()=>{
        if(button.classList.contains('fa-arrow-left')){
            index--;
            if(index<0){
                index = image.length-1;
            }
            container.style.backgroundImage = `url("/${image[index]}.jpg")`
        }
        else{
            index++;
            if(index===image.length){
                index = 0;
            }
            container.style.backgroundImage = `url("/${image[index]}.jpg")`
        }
    })
})
    