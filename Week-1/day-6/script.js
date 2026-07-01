const popUp = document.getElementById("popUp");
const form = document.querySelector(".form");
const studentName = document.getElementById("studentName");
const studentEmail =  document.getElementById("studentEmail");
const smbt = document.getElementById("sbmt");
let studentid = [];

popUp.addEventListener("click", function(){
    form.classList.toggle("showPopUp");
})


smbt.addEventListener("click", function() {
    const studentId = document.getElementById("studentId");
    studentid.push(studentId.value);
    console.log(studentid); // log the array
})


