// A)includes();

// Array.prototype.includesCustom = function (includesElement) {
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] === includesElement) {
//             return true;
//         }
//     }
//     return false;
// }
// let res = [1, 2, 3, 4].includesCustom(5);
// console.log(res); 

// -------------------------------------------------------------------------------

// B)indexOf();

// Array.prototype.indexOfCustom = function (indexElement) {
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] === indexElement) {
//             return i;
//         }
//     }
//     return -1; 
// }
// let res = [1, 2, 3, 4].indexOfCustom(5);
// console.log(res); 

// --------------------------------------------------------------------------------

// C)reverse();

// Array.prototype.reverseCustom = function(){
//     let reverse = []
//     for(i = this.length-1 ; i >= 0 ; i --){
//         reverse.push(this[i])
//     }
//     return reverse
// }
// let res = [1, 2, 3, 4].reverseCustom();
// console.log(res); 

// -------------------------------------------------------------------------------

// D)join();

// Array.prototype.joinCustom = function (callbackFN = ',') {
//     let join = '';
//     for (let i = 0; i < this.length; i++) {
//         join += this[i];
//         if (i < this.length - 1) {
//             join += callbackFN;
//         }
//     }
//     return join;
// }

// let res = ['hello', 'hi', 'bye'].joinCustom(', ');
// console.log(res); 

// -------------------------------------------------------------------------------

// E)find();

// Array.prototype.findCustom = function (callbackFN) {
//     for (let i = 0; i < this.length; i++) {
//         if (callbackFN(this[i], i, this)) {
//             return this[i];
//         }
//     }
// }
// let res = [1, 2, 3, 4, 5, 6].findCustom((val, i, arr) => {
//     return val > 4; 
// });
// console.log(res); 

// ---------------------------------------------------------------------------------

// F)findIndex();

// Array.prototype.findIndexCustom = function (callbackFN) {
//     for (let i = 0; i < this.length; i++) {
//         if (callbackFN(this[i], i, this)) {
//             return i;
//         }
//     }
//     return -1; 
// }
// let res = [1, 2, 3, 4, 5, 6].findIndexCustom((val, i, arr) => {
//     return val > 5;
// });
// console.log(res);

// -------------------------------------------------------------------------------

// G)filter();

// Array.prototype.filterCustom = function(callbackFN){
//     let filter = []
//     for(i = 0 ; i < this.length ; i ++){
//         if(callbackFN(this[i] , i , this)){
//             filter.push(this[i])
//         }
//     }
//     return filter
// }
// let res = [1, 2, 3, 4, 5, 6].filterCustom((val, i, arr) => {
//     return val > 3;
// });
// console.log(res);

// -----------------------------------------------------------------------------

// H)every();

// Array.prototype.everyCustom = function (callbackFN) {
//     for (let i = 0; i < this.length; i++) {
//         if (!callbackFN(this[i], i, this)) {
//             return false; 
//         }
//     }
//     return true;
// }
// let res = [1, 2, 3, 4].everyCustom((val, i, arr) => {
//     return val > 2;
// });
// console.log(res);

// ----------------------------------------------------------------------------

// I)some();

// Array.prototype.someCustom = function (callbackFN) {
//     for (let i = 0; i < this.length; i++) {
//         if (callbackFN(this[i], i, this)) {
//             return true; 
//         }
//     }
//     return false; 
// }
// let res = [1, 2, 3, 4].someCustom((val, i, arr) => {
//     return val > 2;
// });
// console.log(res);

// ------------------------------------------------------------------------------

// J)reduce();

// Array.prototype.reduceCustom = function(callbackFN){
//    let reduce = []
//    for(i = 0 ; i < this.length ; i ++){
//     if(callbackFN(this[i] , i , this)){
//         this[i] = i + this[i]
//         reduce.push(this[i])
//         console.log(this[i]);
//     }
//    }
//    return reduce
// }
// let res = [1, 2, 3, 4, 5].reduceCustom((val, i, arr) => {
//     return val + 3;
// });
// console.log(res);
