const assert = require('assert');
const {calulate, chceckAsyncLogin} = require('./index');
const fs = require('fs');
const AsyncFunctionInstance = (async () => {}).constructor;
const automatedConfig = require('./test.config');
const utils = fs.readdirSync('./utils').reduce((acc, file) => {
    const obj = require(`./utils/${file}`);
    return {...acc, ...obj};
}, {});

//automated from utils folder
describe(automatedConfig.name, function () {
    automatedConfig.testCases.forEach(test => {
        it(test.description, function (done) {
            let isValid = null;

            //check if function async for promise resolve and reject
            if(utils[test.fnName] instanceof AsyncFunctionInstance) {
                utils[test.fnName](...test.params).then(result => {
                    if(test.equal) assert.equal(result, test.equal);
                    if(test.notEqual) assert.notEqual(result, test.notEqual);

                    done();
                }).catch((err) => {
                    assert.equal(err, test.err);
                    done();
                }).catch(done);
            } else {
                isValid = utils[test.fnName](...test.params);
                
                if(test.equal) assert.equal(isValid, test.equal);
                if(test.notEqual) assert.notEqual(isValid, test.notEqual);
                done();
            }
        }).timeout(automatedConfig.timeout);
    })
});

//mannual test case
describe('Basic Mocha String Test', function () {
    it('should return number of addition', function () {
        const isValid = calulate(2, 3)
        assert.equal(isValid, 5);
    });

    it('should return true on login', function (done) {
        chceckAsyncLogin("tarun", "tarun").then(result => {
            assert.equal(result, true);
            done()
        }).catch(done)
    }).timeout(10000);

    it('should return error on login', function (done) {
        chceckAsyncLogin("tarun", "aa").then(result => {
            assert.should.be.rejected()
            done()
        }).catch((err) => {
            assert.equal(err, 'Invalid username password');
            done();
        }).catch(done);
    }).timeout(10000);
});