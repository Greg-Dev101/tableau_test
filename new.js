document.querySelector("form").addEventListener("sumit", (e)=>{
e.preventDefault();
const nane = document.querySelector("#name").value
const familyName = document.querySelector("#familyName").value

console.log (nane);
console.log (familyName)

const divName = document.querySelector("#putName")
const divFamilyName = document.querySelector("#putFamilyName")

divName.appendChild(p)

p.innerhtml = Name;
divFamilyName.innerhtml = familyName;

})