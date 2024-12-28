let trigger = document.querySelector(".menu-trigger");
let menu_side = document.querySelector(".menu-side");
let menu_openned = false;


trigger.addEventListener("click",function(){
    console.log(this);
    
    if (this.classList.contains('on')) {this.classList.remove('on');}
  else {this.classList.add('on')};

    console.log("Cliqued and -->",menu_openned);
    menu_openned = !(menu_openned);

        if(menu_openned==true){
            menu_side.classList.add("show");
        }else{
            menu_side.classList.remove("show");

        }

    
})