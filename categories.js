
const todolist={
    work:[
        {title:"Meeting",
        description:"meeting about project which is on going",
         completed:true
    },
    {
        title:"report",
        description:"report about salaries and working employees",
        completed:true,
    }
    ],
    school:[
        {
            title:"math assignments",
            description:"assignment about function",
            completed:false,
        },{
         title:"algorthim and programming presentation",
         description:"presentation about array",
         completed:true,
        }
    ]
}
function addtasks(category , title ,description){
    if(todolist.hasOwnProperty(category)){
    const tasks={title:title,
        description:description,
        completed:false};
todolist[category].push(tasks)
//return todolist;
    
}else{
    console.log(`To dolist to ${title} already exists`);
    return;
}
    };

//console.log(todolist);
function displayTask(){
for(const category in todolist){
    if(todolist.hasOwnProperty(category)){
        return todolist
    }
}
}
const markCompleted=(category,task)=>{
    if(todolist.hasOwnProperty(category)){
        if(task>=0 && task<todolist[category].length){
            todolist[category][task].completed=true;
        } 
        }
    }

// remove 
const deleteTask=(category,taskName)=>{
    if(taskName>=0 && taskName<todolist[category].length && todolist[category][taskName].completed===true){
        todolist[category].splice(taskName,1);
        return todolist;
    }
}

addtasks('work','survey','how the business is going');
addtasks('school','register for exam','after paying whole school fees you have to register for exam')
markCompleted('work','report')

deleteTask('work',1);
console.log(displayTask());