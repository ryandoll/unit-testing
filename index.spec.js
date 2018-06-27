const app = require('./index');

describe('sort', () => {
  test('numbers', () => {
    let myArray = [3, 1, 9];
    expect(app.sort(myArray)).toEqual([1, 3, 9]);
  });
  test('words', () => {
    let myArray = ['Cow', 'Hippo', 'Bee'];
    expect(app.sort(myArray)).toEqual(['Bee', 'Cow', 'Hippo']);
  });
});

describe('reverse sort', () => {
  test('numbers', () => {
    let myArray = [3, 1, 9];
    expect(app.reverseSort(myArray)).toEqual([9, 3, 1]);
  });
  test('words', () => {
    let myArray = ['Cow', 'Hippo', 'Bee'];
    expect(app.reverseSort(myArray)).toEqual(['Hippo', 'Cow', 'Bee']);
  });
});
