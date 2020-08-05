var button = document.getElementById("enter");
var input= document.getElementById("userinput");
var ul=document.querySelector("ul");
const li = document.getElementsByTagName("li");
var buttonforlist = document.createElement("button");
var clearButton = document.getElementById("clear");
function inputlength()
{
return input.value.length;
}


function createListElement()
{
        var li=document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
}

function addListAfterClick(){
	console.log("click");
	if(inputlength() > 0)
	{
		createListElement()
    }
}

function addListAfterKeypress(event){
	if(inputlength() > 0  &&  event.which === 13)
		{
			createListElement()
	    }	
}

function clearList() {
    ul.innerHTML = "";
}

function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}


button.addEventListener("click",addListAfterClick);
clearButton.addEventListener("click", clearList);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", strikeThrough);