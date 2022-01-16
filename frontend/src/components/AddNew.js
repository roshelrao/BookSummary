import React from 'react'
import Button from './Button';

function AddNew(){

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const description = event.target.description.value;
        const image = event.target.image.value;

        if(title === "" || description === "" || image === ""){
            alert("Please fill in all details");
        }else{
            fetch('http://localhost:3500/add', {
                method:'POST',
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify({"title":title, "description":description, "image":image})
            }).then(res => {
                alert("Book added");
                window.location = '/';
            });
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Title: 
                        <input type="text" name="title"></input>
                </label>
                <label>Summary: 
                        <textarea name="description"></textarea>
                </label>
                <label>image: 
                    <input type="text" name="image"></input>
                </label>
            <Button buttonStyle='btn--outline' buttonSize='btn--large'>Register</Button>
            </form>
        </>
    )
}

export default AddNew
