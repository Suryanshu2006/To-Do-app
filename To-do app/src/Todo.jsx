import react, { useState } from 'react'

const Todo = () => {
    const[inputText, setInputText] = useState("");
    const[todos,setTodos]=useState([]);
    function takeInput(event){
        console.log(event.target.value);
        setInputText(event.target.value);
    }

    function addTodos(){
        const tempTodos=[...todos];
        const newData={
            description:inputText,
            status:false
        }
        tempTodos.push(newData);
        setTodos(tempTodos);
        setInputText("");
    }

    function deleteTodos(index){
        const tempTodos= todos.filter((ele,idx)=>{
            return idx!==index;
        });
       setTodos(tempTodos);
    }
    return (
        <div>
                        <div>
            <input type ="text" value={inputText} onChange={takeInput}/>
            <button onClick={addTodos}>Add Todo</button>
            </div>
            <div>
                {
                todos.map((ele,index)=>(
                    <div>
                        <p>Description:{ele.description}</p>
                        <p>status:{ele.status?"Completed":"Pending"}</p>
                        <button onClick={()=>{deleteTodos(index)}}>Delete</button>
                    </div>
                )) 
                }
                </div>

        </div>
    )
    }

export default Todo