$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 2.2,
        },
        768:{
            items: 3.2,
        },
        1100:{
            items: 4.2,
        },
        1400:{
            items: 5.2,
            loop: false,
        }
    }
});









const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 50;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function(){
	MainImg.src = smallimg[0].src;
}

smallimg[1].onclick = function(){
	MainImg.src = smallimg[1].src;
}

smallimg[2].onclick = function(){
	MainImg.src = smallimg[2].src;
}

smallimg[3].onclick = function(){
	MainImg.src = smallimg[3].src;
}





var Price = document.getElementById('Price');
var choice = document.getElementsByClassName('choice');

choice[0].onclick = function(){
	Price.innerHTML = "Lps. 600";
}

choice[1].onclick = function(){
	Price.innerHTML = "Lps. 500";
}


const btnElList = document.querySelectorAll('.btn');

btnElList.forEach(btnEl => {
	btnEl.addEventListener('click', () => {
 document.querySelector('.special')?.classList.remove('special');
		btnEl.classList.add('special');
	})
	
})

