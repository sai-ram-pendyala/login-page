let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    console.log({
        "First Name": formData.get("fname"),
        "Last Name": formData.get("lname"),
        "Email": formData.get("email"),
        "Phone Number": formData.get("mobilenumber"),
        "Password": formData.get("password"),
        "Confirmed Password": formData.get("confirmed-password")
    });
})