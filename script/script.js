function getData() {
    
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if (name == "") {
        alert("Your name field is empty")
    }

    if (email == "") {
        alert("Your email field is empty")
    }

    if (phone == "") {
        alert("Your phone field is empty")
    }

    if (subject == "") {
        alert("Your subject field is empty")
    }

    if (message == "") {
        alert("Your message field is empty")
    }

    let emailReceiver = 'dianerdiana.de@gmail.com'

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, ${message}`

    a.click()

    let dataObject = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    }

    console.log(dataObject)

}