let parent = document.querySelector("#parent");
var item = null
var temp = null
var item1 = null
parent.addEventListener("dragstart", (e) => {
    item = e.target.id;  
	temp = e.target
    console.log(item);
});

parent.addEventListener("dragover", (e) => {
    e.preventDefault(); 
});

parent.addEventListener("drop", (e) => {
    item1 = e.target.id; 
     e.target.id = item
	temp.id = item1
});
