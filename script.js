let draggedElement = null;

const parent = document.getElementById('parent');

parent.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    e.target.classList.add('dragging');
});

parent.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
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
        
        if (draggedIndex < targetIndex) {
            parent.insertBefore(draggedElement, e.target.nextSibling);
        } else {
            parent.insertBefore(draggedElement, e.target);
        }
    }
});

