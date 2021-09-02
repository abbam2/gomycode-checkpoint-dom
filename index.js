const btnp = document.querySelectorAll(".btnp");
const btnm = document.querySelectorAll(".btnm")
btnp.forEach(x => x.addEventListener("click", increase));
btnm.forEach(x => x.addEventListener("click", decrease));

function increase() {
	this.previousElementSibling.value =  parseInt(this.previousElementSibling.value) +1

	let quantity = parseInt(this.previousElementSibling.value);
	let price = parseInt(this.parentElement.nextElementSibling.innerHTML);
 
	sousTotal(this, quantity, price)
    total()
}

function decrease(){
	if(parseInt(this.nextElementSibling.value) > 0){
        this.nextElementSibling.value =  parseInt(this.nextElementSibling.value) -1;
        let quantity = parseInt(this.nextElementSibling.value);
        let price = parseInt(this.parentElement.nextElementSibling.innerHTML);

        sousTotal(this, quantity, price)
        total
	}
}

function sousTotal(elt, qty, price){

    let sousTotal = qty * price;

    elt.parentElement.nextElementSibling.nextElementSibling.innerHTML = sousTotal;
}  

function total(){
    let sousTotalAll = document.querySelectorAll('.sousTotal');
  

    let tot = 0;

   for (x of sousTotalAll){
   
    
       tot = tot + parseInt(x.innerHTML)

       
   }

 
   document.querySelector('.total').innerHTML = "Total : " + tot;

    



}