import React, { useState } from 'react'

export default function Form() {
  const [fname,setfname]=useState("")
  const [lname,setlname]=useState("")
  const [shide,setshide]=useState(false)


  const hf=(e)=>{
    setfname(e.target.value)
  }
  const hl=(e)=>{
    setlname(e.target.value)
  }
 
  const click=(e)=>{
    e.preventDefault()
   setshide(true)
  }
  return (

<>
<form>
<label>username</label>
<input  type='name' value={fname} onChange={hf} /><br/>
<label>password</label>
<input  type='password' value={lname} onChange={hl}/>

{shide &&
  <>
<p>your first name{fname}</p>
<p>your last name is{lname}</p>
</>
}
<br/>
<button onClick={click}>submit</button>
</form>
</>


  )
}
