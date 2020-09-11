module.exports = {
    name: 'Automated test case',
    timeout: 10000,
    testCases: [
        { fnName: 'add', equal: 5, params: [2,3], description: 'Should add numbers' },
        { fnName: 'add', notEqual: 10, params: [2,3], description: 'Should fail on adding numbers' }, 
        { fnName: 'addString', equal: 'taruntarun', params: ['tarun', 'tarun'], description: 'Should concat strings'},
        { fnName: 'addString', err: 'invalid params', equal: 'taruntarun', params: ['tarun'], description: 'Should concat strings'}
    ]
}