const { title } = require("process");

const taskScheduler = {
    tasks: [],

    addTask:function(title, description, dueDate) {
        const task = { title, description, dueDate, completed: false };
        this.tasks.push(task);
       
    },
   sorttasks:function(){
    const sortedTasks=this.tasks.sort((a,b) => new Date(a.dueDate)-new Date(b.dueDate));
    console.log("sortedtasks");
    sortedTasks.forEach((task,index) =>{
     console.log(`${index +1}.Title:${task.title},description:${task.description},dueDate:${task.dueDate},
     completed:${task.completed}`);
    });
   },
   updateTask:function(){
    const findIndex=this.tasks.findIndex(task =>task.title === title);
    if(findIndex>=0){
if(typeof newDetails ==='object'){
    this.tasks[findIndex] ={... this.tasks[findIndex], ...newDetails};
    console.log(`Task "${title}" updated successfully:`);
    console.log(this.tasks[findIndex]);
    if(typeof findIndex !== 'undefined' && typeof this.tasks !=='undefined' && tasks[findIndex]&& tasks[findIndex].hasOwnProperty('completed')){
        if(tasks[findIndex].completed === true){
console.log(`task "${title} uploaded successfully:"`);
console.log(this.task[findIndex]);
        }
        else{
            console.log('New data must be object');
        }
    }
   
       
}
    else{
        console.log('task not found');
    }
}
    },




   removeTask:function(title){
    const findIndex = this.tasks.findIndex(task => task.title === title);
    //const findIndex =this.task.findIndex(task =>task.title === title);
    if(findIndex>=0){
        this.tasks.splice(findIndex,1);
    }
    else{
        console.log(`Task not available`);
    }
   }
};
 taskScheduler.addTask('sunday', 'this Sunday am going to sunday service church', '2024-02-26');
 taskScheduler.addTask('hospital', 'I have an appointement this monday', '2024-02-01');
 taskScheduler.addTask('home', 'i have to help my mom household', '2024-02-27');

taskScheduler.sorttasks();
taskScheduler.updateTask('sunday',{description:'this sunday i have to go to visit my bestfreind',dueDate:'2024-02-03'});
taskScheduler.removeTask('hospital');