import React, { useState } from 'react'
import "./App.css"
import Todoinput from './component/Todoinput'
import TodoList from './component/TodoList';
function App() {
  const [listTodo,setListTodo] = useState([]);
  let addList = (inputText)=>{
    if(!inputText){
      alert('please add some task')
    }
    else{
      const index =  {id: new Date().getTime().toString()}
      const task ={
          id:index.id,
          value:inputText
      }
      setListTodo([...listTodo,task]);
    }
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
    console.log(key);
  }
  let keyid ;
  const [Value,setValue] = useState('');
  const editListItem = (key,value) =>{
    console.log("key from list",key,value);
    keyid = key;
    let val = value;
    console.log('val::', val);
    setValue(val, keyid)
    console.log('value ::', Value);
  }
  const editedList = (newValue) =>{
    const editedTaskList = listTodo.map((listitem) =>{
      if(keyid === listitem.id){
        return{...listitem,value:newValue};
      }
      return listitem
    })
    setListTodo(editedTaskList);
    setValue("");
  }
  return (
    <>
    <div className="container">
      <h1 className="text-center">To-DO List</h1>
      <Todoinput addList={addList}  EditName={Value} updateList={editedList}
      className='dis_block'/>
    
      <div className='main'>
      {listTodo.map((listitem,i)=>{
        return(
          <TodoList key={i} index={i}
          item={listitem} 
          deleteItem={deleteListItem}
          editItem={editListItem}
          />
        )
        
      })}
  
      </div>
      
    </div>
    </>
  )
}
export default App