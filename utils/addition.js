module.exports = {
    add: (a,b) => {
        return a+b;
    },
    addString: async (a,b) => {
        return new Promise((resolve, reject) => {
            if(a && b) resolve(a+b);
            else reject("invalid params");
        })
    }
}