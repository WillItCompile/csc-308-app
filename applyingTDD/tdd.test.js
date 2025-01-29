const Portfolio = require('./tdd.js');



//2.1 - commented out after refactoring, this is checked elsewhere
// test('Testing create portfolio -- success', () => {
//     const portfolio = new Portfolio();
//   });

//2.2
  test('check if empty -- success', () => {
    const portfolio = new Portfolio();
    const isEmpty = portfolio.empty;
    expect(true).toBe(isEmpty);
  });

  test('check if non empty -- success', () => {
    const portfolio = new Portfolio();
    portfolio.buyStock("APPL",100);
    const isEmpty = portfolio.empty;
    expect(false).toBe(isEmpty);
  }); 

//2.3 commented out after refactoring, this is checked elsewhere
//   test('Testing buy stock -- success', () => {
//     const portfolio = new Portfolio();
//     portfolio.buyStock("APPL",100);
//     const target = portfolio.tickers[0]
//     const result = ["APPL",100]
//     expect(target).toStrictEqual(result);
//   });

//2.4 commented out after refactoring, this is checked elsewhere
// test('Testing sell stock -- success', () => {
//     const portfolio = new Portfolio();
//     portfolio.buyStock("APPL",100);
//     portfolio.sellStock("APPL",75);
//     const target = portfolio.tickers[0]
//     const result = ["APPL",25]
//     expect(target).toStrictEqual(result);
//   });

//2.5 commented out after refactoring, this is checked elsewhere
// test('Testing count stocks -- success', () => {
//     const portfolio = new Portfolio();
//     portfolio.buyStock("APPL",100);
//     portfolio.buyStock("FORD",70);
//     portfolio.buyStock("APPL",100);
//     const target = portfolio.countStocks();
//     const result = 2;
//     expect(target).toBe(result);
//   });

//2.6
test('Testing remove stock from portfolio  -- success', () => {
    const portfolio = new Portfolio();
    portfolio.buyStock("APPL",100);
    portfolio.buyStock("FORD",7);
    portfolio.sellStock("APPL",100);
    portfolio.sellStock("FORD",6);

    const target = portfolio.countStocks();
    const result = 1;
    expect(target).toBe(result);
  });

//2.7
test('Testing count number of specified stock  -- success', () => {
    const portfolio = new Portfolio();
    portfolio.buyStock("APPL",100);
    const target = portfolio.numOfStock("APPL");
    const result = 100;
    expect(target).toBe(result);
  });

  test('Testing count number of specified stock given empty -- success', () => {
    const portfolio = new Portfolio();
    portfolio.buyStock("APPL",100);
    const target = portfolio.numOfStock("notAPPL");
    const result = 0;
    expect(target).toBe(result);
  });

//2.8
test('Testing selling more stock than avaiable  -- success', () => {
    const portfolio = new Portfolio();
    portfolio.buyStock("APPL",100);
    portfolio.sellStock("APPL",101);
    const target = portfolio.numOfStock("APPL");
    const result = 100;
    expect(target).toBe(result);
  });

//Refleation on TDD
//   I was able to follow the TDD practice. I will say at times it felt unecessary and tedious. 
//   However I did get rid of a lot of unecessary code the more I went ot repeatedly refactor. Especially with the test as I would notice myself testing
//   the same thing over and over again. Overall it was good practice and another tool I can use to develop, although it felt slower I ran into less large bugs.