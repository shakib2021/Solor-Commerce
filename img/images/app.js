let button = document.getElementById("bt");

button.addEventListener("click", function () {


  let title = document.getElementById("title").value;
  let subtitle = document.getElementById("subtitle").value;
  let price = document.getElementById("price").value;
  let img = document.getElementById("price");
  if (price === 0) {
    console.log("dfg")
  } else {
    let container = document.getElementById("ma");
    let div = document.createElement("div")
    div.innerHTML = `
  
  
  <div class="col ">
    <div class="card ">
      <img src="images/s.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${subtitle}</p>
         <p id="price">$<span>${price}</span></p>
         <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  
  
  
  
  
  `
    container.appendChild(div)
  }



})