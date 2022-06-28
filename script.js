let but1 = document.getElementById("button1");
let num1 = document.getElementById("Num1");
let num2 = document.getElementById("Num2");
let numtotal = document.getElementById("Total");
let BishBoshOut = document.querySelector("p.BishBoshPar");
let Item = document.getElementById("ItemName");   
let ToDoList = document.querySelector("#TheList");
let AI = document.getElementById("AddItem");
let RI = document.getElementById("RemoveItem");
var crosed = 0;

if(RI != null){
    RI.style.visibility = "hidden";
}

function BishBosh(){
    for (let i = 1; i <= 100; i++) {
        if(ifdiv3(i) && ifdiv4(i)){
            console.log('Bish-Bosh')
        }else if(ifdiv3(i)){
            console.log('Bish')
        }else if(ifdiv4(i)){
            console.log('Bosh')
        }else{
            console.log(i)
        }
      }
}

const ifdiv3 = function(i){
    if(i%3==0){
        return true
    }
    return false
}
const ifdiv4 = function(i){
    if(i%4==0){
        return true
    }
    return false
}

//BishBosh();


if(but1 != null){
    but1.addEventListener("click", e =>{
        BishBosh2(num1.value, num2.value, numtotal.value);
    });
}


const BishBosh2 = function(n1, n2, total){
    BishBoshOut.innerHTML = " ";
    for (let i = 1; i <= total; i++) {
        if((i%n1==0) && (i%n2==0)){
            BishBoshOut.innerHTML += "Bish-Bosh ";
        }else if((i%n1==0)){
            BishBoshOut.innerHTML += "Bish ";
        }else if((i%n2==0)){
            BishBoshOut.innerHTML += "Bosh ";
        }else{
            BishBoshOut.innerHTML += i+ " ";
        }
      }
}

if(ToDoList != null){
    ToDoList.addEventListener("click", e =>{   
        var target = e.target;
        /*
        while (target && target.parentNode !== ToDoList) {
            target = target.parentNode; // If the clicked element isn't a direct child
            if(!target) { return; } // If element doesn't exist
        }
        */
        if (target.tagName === 'LI'){
            if(target.className==="NoDoItem"){
                target.className="ToDoItem";
                crosed--;
            }else if(target.className==="ToDoItem"){
                target.className="NoDoItem";
                crosed++;
            }
        }
        if(crosed > 0){
            RI.style.visibility = "visible";
        }else{
            RI.style.visibility = "hidden";
        }
        });
}

if(AI != null){
    AI.addEventListener("click", e =>{        
    //console.log(Item.value)
        AddItemToList(Item.value);
    });
}

const AddItemToList = function(ItemName){
    if(Item.value !=""){
        let li = document.createElement("li");
        li.innerHTML = ItemName;
        li.className ="ToDoItem";
        ToDoList.appendChild(li);
        Item.value ="";
    }
}

if(RI != null){
    RI.addEventListener("click", e =>{        
    //console.log(Item.value)
        RemoveCrosedItemsFromList();
    });
}

const RemoveCrosedItemsFromList = function(){
    
    var items = ToDoList.getElementsByTagName("li");
    
    for (let i = 0; i <= items.length - 1; i++) {
        if(items[i].className==="NoDoItem"){
            items[i].parentNode.removeChild(items[i]);
            i--;
            crosed--;
        }

    }
    
    if(crosed > 0){
        RI.style.visibility = "visible";
    }else{
        RI.style.visibility = "hidden";
    }
    
}