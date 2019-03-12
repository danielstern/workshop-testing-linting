const idIncrement = 1;
const itemMinPriority = 0;

class TodoApplication {
    constructor (items = []) {
        this.todoItems = items;
    }

    toggleComplete (id) {
        const item = this.todoItems.find(item => item.id === id);
        item.complete = !item.complete;
    }

    changePriority (id, increment) {
        const item = this.todoItems.find(item => item.id === id);
        item.priority += increment;
        item.priority = Math.max(item.priority, itemMinPriority);
        this.render();
    }

    sortItems () {
        this.todoItems = this.todoItems.sort((a, b) => b.priority - a.priority);
    }

    addItem ({name}) {
        this.todoItems.push({
            complete: false,
            id: this.todoItems.length + idIncrement,
            name,
            priority: 1
        });
    }

    render () {
        document.getElementById("TodoItems").innerHTML = this.todoItems.map(item => `<div class="item-container">
                    <div class="${item.complete ? "complete" : "incomplete"}">${item.name} (${item.priority})</div>
                        <button onclick="completeItemHandler(${item.id})">${item.complete ? "Reopen" : "Complete"}</button>
                        <button onclick="priorityChangeHandler(${item.id},1)">Priority +</button>
                        <button onclick="priorityChangeHandler(${item.id},-1)">Priority -</button>
                    </div>
                 </div>`).join("");
    }
}


const app = new TodoApplication([
    {
        complete: false,
        id: 1,
        name: "Refactor code",
        priority: 1
    },
    {
        complete: true,
        id: 2,
        name: "Configure CSS",
        priority: 2
    },
    {
        complete: false,
        id: 3,
        name: "Fix critical error",
        priority: 6
    }
]);

// eslint-disable-next-line no-unused-vars
function completeItemHandler (id) {
    app.toggleComplete(id);
    app.render();
}

// eslint-disable-next-line no-unused-vars
function priorityChangeHandler (id, increment) {
    app.changePriority(id, increment);
    app.sortItems();
    app.render();
}

// eslint-disable-next-line no-unused-vars
function formSubmitHandler () {
    event.preventDefault();
    const input = document.getElementById("NewItemText");

    app.addItem({name: input.value});
    app.render();
    input.value = "";
}


if (typeof module === "undefined") {
    app.sortItems();
    app.render();
} else {
    module.exports = {
        TodoApplication
    };
}
