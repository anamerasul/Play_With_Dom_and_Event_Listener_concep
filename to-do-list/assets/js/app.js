
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



