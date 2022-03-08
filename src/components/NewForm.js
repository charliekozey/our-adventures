import React, { useState } from "react";

function NewForm({addAdventure}) {

const [newBlog,setnewBlog] = useState([])

    function handleSumbit(event){
        event.preventDefault()
        addAdventure(newBlog)
     }

     function onChange(event){
         setnewBlog({...newBlog,[event.target.name]:event.target.value})
     }


    return (      
        <div className="newBlog"> 
        <h2>Add your adventure!</h2>
        <form id="form" onSubmit={handleSumbit}>
            <input type="text" name="name" placeholder="Your name" onChange={onChange}/>
            <input type="text" name="location" placeholder="Where did you go?" onChange={onChange}/>
            <input type= "text" name="image" placeholder="Image URL" onChange={onChange}/>
            <input typeof="text" name="description" placeholder="Tell us about it!" onChange={onChange}/>
            <button type="submit">Add adventure</button>
        </form>
        </div>
    )
}

export default NewForm;