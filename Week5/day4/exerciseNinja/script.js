// Exercise 1: Async Await & Try/Catch

const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typcode.com/albums"
      ];

const getData = async function() {
  try{
     const [users, posts, albums] = await Promise.all(urls.map(async function(url){
      const res = await fetch(url);
      return res.json();
     }));
      console.log('users', users);
      console.log('posta', posts);
      console.log('albums', albums);
  } catch(err) {
    console.log("ooooooops", err)
  }
 
}

getData(urls)

// Exercise 2 : Analyze #4

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// //The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

// let concurrentPromise = function () {
//     console.log('==CONCURRENT START with Promise.all==');
//     return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
//         console.log(messages[0]);
//         console.log(messages[1]);
//     });
// }

// setTimeout(concurrentPromise, 1000)

// Answer: 
// 1. ==CONCURRENT START with Promise.all== (1 second)
// 2. starting slow promise 
// 3. starting fast promise 
// 4. fast promise is done (1 second)
// 5. slow promise is done (2 seconds)
// 6. slow
// 7. fast

// Exercise 3 : Analyze #5

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let parallel = async function () {
//     console.log('==PARALLEL with await Promise.all==');
//     // Start 2 "jobs" in parallel and wait for both of them to complete
//     await Promise.all([
//         (async () => console.log(await resolveAfter2Seconds()))(),
//         (async () => console.log(await resolveAfter1Second()))()
//     ]);
// }

// setTimeout(parallel, 5000)

// Answer: 
// 1. ==CONCURRENT START with Promise.all== 
// 2. starting slow promise 
// 3. starting fast promise 
// 4. fast promise is done 
// 5. fast
// 6. slow promise is done 
// 7. slow
// The slow promise waited for the fast promise to be done, the fast promise started fist because of the seconds.

// Exercise 4 : Analyze #6

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// // This function does not handle errors. See warning below!
// let parallelPromise = function () {
//     console.log('==PARALLEL with Promise.then==');
//     resolveAfter2Seconds().then((message) => console.log(message));
//     resolveAfter1Second().then((message) => console.log(message));
// }

// setTimeout(parallelPromise, 13000)

// Answer: same as the one above.