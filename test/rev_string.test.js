const reverseString = require('./laba 3');

test(
    'Перевіряємо реверс стрічки', 
    () => {
        expect(reverseString('audi club')).toBe('bulc idua');
    }
);