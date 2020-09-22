
const UItaskInput = document.getElementById('taskInput')
const UIaddTaskBtn =document.getElementById('addTaskBtn')
const UIclearBtn =document.getElementById('clearBtn')
let UIlist =document.getElementById('list')


function addTask(e){
    let value=UItaskInput.value;
    if(value ===''){
        return ;
    }
    createTask(value);
}
function createTask(value){
    //Create li for ul
    const li =document.createElement('li');
    li.className='collection-item';

    //Create div
    const div =document.createElement('div');
    div.textContent=value;

    //Create Link 
    const link = document.createElement('a')
    link.setAttribute('href','#')
    link.className='secondary-content'
    link.innerHTML='<i class="fa fa-trash"></i>';

    div.appendChild(link);
    li.appendChild(div);
    UIlist.appendChild(li)
    UItaskInput.value="";
    
}
function clearTasks(e){
    while(UIlist.firstChild){

            UIlist.firstElementChild.remove();
            e.preventDefault()
       
    }
}
function deleteTask(e){
    obj=''
    if(e.target.className=='secondary-content' || e.target.className=='fa fa-trash'){
       e.target.closest('li').remove()

    }
}


UIaddTaskBtn.addEventListener('click',addTask)
UIclearBtn.addEventListener('click',clearTasks);
UIlist.addEventListener('click',deleteTask)