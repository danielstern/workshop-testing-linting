// BUGS
// - Sorting does not work properly
// - Changing priority causes the priority to change in unexpected ways
// - Toggle complete does not work
// - The priority for new items is not set properly


class TodoApplication {
    constructor(items = []){
        this.todoItems = items;
    }
    toggleComplete(id) {
        let item = this.todoItems.find(item=>item.ID === id);
        item.complete = !item.complete;
    }
    changePriority(id,increment){
        let item = this.todoItems.find(item=>item.id === id);
        item.priority -= increment;
        item.priority = Math.max(item.priority,0);
    }
    sortItems(){
        console.log("Sort!");
        this.todoItems = this.todoItems.sort((a,b)=>a.priority - b.priority);
    }
    addItem({name}){
        this.todoItems.push({
            name,
            id:this.todoItems.length + 1,
            complete: false,
            piority:1
        })
    }
    render(){
        document.getElementById("TodoItems").innerHTML = this.todoItems
            .map(item=>

                `<div class="item-container">
                    <div class="${item.complete ? 'complete' : 'incomplete'}">${item.name} (${item.priority})</div>
                        <button onclick="completeItemHandler(${item.id})">${item.complete ? `Reopen` : `Complete`}</button>
                        <button onclick="priorityChangeHandler(${item.id},-1)">Priority -</button>
                        <button onclick="priorityChangeHandler(${item.id},1)">Priority +</button>
                    </div>
                 </div>`
            )
            .join(``)
    };
}

function completeItemHandler(id){
    app.toggleComplete(id);
    app.render()
};

function priorityChangeHandler(id, increment){
    app.changePriority(id,increment);
    app.sortItems();
    app.render();
}

function formSubmitHandler(){
    event.preventDefault();
    const input = document.getElementById("NewItemText");

    app.addItem({name:input.value});
    app.render();
    input.value = ``;

}

const app = new TodoApplication([{
    name:"Refactor code",
    complete:false,
    id:1,
    priority:1
},{
    name:"Configure CSS",
    complete:true,
    id:2,
    priority:2
},{
    name:"Fix critical error",
    complete:false,
    id:3,
    priority:6
}]);

if (typeof module !== "undefined") {
    module.exports = {
        TodoApplication
    }
} else {
    app.sortItems();
    app.render();
}