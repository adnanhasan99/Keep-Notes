const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputBox);
    inputBox.appendChild(img);
    notes = document.querySelectorAll(".input-box");
    updateStorage();
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        // Use the input event to update storage when the content changes
        e.target.addEventListener("input", updateStorage);
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        // Use document.execCommand to insert a line break
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
