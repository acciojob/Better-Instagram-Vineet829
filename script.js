let draggedElement = null;

const parent = document.getElementById('parent');

parent.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    e.target.style.opacity = 0.5;
});

parent.addEventListener('dragend', (e) => {
    e.target.style.opacity = "";
});

parent.addEventListener('dragover', (e) => {
    e.preventDefault();
});

parent.addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('image') && draggedElement !== e.target) {
        const allImages = Array.from(parent.children);
        const draggedIndex = allImages.indexOf(draggedElement);
        const targetIndex = allImages.indexOf(e.target);
        parent.insertBefore(draggedElement, targetIndex > draggedIndex ? e.target.nextSibling : e.target);
    }
});


