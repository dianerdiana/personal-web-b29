function getData() {
    
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if (name == "" || email == "" || phone == "" || subject == "" || message == "") {
        alert("Please input fill in all fields")
    } else {
        let emailReceiver = 'dianerdiana.de@gmail.com'

        let a = document.createElement('a')
        a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, ${message}`

        a.click()
    }

}