// const { TodoApplication } = require('./todo-start');
const { TodoApplication } = require('./todo-finish');

describe("The todo list",()=>{
    describe("Adding items",()=>{
        it("Should add an item to the list",()=>{
            let app = new TodoApplication();
            expect(app.todoItems.length).toBe(0);
            app.addItem({name:"Master TypeScript"});
            expect(app.todoItems.length).toBe(1);
            expect(app.todoItems[0].name).toBe("Master TypeScript");
            expect(app.todoItems[0].priority).toBe(1);
        })
    });

    describe("Incrementing and decrementing items",()=>{
        it("Should increment the item's priority",()=>{
            let app = new TodoApplication();
            app.addItem({name:"Master TypeScript"});
            app.changePriority(app.todoItems[0].id,+1);
            expect(app.todoItems[0].priority).toBe(2);
            app.changePriority(app.todoItems[0].id,-1);
            expect(app.todoItems[0].priority).toBe(1);
        });
    });

    describe("Toggling completion",()=>{
        it("Should switch completeness from true to false for the appropriate item",()=>{
            let app = new TodoApplication();
            app.addItem({name:"Master TypeScript"});
            expect(app.todoItems[0].complete).toBe(false);
            app.toggleComplete(app.todoItems[0].id);
            expect(app.todoItems[0].complete).toBe(true);
        })
    })
})