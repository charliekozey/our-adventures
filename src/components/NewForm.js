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


    return (
        <div className="newBlog">
            <h2 className="newBlogTitle">Add your adventure!</h2>
            <form id="form" onSubmit={handleSumbit}>
                <fieldset className="formFieldSet">
                    <ul>
                        <input className="formName" type="text" name="name" placeholder="Your name" onChange={onChange} />
                        <input className="formLocation" type="text" name="location" placeholder="Where did you go?" onChange={onChange} />
                        <input className="formImage" type="text" name="image" placeholder="Image URL" onChange={onChange} />
                        <input className="formDescription" typeof="text" name="description" placeholder="Tell us about it!" onChange={onChange} />
                        <button className="submitButtonDisplay" type="submit">Add adventure</button>
                    </ul>
                </fieldset>
            </form>
        </div>
    )
}

export default NewForm;