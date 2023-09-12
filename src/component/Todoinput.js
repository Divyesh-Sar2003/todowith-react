import React,{useState} from 'react'

function Todoinput(props) {
  // console.log(props.EditName);
  const [inputText,setInputText] = useState('');
  const [editText,setEditText] = useState('');
  const   handelEnterPress = (e)=>{
    if(e.keyCode===13){
      props.addList(inputText)
      setInputText("");
    }
  }
 
  return (
    <>
        <div id="newtask">
            <input type="text" placeholder="Add Tasks" value={inputText} onChange={e =>{
              setInputText(e.target.value);
            }} onKeyUp={handelEnterPress}/>
            <button id="push" onClick={()=>
            {
              props.addList(inputText)
              setInputText("")
            }}>Add</button>
        </div>
        <div id="edittask">
        <input type="text" placeholder="update tasks"
        value={editText||props.EditName}
        onChange={e =>{ setEditText(e.target.value);}} 
        onKeyUp={handelEnterPress}/>
        <button onClick={() =>{
          props.updateList(editText)
          setEditText('');
        }}>Update</button>
    </div>
        
    </>

  )
}

export default Todoinput