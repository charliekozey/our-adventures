import React, { useState } from "react";

function NewForm({ addAdventure }) {

    const [newBlog, setnewBlog] = useState([])

    function handleSumbit(event) {
        event.preventDefault()
        addAdventure(newBlog)
    }

    function onChange(event) {
        setnewBlog({ ...newBlog, [event.target.name]: event.target.value })
    }

    const [sucess,setSucess] = useState("false")

    function clickSumbit(){
        setSucess("true")
    }

    return (
        <section>
        <div className="containerB">
            <h2 className="newBlogTitle">Add your adventure!</h2>
            <form id="formContainer" onSubmit={handleSumbit}>
                    <ul>   
                    <div class="form-group">
                        <input className="formName" type="text" name="name" placeholder="Your name" onChange={onChange} />
                    </div>
                    <div class="form-group">
                        <input className="formLocation" type="text" name="location" placeholder="Where did you go?" onChange={onChange} />
                    </div>
                    <div class="form-group">
                        <input className="formImage" type="text" name="image" placeholder="Image URL" onChange={onChange} />
                    </div>
                    <div class="form-group-description">
                        <input className="formDescription" typeof="text" name="description" placeholder="Tell us about it!" onChange={onChange} />
                    </div>
                    <div class="form-group">
                        <button  onClick={clickSumbit} className="submitButtonDisplay" type="submit">Add adventure</button>
                    </div>
                    </ul>
            </form>
        </div>
        </section>
    
    )
}

export default NewForm;