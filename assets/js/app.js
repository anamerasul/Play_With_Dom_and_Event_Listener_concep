// alert('hello');

const allButton=document.getElementsByClassName('button-test');
console.log(allButton);
const primeBtn=document.getElementById('Prime');
console.log(primeBtn);

for (const btn of allButton ){
                    // console.log(btn)
                    // // btn.style.backgroundColor="red"
                    btn.addEventListener('click',function (event){
                                        // console.log(event.target.parentNode.parentNode);
                                        // document.getElementById('title').style.color='green';
                                        // console.log(event.target.id)
                                        if(event.target.id==="Prime"){
                                                            document.getElementById('title').style.color='green';
                                        }
                                        else{
                                                            document.getElementById('title').style.color='orange';
                                        }
                    })
                    
}

