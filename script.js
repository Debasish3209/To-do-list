let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

inputBx.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        if (this.value.trim() === "") {
            alert("Please input the task.");
        } else {
            addItem(this.value.trim());
            this.value = "";
        }
    }
});

let addItem = (inputText) => {
    let listItem = document.createElement("li");
    listItem.textContent = inputText;

    // Create and append the icon element
    let icon = document.createElement("i");
    icon.className = "fas fa-times"; // Assuming you're using Font Awesome for icons
    listItem.appendChild(icon);

    listItem.addEventListener("click", function() {
        this.classList.toggle('done');
    });

    // Event delegation for the dynamically added icon
    listItem.addEventListener("click", function(event) {
        if (event.target.tagName === "I") {
            listItem.remove();
        }
    });

    list.appendChild(listItem);
};
