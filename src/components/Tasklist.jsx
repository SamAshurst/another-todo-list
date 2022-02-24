import { useState } from "react";
import ToDoTable from "./ToDoTable";
import ToDoForm from "./ToDoForm";




const Tasklist = () =>{
    const [item, setItem] = useState({task: "shop", doBy: "27/02/22"})
    
    return(<div>
        <ToDoTable item={item}/>
        <ToDoForm setItem={setItem}/>
    </div>)
}

export default Tasklist