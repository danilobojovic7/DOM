//console.dir(document);
//console.log(document.domain);
//console.log(document.title);
//console.log(document.head);
//console.log(document.all);

document.title = "DOM vezba";

let items = document.getElementById("items");
let listItems = document.getElementsByClassName("list-item");

for(let i=0; i < listItems.length; i++)
{
    listItems[i].style.color = "white";
    if(i%2==0)
    {
        listItems[i].style.backgroundColor = "#4FD8EE";
    }
    else listItems[i].style.backgroundColor = "#01BAFF";
}

console.log(document. getElementById("container"))

console.log(document. getElementsByClassName("list-items"))

//getElementByTagName

console.log(document.getElementsByTagName("h2"))

document.getElementById("main-title").textContent="Glavni naslov"



let title=document.getElementsByClassName("title")
title[1].textContent = "Promena"
listItems[3].textContent="Cetvrti"
listItems[3].style.backgroundColor="red"

//querySelector

document.querySelector("#random-element p").style.backgroundColor


//getElementById(id) sortira stvari pod id
//getElementsByTagName(tag)          npr   getElementsByTagName(p)   nam stavi svaki paragraf u jednom nizu 
//querySelector  u zagradu pisemo neki selector kao sto bismo pisali u CSS, vraca prvi element iz tog niza

let listItem = document.getElementById("items")
//parentNode
console.log(listItem.parentNode)
listItem.parentNode.style.backgroundColor = "lightblue"


//parentElement

console.log(listItem.parentElement)

//childNodes

console.log(listItem.childNodes)

listItem.childNodes[1].style.backgroundColor = "brown"

//children (element)

console.log(listItem.children)
listItem.children[0].style.backgroundColor="yellow"


//firstChild
//firstElementChild

listItem.firstElementChild; //listItem.children[0]
listItem.lastElementChild; //listItem.children[listItem.children.length]


//sibling
console.log(listItem.previousElementSibling)

listItem.previousElementSibling.style.color="brown"

console.log(listItem.nextElementsibling)

let drugiElement = document.getElementsByClassName("list-item")[1]




