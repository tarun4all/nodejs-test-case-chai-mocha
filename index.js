const calulate = (a,b) => {
    return a+b;
}

const chceckAsyncLogin = async (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username == "tarun" && password == "tarun") resolve(true);
            else reject("Invalid username password");
        }, 2000);
    })
}

module.exports = {
    calulate,
    chceckAsyncLogin
}