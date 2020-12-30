
// show/hide contacts icons toggle
const hereEl = document.querySelector("#hover-here")
const iconContainerEl = document.querySelector("#icon-container")

function showContacts() {
    console.log("works")
    iconContainerEl.classList.toggle("hide")

};

// here hover call
hereEl.addEventListener("click", showContacts)