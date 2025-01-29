//2.1
class Portfolio {
    constructor() {
      this.tickers = [];
      this.empty = true; //2.2
    }
//2.3
    buyStock(ticker,amount){
        this.tickers.push([ticker,amount]);
        this.empty = false; //2.2
    }
//2.4
    sellStock(ticker,amount){
       for (let i=0; i<this.tickers.length; i++){
            if(this.tickers[i][0] == ticker){
                if(this.tickers[i][1] < amount){
                    throw new Error('Not possible to sell this number of shares.'); //2.8
                }
                else if(this.tickers[i][1] - amount == 0){
                    this.tickers.splice(i,1);
                }
                else{
                    this.tickers[i][1] = this.tickers[i][1] - amount;
                }
            }
       }
    }
//2.5
    countStocks(){
        const arr = [];
        for (let i=0; i<this.tickers.length; i++){
            var notFound = true;
            for (let j=0; j<arr.length; j++){
                if(this.tickers[i][0] == arr[j][0]){
                    notFound = false;
                    break;
                 }
            }
            if (notFound){
                arr.push(this.tickers[i]);
            }
        }
        return arr.length;
    }
//2.7
    numOfStock(stock){
        for (let i=0; i<this.tickers.length; i++){
                if(this.tickers[i][0] == stock){
                    return this.tickers[i][1];
                }
                else{
                    return 0;
                }
        }
    }
}

module.exports = Portfolio; 