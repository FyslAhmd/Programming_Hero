function sendNotification(email) {
    if(!email.includes('@')) {
        return "Invalid Email";
    }

    let seperate = email.split('@');
    let newMessege = seperate[0]+' sent you an email from '+seperate[1];
    return newMessege;
}

console.log(sendNotification('AhmedFaysal@gmail.com'));
console.log(sendNotification('AhmedFaysalgmail.com'));