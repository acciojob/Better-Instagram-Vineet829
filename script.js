let parent = document.querySelector("#parent");
let item = null;

parent.addEventListener("dragstart", (e) => {
    item = e.target;
});

parent.addEventListener("dragover", (e) => {
    e.preventDefault();
});

parent.addEventListener("drop", (e) => {
    e.preventDefault();

    if (item !== e.target && e.target.classList.contains("image")) {
        let endId = e.target.id;
        let endText = e.target.textContent;
        e.target.id = item.id;
        e.target.textContent = item.textContent;
        item.id = endId;
        item.textContent = endText;
    }
});

