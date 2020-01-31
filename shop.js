let rightbtn = document.querySelectorAll('.btn1')
let leftbtn = document.querySelectorAll('.btn2')
let sumshop = document.querySelector('.some')
let delbtn = document.querySelectorAll('.fa-times')
let heartbtn = document.querySelectorAll('.fa-heart')

   

Array.from(rightbtn).map( el =>{

    el.addEventListener("click",()=>{
    el.nextElementSibling.innerHTML++
    // console.log(parseInt(el.parentElement.nextElementSibling.children[0].innerHTML.replace("$", "")))
    sumshop.innerHTML = parseInt(el.parentElement.nextElementSibling.children[0].innerHTML.replace("$", "")) + parseInt(sumshop.innerHTML)
    // console.log(parseInt(sumshop.innerHTML))
}) 

})


Array.from(leftbtn).map( el=>{

    
        el.addEventListener("click",function(){
            if(el.previousElementSibling.innerHTML >0){
            el.previousElementSibling.innerHTML--
            sumshop.innerHTML = parseInt(sumshop.innerHTML) - parseInt(el.parentElement.nextElementSibling.children[0].innerHTML.replace("$", "")) 

        }
    })
})


 Array.from(delbtn).map(el=>{
     el.addEventListener("click",function(){


        el.parentElement.parentElement.remove()

    })
})


Array.from(heartbtn).map(el=>{
    el.addEventListener("click",function(){
        el.classList.toggle("red")
    })
})




