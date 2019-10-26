let favorite = [];
window.onload = function(){
let output = document.querySelector(".js");
let out = document.querySelector(".bs");



	for(cart of shoppingCart){
		output.innerHTML += 
		`
			<div class="col-lg-3 offset-lg-1 col-md-5 offset-md-1 ownBorder pt-3">
				<div class="row">
					<div class="col-lg-12 col-mg-12">
						<img class="image imageBorder"src="${cart.img}">
					</div>
						<div class="col-lg-6 col-md-6 mt-2">
							<p>${cart.title}</p>
						</div>
						<div class="col-lg-3 offset-lg-3 col-md-3 offset-md-3 mt-2">
							<p>€${cart.price}</p>
						</div>
						<div class="col-lg-12">
							<p>${cart.description}</p>
						</div>
						<div class="col-lg-7 col-md-7">
							<button id="${cart.id}" type="button" class=" btn btn-primary btn-sm btn-sz add">Add to ShoppingCart</button>
						</div>
						<div class="col-lg-5 col-md-5">
							<p>Notihing</p>
						</div>
					</div>
				</div>
				`

				
	
	}


	let buttons = document.querySelectorAll(".add");
	console.log(buttons);
	for(button of buttons){
		button.onclick=function(e){
			favorite.push(this.id)

			    $(this).toggleClass('myclass');
			    
			    if($(this).hasClass("myclass")) {


			// show()
			out.innerHTML += 
		`
					<div class="col-lg-5 offset-lg-1 col-md-11 offset-md-1 ownBorder pt-3 remove">
				<div class="row">
					<div class="col-lg-12 col-mg-12">
						<img class="imageForResponsive imageBorder"src="${shoppingCart[this.id].img}">
					</div>
						<div class="col-lg-6 col-md-6 mt-2">
							<p>${shoppingCart[this.id].title}</p>
						</div>
						<div class="col-lg-3 offset-lg-3 col-md-3 offset-md-3 mt-2">
							<p>€${shoppingCart[this.id].price}</p>
						</div>
						<div class="col-lg-12">
							<p>${shoppingCart[this.id].description}</p>
						</div>
						<div class="col-lg-7 col-md-7">
							<button id="${cart.remId} type="button" class="btn btn-primary btn-sm btn-sz rem">Remove</button>
						</div>
						<div class="col-lg-5 col-md-5 ">
							<p>Description</p>
						</div>
					</div>
				</div>
		`
}else{
	$(cart.remId).remove();
}


		let removeButton = document.querySelectorAll(".rem");
		for(button of removeButton){
			button.onclick=function(e){
 				$(this.parentNode.parentNode.parentNode).remove();
				
			}
		}	
		};
	}	


// function myFunction() {
// 					  // Get the checkbox
// 					  var checkBox = document.getElementById("myCheck");
// 					  // Get the output text
// 					  var text = document.getElementById("text");

// 					  // If the checkbox is checked, display the output text
// 					  if (checkBox.checked == true){
// 					    text.style.display = "block";
// 					  } else {
// 					    text.style.display = "none";
// 					  }
// 					}
};

//https://www.bootstraptoggle.com/