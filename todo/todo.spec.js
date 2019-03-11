const { TodoApplication } = require('./todo');
describe("The todo list",()=>{
    describe("Adding items",()=>{
        it("Should add an item to the list",()=>{
            let app = new TodoApplication();
            expect(app.todoItems.length).toBe(0);
            app.addItem({name:"Master TypeScript"});
            expect(app.todoItems.length).toBe(1);
            expect(app.todoItems[0].name).toBe("Master TypeScript");
        })
    })
})