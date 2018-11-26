const main = require('../src/main');

describe('isAValidKey', () => {
    const tests = [
        {actual: 'KeyA', expected: true},
        {actual: 'KeyS', expected: true},
        {actual: 'KeyD', expected: true},
        {actual: 'KeyF', expected: true},
        {actual: 'KeyG', expected: true},
        {actual: 'KeyH', expected: true},
        {actual: 'KeyJ', expected: true},
        {actual: 'KeyK', expected: true},
        {actual: 'KeyL', expected: true},
        {actual: 'KeyQ', expected: false},
        {actual: 'KeyW', expected: false},
        {actual: 'KeyE', expected: false},
        {actual: 'KeyR', expected: false},
        {actual: 'KeyT', expected: false},
        {actual: 'KeyY', expected: false},
        {actual: 'KeyU', expected: false},
        {actual: 'KeyI', expected: false},
        {actual: 'KeyO', expected: false},
        {actual: 'KeyP', expected: false}
    ];

    tests.forEach(function (test) {
        it(`should say that ${test.actual} is ${test.expected ? 'valid' : 'invalid'}`, function () {
            expect(main.isAValidKey(test.actual)).toBe(test.expected);
        });
    });
});

describe('addPressedAnimation', () => {

    document.body.innerHTML = '<div id="someId"/>';

    it('should add press class to a div', function () {
        let div = document.getElementById('someId');
        main.addPressedAnimation('someId');
        expect(div.classList).toContain('press');
    });
});

describe('removePressAnimation', () => {

    document.body.innerHTML = '<div id="someId" class="press"/>';

    it('should remove press class to a div', function () {
        let div = document.getElementById('someId');
        main.removePressAnimation('someId');
        expect(div.classList).not.toContain('press');
    });
});