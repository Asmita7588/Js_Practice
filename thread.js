    //  Hoisting
    console.log("1. Hoisting:");
    console.log(a); // undefined
    var a = 10;

    // let & const hoisting - TDZ
    try {
      console.log(b);
    } catch (e) {
      console.log("accessing 'let' before declaration throws error: " + e);
    }
    let b = 20;

    //  memory allocation
    console.log("memory allocation:");
    let x = 5; // stack

    let obj = {name: "Asmita"}; // heap

    console.log("primitive (Stack):", x);
    console.log("non-Primitive (Heap):", obj);

    // higher-order functions
    console.log("higher-Order functions:");
    function greet(name, callback) {
      callback(name);
    }


    greet("Asmita", function(name) {
      console.log("Hello, " + name);
    });

    let nums = [1, 2, 3];
    let squared = nums.map(n => n * n); // higher-order
    console.log("Squared using map:", squared);

   
    

    setTimeout(() => {
      console.log("Inside setTimeout - after 2 seconds");
    }, 2000);

    console.log("after setTimeout");

    //event Loop Simulation
    console.log("Event Loop:");
    function asyncTask() {

      console.log("start async task");

      setTimeout(() => {
        console.log("Async task completed");
      }, 1000);
    }

    function syncTask() {

      console.log("Start sync task");

      for(let i = 0; i < 1e6; i++) {} // heavy sync loop
      console.log("Sync task completed");
    }

    asyncTask();

    syncTask();

    