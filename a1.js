// 宣告變數
let framework = 'react';
const webframwok = 'react';

// for 迴圈
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 條件判斷
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log(i);
    }
}

// 建立函式
// function sayhello() {
//     console.log('hello');
// }

const sayhello = function () {
    console.log('hello');
}

// 陣列
const frameworks = ['React', 'Vue', 'Angular'];

// 物件建立
const smartphone = {
    deviceName: 'iphone12',
    price: 290000,
    brand: 'Apple',
    merchants: ['apple store', 'pchome', 'momo'],
}

// 樣板字面值 Template strings
const favoritephone = 'iphone';
// 要使用反引號``
console.log(`I want to buy the ${favoritephone}`);


// 傳統方式
// function showIphonePrice(currentPrice) {
//     return `This iphone is ${currentPrice} now.`;
// };
// console.log(showIphonePrice(269000));

// 箭頭函式 arrow functions
const showIphonePrice = (currentPrice) => {
    return `The iphone is ${currentPrice} now.`;
};
console.log(showIphonePrice(2699000));