'use strict'
let arr = ["15", "50", "45"];
arr.splice (1 , 0 ,'18');
for ( let i = 0; i < arr.length; i++) {
   if ( arr[i] > 25 ) {
     alert(arr[i]);
   }
}
