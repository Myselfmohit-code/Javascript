console.log("hello world");

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();

    console.log(name, age, email);
})
