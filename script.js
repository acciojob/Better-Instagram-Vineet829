let parent = document.querySelector("#parent");
let item = null;

parent.addEventListener("dragstart", (e) => {
    item = e.target;
});

parent.addEventListener("dragover", (e) => {
    e.preventDefault();
});

parent.addEventListener("drop", (e) => {
   

    
        let endId = e.target.id;
	    let endText = e.target.textContent
        e.target.id = item.id;
	    e.target.innerHTML = item.innerHTML
	    item.id = endId
	    item.textContent = endText
         
});
