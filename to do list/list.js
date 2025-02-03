let input = prompt("what would you like to do ?");
const todos = ['collect chicken eggs','clean litter box'];

while(input !== 'quit'&& input !== 'q'){
    if(input === "list"){
        console.log("***********")
        for(let i =0 ; i<todos.length ; i++){
            console.log(i + ":" + todos[i]);
        }
       console.log("***********")

    }else if (input === "new"){
        const newTodo = prompt("okay wht is the new todo ?");
        todos.push(newTodo);
        console.log(  "added to the list ")
    } else if (input === "delete"){
        const index = parseInt(prompt("oh okay enter the index to delete:"));
        if(Number.isNaN(index)){
        const deleted =todos.splice(index,1);
        console.log(deleted);
        }else{
            console.log("unknown.index")
        }

    }
    input = prompt("what would you like to do ?")
}
console.log("ok quit the app")