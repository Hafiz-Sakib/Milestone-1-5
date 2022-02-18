var danishPrice = 50 ;
var butterBunPrice = 25 ;
var toastBiscuitPrice = 15 ;
var normalBiscuitPrice = 10 ;
var packedWell = false;
var myBudget = 200;
if (danishPrice <= myBudget) {
   if(packedWell == true){
       console.log("ami Danish khabo Karon Egula Fresh Aseeeeeee")
   }
   else {
       console.log("Ami ei Danish Khabo na karon ei Danish e machi Boshche miya!!")
   }
}
else if (butterBunPrice <= myBudget) {
    console.log("Butter Khabo Chete Chete,bun Khabo Cha diye")
}
else if (toastBiscuitPrice <= myBudget){
    console.log("Toast Biscuit Den Mama Taka poisha nai ajkeee")
}
else if (normalBiscuitPrice <= myBudget) {
    console.log("MAma Normal Biscuit den.ami ekono basha theke taka pai nai.eidike mash o shesh..")
}
else{
console.log("Hudai Cha Khabo")
}
