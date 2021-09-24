let rotate = false, r = 0;
let myCat;

function init() {
  myCat = document.getElementById("animated-asset");
  myCat.addEventListener("mouseenter",function(obj){
    rotate = true;
    console.log("enter")
  })
  myCat.addEventListener("mouseleave",function(obj){
    rotate = false;
    console.log("leave")
  })

  setTimeout(updateRotation,500);
}

function updateRotation(){
  if(rotate){
    r += 1
    myCat.setAttribute("rotation",{x:r,y:r,z:r});
  }
  setTimeout(updateRotation,20);
}