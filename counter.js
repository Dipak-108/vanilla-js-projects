

/*


function decrease() {
   
     counter=counter-1;

     document.getElementById("number_change").innerHTML=counter;
    
}

function reset(){
    counter=0;
    document.getElementById("number_change").innerHTML=counter;
}

function increase(){
counter++;
document.getElementById("number_change").innerHTML=counter;
}
*/

//console.log(document.querySelectorAll(".btn "));


counter =0;

let btns = document.querySelectorAll(".btn");
let value=document.querySelector("#number_change");

//console.log(btns);

btns.forEach((btn) => {
 //console.log(btn);

  btn.addEventListener("click", function (e) {

   console.log(e.currentTarget);
    const styles = e.currentTarget.classList;
    //console.log(styles);

    if (styles.contains("decrease")) {

      counter--;

      value.textContent=counter;

      
    }

    else if(styles.contains("increase")){
      counter++;
      value.textContent=counter;
    }


    else{
      counter=0;
      value.textContent=counter;
    }
  });
});
