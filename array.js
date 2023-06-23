// task1
// function getFirstValue(arr){
//    return  arr.at(0);
// }
// console.log(getFirstValue([300, 200, 30]));
// console.log(getFirstValue([30, 200, 30]));
// console.log(getFirstValue([4, 200, 30]));

// task1

// function makePair(...arr){
//     return arr;
// }
// console.log(makePair(1,22));
// console.log(makePair(30124,21324));
// console.log(makePair(133,14411));

// task3

// function  reverse(arr){
//     return arr.reverse(arr);
// }
// console.log(reverse([1,2,3,4,5]));
// console.log(reverse([3,4,5,2,1,1]));
// console.log(reverse([22,32,45,64]));

// task4

// function incrementItems(arr){
//     return arr.map((arr) => arr+1)
// }
// console.log(incrementItems([0, 1, 2, 3]));
// console.log(incrementItems([2, 4, 6, 8]));
// console.log(incrementItems([-1, -2, -3, -4]));

// task5

// function getLastItem(arr){
//     return arr.at(-1);
// }
// console.log(getLastItem([1,2,3,54]));
// console.log(getLastItem(["cat", "dog", "duck"]));    // didan darkor
// console.log(getLastItem([true, false, true]));

// Task 6

// function arrayToString(arr){
//     return arr.join("");
// }
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// Task 7
// function check( arr, n ){
//     return arr.includes(n);
// }
// console.log(check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 2, 3, 4, 5], 5));
// console.log(check([1, 2, 3, 4, 5], 7));

// task8
// function findindex(arr, n){
//     return arr.findIndex((lement)=>lement===n);
// }
// console.log(findindex(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(findindex(["Red", "blue", "Blue", "Green"], "blue"));
// console.log(findindex(["a", "g", "y", "d"], "d"));

// task9

// function Concat(arr, arr1){
//     let arr2 = arr.concat(arr1);
//     return arr2;
// }
// console.log(Concat([1, 3, 5], [2, 6, 8]));
// console.log(Concat([7, 8], [10, 9, 1, 1, 2]));
// console.log(Concat([4, 5, 1], [3, 3, 3, 3, 3]));

// task10

// function toNumberArray(arr){
//     let arr1 = arr.map(Number);
//     return  arr1;
// }
// console.log(toNumberArray(["9.4", "4.2"]));
// console.log(toNumberArray(["94", "42"]));
// console.log(toNumberArray(["0.4", "9.2"]));

// task12
// function parseArray(arr){
//     let arr1 = arr.map(String);
//     return arr1;
// }
// console.log(parseArray([1, 2, "a", "b"]));
// console.log(parseArray(["abc", 123, "def", 456]));
// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));

// task11
// function sumArray(arr){
//     return arr.reduce((x,n) => x+n);
// }
// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([-1, 0, 1]));
// console.log(sumArray([0, 4, 8, 12]));1

// task13
// function arrBetween(n, n1, arr) {
//   let arr1 = arr.filter((elem) => {
//     if (elem > n && elem < n1) {
//       return elem
//     }
//   })
//   return arr1;
// }

// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
// console.log(arrBetween(3, 8, [1,  95, 0,  ]));

// function arrBetween(n, n1, arr) {
//     let arr1 = arr.filter((elem) => {
//       if (elem > n && elem < n1) {
//         return elem
//       }
//     })
//     return arr1
//   }

//   console.log(arrBetween(3, 8, [1, 2, 6,55, 5, 45, 7]))

//task 13   //task 14
  
// task15
// function cube(x, n){
//     let a = Math.sqrt(x);
    
//      let    b = a*a;
//       let  c = a*a*a;
//        if (x==b && n==c){
//        return  true;
//        }
//        else { return false;}
       
 
// }

// console.log(cube([4,8]));
// console.log(cube([16,48]));
// console.log(cube([9,27]));

// task16

// function invertArray(arr){
//     return arr.map((elem)=> elem *(-1))
// }
// console.log(invertArray([1, 2, 3, 4, 5]));
// console.log(invertArray([1, -2, 3, -4, 5]));
// console.log(invertArray([]));

// task 17
// function getMultipliedArr(arr){
//     return arr.map((elem)=>2*elem);
// }
// console.log(getMultipliedArr([2, 5, 10]));
// console.log(getMultipliedArr([8, 172, 0]));
// console.log(getMultipliedArr([1, 12, 120]));

// task 18
// function getSumOfItems(arr){
//     return arr.reduce((a, b)=>a+b);
// }
// console.log(getSumOfItems([2, 7, 4]));
// console.log(getSumOfItems([4, 4, 0]));
// console.log(getSumOfItems([-2, 84, 23]));


// task 19
// function forbiddenLetter(n, arr){
//  let arr1 =  n.includes(arr);
//  return arr1;
// }
// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));        //      shto to ne tak
// console.log(forbiddenLetter("a", []));

// task 20
// function sumFive(arr){
//     return arr.reduce((a,b)=>a+b);
// }
// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
// console.log(sumFive([1, 2, 3, 4]));
// console.log(sumFive([10, 12, 28, 47, 55, 100]));

//task 21
// function filterArray(arr){
//     return arr.filter(Number);
// }
// console.log(filterArray([1, 2, 3, "a", "b", 4]));
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
// console.log(filterArray(["Nothing", "here"]));

//task22
// function evenOrOdd(arr){
//        let arr1 =  arr.reduce((a,b)=>a+b);
//        return arr1%2==0 ? du : evenOrOdd;
//     //    if (arr1%2==0){return even;}
//     //    else {return Odd;}
// }
// console.log(evenOrOdd([12, 2]))

//task23
// function rangeOfNum(a, b){
//     let arr1 = filter((elem)=>{
//             if (elem>a && elem<b){return elem;}
//     })
// return arr1;
// }
// console.log(rangeOfNum([2,4]))