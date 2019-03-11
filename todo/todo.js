class TodoApplication {
    constructor(items = []){
        this.todoItems = items;
    }
    toggleComplete(id) {
        let item = this.todoItems.find(item=>item.id === id);
        item.complete = !item.complete;
    }
    addItem({name}){
        this.todoItems.push({
            name,
            id:this.todoItems.length + 1,
            complete: false
        })
    }
    render(){
        document.getElementById("TodoItems").innerHTML = this.todoItems
            .map(item=>
                `<div>${item.name} 
                    <button onclick="completeItemHandler(${item.id})">${item.complete ? `Reopen` : `Complete`}</button>
                </div>`
            )
            .join(``)
    };
}

function completeItemHandler(id){
    app.toggleComplete(id);
    app.render()
};

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
    id:1
},{
    name:"Configure CSS",
    complete:true,
    id:2
}]);

if (typeof module !== "undefined") {
    module.exports = {
        TodoApplication
    }
} else {
    app.render();
}