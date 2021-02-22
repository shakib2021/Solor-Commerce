let button=document.getElementById("buton")

button.addEventListener("click",function(){
    let warning=document.getElementById("war")
    let price=document.getElementById("price").value;
    let typ=document.getElementById("type").value
    let pName=document.getElementById("pName").value
    if(price<0 || typ==="" || pName===""){
      warning.style.display="block"

    }
    else{
        made()


    }


})
// ..........heart thumb...........
// let heart=document.getElementById("main-heart");

// heart.addEventListener("click",function(){
 
// let thumb=document.getElementById("thumb")
// thumb.classList.add("fa-heart")
// thumb.classList.remove("fa-heart-o")
// })



//.....................



// 
let made=()=>{
    let price=document.getElementById("price")
    let typ=document.getElementById("type")
    let pName=document.getElementById("pName")
    let loader=document.getElementById("loader")
let div=document.createElement("div")
div.className="col-lg-3 col-sm-6";

div.innerHTML=`
<div class="cards shadow mt-3  ">
   <div id="forSale">  Sale </div>
<div class="img-sec" >
  <img class="img-fluid"  src="img/banner-images/jpg.jfif">
</div>
<div class="cards-body ">

  <p class="text-center type">${typ.value}</p>
  <p class="text-center name">${pName.value}</p>
  <p class="text-center"><span class="price">$  <span>${price.value}</span> </span> </p>

</div>
<div class="footer d-flex">

  <div id="main-heart" class="heart text-center" data-bs-toggle="tooltip" data-bs-placement="top"
    title="Wish List">
    <i  id="" class="fa fa-heart-o mt-3" aria-hidden="true"></i>
    <p id="wish">Wish List</p>

  </div>

  <div data-bs-toggle="tooltip" data-bs-placement="top" title="Details" id="more"
    class="details text-center"><i class="fa fa-info mt-3" aria-hidden="true"></i>
    <p id="details">Details</p>
  </div>
  <div id="car" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Card"
    class="toCard text-center"><i class="fa fa-shopping-cart mt-3" aria-hidden="true"></i>

    <p id="card">Add Card</p>
  </div>

</div>

</div>



`





loader.appendChild(div)
}

// ...............theme change................
let themeBtn=document.getElementById("theme-btn")
themeBtn.addEventListener("click",function(){




red()


})

let red =() =>{
let tomato=document.getElementById("tomato1")

tomato.addEventListener("click",function(){

   let fet=document.getElementById("feature");
  fet.className("ss")

})

}






// ............. theme end..................

 function myFunction(){
let load=document.getElementById("imgload")
load.style.display='none'

 }









































let options={
    animation:true,
};


let wishlist = document.getElementById('main-heart')
let more = document.getElementById('more')
let card = document.getElementById('car')
let tooltip = new bootstrap.Tooltip(wishlist, options);
let tooltip2 = new bootstrap.Tooltip(more, options);
let tooltip3 = new bootstrap.Tooltip(card, options);











