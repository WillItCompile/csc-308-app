const myFunctions = require('./tests.js');

test('Testing div -- success', () => {
  const target = 2;
  const result = myFunctions.div(10, 5);
  expect(target).toBe(result);
});

test('Testing div -- failure', () => {
    const target = 6;
    const result = myFunctions.div(10, 5);
    expect(target).toBe(result);
  });
  
test('Testing containsNumber -- success', () => {
    const target = true;
    const result = myFunctions.containsNumbers("number42");
    expect(target).toBe(result);
  });
  
test('Testing containsNumber -- correct return false with no numbers', () => {
    const target = false;
    const result = myFunctions.containsNumbers("notnumber");
    expect(target).toBe(result);
  });
  
  test('Testing containsNumber -- bugFound', () => {
    const target = false;
    const result = myFunctions.containsNumbers("anything with a space returns as a number");
    expect(target).toBe(result);
  });