var ranges = [
    { scale: 1e18 , suffix: 'E' },
    { scale: 1e15 , suffix: 'P' },
    { scale: 1e12 , suffix: 'T' },
    { scale: 1e9 , suffix: 'B' },
    { scale: 1e6 , suffix: 'M' },
    { scale: 1e3 , suffix: 'K' }
  ];

function shortenNum(number,scale){
    if(scale){
        let converted = (number / scale);
        // remove other digits
        number = converted > 1 ? converted.toString().slice(0,4) : converted;
        // remote trailing .
        number = number[number.length - 1] === "." ? number.slice(0,3) : number;
        return number;
    }else{
        return number.toString().slice(0,3);
    }
}

function formatNumber(number){
    for(let range of ranges){
        if (number >= range.scale) {
            number = shortenNum(number, range.scale);
            return number + range.suffix;
        }
    }
    return shortenNum(number);
}

export {
    formatNumber as default,
    shortenNum
}