module.exports = {
    multiply: (a,b) => {
        if(a && b) return a*b;
        else return false;
    },
    divide: async (a,b) => {
        return new Promise((resolve, reject) => {
            if(a && b) resolve(a/b);
            else reject("invalid params");
        })
    }
}