const input=document.getElementById("do");
const addBtn=document.getElementById("addBtn");
const liste=document.getElementById("liste");

addBtn.addEventListener('click',() =>{
     liste.innerHTML +=
     `<input type="checkbox" id="check" value="Bike"> 
     <label for="check">${input.value}</label><i class="fas fa-trash"></i>`;
     input.value="";
     
});


