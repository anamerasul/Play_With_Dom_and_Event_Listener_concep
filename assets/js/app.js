// // alert('hello');

// const allButton=document.getElementsByClassName('button-test');
// console.log(allButton);
// const primeBtn=document.getElementById('Prime');
// console.log(primeBtn);

// for (const btn of allButton ){
//                     // console.log(btn)
//                     // // btn.style.backgroundColor="red"
//                     btn.addEventListener('click',function (event){
//                                         // console.log(event.target.parentNode.parentNode);
//                                         // document.getElementById('title').style.color='green';
//                                         // console.log(event.target.id)
//                                         if(event.target.id==="Prime"){
//                                                             document.getElementById('title').style.color='green';
//                                         }
//                                         else{
//                                                             document.getElementById('title').style.color='orange';
//                                         }
//                     })
                    
// }

let count=0;
// document.getElementById('plus').addEventListener('click',function (e){
                    // console.log('hello')
                    // count++;
                    // console.log(count);
                    // document.getElementById('title').innerText=count;
//                     control('title');
// });


// document.getElementById('minus').addEventListener('click',function (e){

                    // if(count===0){
                    //                     return false;
                    // }
                    // count--;
// document.getElementById('title').innerText=count;
// control('title');
// });


function add(e){

                    // if(count<0){
                    //                     return false;}
                    count++;              control('title');     
}
function substract(e){
                    count--; 

                    control('title');

                    }



function control(id){


                    
                    if(count<0){
                                        return false;
                                        // console.log(count)
                    }                                   document.getElementById(id).innerText=count;
                    

                    
}