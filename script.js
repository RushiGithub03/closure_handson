// Question-1

// Question-1 :
  function counter(){
var counter = 0;

function IncreaseCounter() {
return counter += 1;
};

return IncreaseCounter; // ir returns the IncreaseCounter() function with defination
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


// Question 2 
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? 1
  }
  console.log(count); // What is logged? 0
})();

// self invoking function--




// question-3


for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

  // output is 3
  // 3
  // 3



  // Question 4
  //Write a code to calculate area of a rectangle using inner function. In this case outer
  //  function should accept parameter length and inner function should accept parameter breadth.

  
  // Answer-4

  function length(len){
        
    function bredth(breadth){
        return len * breadth
    }

    return bredth;
    }    

   
   var breadth=length(5);
   let area=breadth(50);
   console.log("Area of Rectangle is ",area);



  //  Question-5
  //  Take a variable in outer function and create an inner function to increase the counter every time it is called

  //  Answer-5

            function outer(){
                var cnt=0;

                function inner(){
                    return cnt++;
                }
                
                return inner;
            }

            var inner=outer();
            // var inn=inner();
            console.log(inner());
            console.log(inner());
            console.log(inner());
            console.log(inner());
                       
          //  console.log(inn);


          // Question-6
          // Answer--6
          //

          var a = 12;
          (function () {
          alert(a);
          })();

          //  Answer-6
            // output 12: 
            // 12 is shown on window 
            // Reason: it's an self invoking function and the variable is shown as 12 because of it's shares same memory
            // due to global scope.



            // quetion - 7
            
            var a = 10;
            var x = (function () {
            var a = 12;
            return function () {
            alert(a);
              };
             })();
             x();

            //  answer-7
            //  output is 12
            // Reason:
            // We have created the outer variable a =10; outside the funtionand inside the function we have redelcared the 
            // that vriable so two  diffrerent memory has created for that vriable on is global memory and one for function 
            // memeory so inside that we have changed the value of the a variable with it's redelcaration





            // question-8
            var globalVar = "xyz";

     (function outerFunc(outerArg) {
      var outerVar = 'a';
    
       (function innerFunc(innerArg) {
      var innerVar = 'b';
    
      console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
       })(456);
      })(123);
