function sendNotification(email) {

    if (!email.includes('@')) {
        return "Invalid Email";
    }

    let totalEmail = email.split('@');
    let username = totalEmail[0];
    let domain = totalEmail[1];

    return `${username} sent you an email from ${domain}`;
}



const final_result = sendNotification("fahim234.hotmail.com")
console.log(final_result)
