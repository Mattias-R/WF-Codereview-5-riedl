let favorite = [];
window.onload = function(){
let output = document.querySelector(".js");
let out = document.querySelector(".bs");
let order = [];

//--------------THIS CREATES THE WHOLE CONTENT ON THE WEBSITE ---------------------------------------
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
							<button id="${cart.id}" type="button" class=" btn btn-primary btn-sm btn-sz add">Add to favorites</button>
						</div>
						<div class="col-lg-5 col-md-5">
							<p>Nothing</p>
						</div>
					</div>
				</div>
				`
				order.push(this.cart);
				console.log(order);
	
	}

//------------THIS GIVES THE BUTTON A FUNCTION - TO CREATE NEW CONTENT ----------------------------
	let buttons = document.querySelectorAll(".add");
	for(button of buttons){
		button.onclick=function(e){
			favorite.push(this.id)
			
			    $(this).toggleClass('myclass');
			    if($(this).hasClass("myclass")) {
			out.innerHTML += 
		`
					<div class="col-lg-5 offset-lg-1 col-md-11 offset-md-1 ownBorder pt-3 remove${this.id}">
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
							<div class="col-lg-5 col-md-5 mt-2">
							<p>Expiry date: ${shoppingCart[this.id].expiryDate}</p>
						</div>
						<div class="col-lg-4 offset-lg-3 col-md-4 offset-md-3 mt-2">
							<p>Weight: ${shoppingCart[this.id].weight}</p>
						</div>
						<div class="col-lg-12">
							<p>${shoppingCart[this.id].description}</p>
						</div>
						<div class="col-lg-7 col-md-7">
							<button id="${shoppingCart[this.id].id}" type="button" class="btn btn-primary btn-sm btn-sz rem">Remove</button>
						</div>
						<div class="col-lg-5 col-md-5 ">
							<p>Description</p>
						</div>
					</div>
				</div>
		`;

}else{
	$(`.remove${this.id}`).remove();
	delete favorite[this]
}

//----------THIS REMOVES THE NEW CONTENT AND REMOVES THE GREEN BUTTON --
		let removeButton = document.querySelectorAll(".rem");
		for(button of removeButton){
			button.onclick=function(e){
 				$(this.parentNode.parentNode.parentNode).remove();
 				$(`#${this.id}`).removeClass("myclass")
			}
		}	
		};
		


	}	

//----------SORT FUNCTION------------------------
var b = document.getElementById("bn");
b.onclick=function(e){
	order.sort(function(a, b){return b.price-a.price});
	console.log(order);
	$(".ownBorder").remove();
	for(orders of order){
	output.innerHTML += 		`
			<div class="col-lg-3 offset-lg-1 col-md-5 offset-md-1 ownBorder pt-3">
				<div class="row">
					<div class="col-lg-12 col-mg-12">
						<img class="image imageBorder"src="${orders.img}">
					</div>
						<div class="col-lg-6 col-md-6 mt-2">
							<p>${orders.title}</p>
						</div>
						<div class="col-lg-3 offset-lg-3 col-md-3 offset-md-3 mt-2">
							<p>€${orders.price}</p>
						</div>
						<div class="col-lg-12">
							<p>${orders.description}</p>
						</div>
						<div class="col-lg-7 col-md-7">
							<button id="${orders.id}" type="button" class=" btn btn-primary btn-sm btn-sz add">Add to favorites</button>
						</div>
						<div class="col-lg-5 col-md-5">
							<p>Nothing</p>
						</div>
					</div>
				</div>
				`;
}

}


};

//https://www.bootstraptoggle.com/