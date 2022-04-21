function showData() {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    document.getElementById("name").value = ""

    if (name == "") { return alert('input must be not empty') }
    if (email == "") { return alert('input must be not empty') }
    if (phone == "") { return alert('input must be not empty') }
    if (subject == "") { return alert('input must be not empty') }
    if (message == "") { return alert('input must be not empty') }

    let emailReceiver = 'zack@gmail.com'

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=Let's Talk&body=Hello, my name is ${name}, Let's Talk, ${message}.`
    a.click()

    let dataObject = {
        dataName: name,
        dataEmail: email,
        phone,
        subject,
        message
    }

    console.table(dataObject);
}