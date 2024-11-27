import React from "react";


export default function Input() {
    const [arr, setArr] = React.useState([]); 

    function handleSubmit(event) {
        event.preventDefault(); 
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("meal");
        if (newIngredient) { 
            setArr((prevArr) => [...prevArr, newIngredient]); 
        }
        event.currentTarget.reset(); 
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    required
                    name="meal" 
                    id="input" 
                    type="text" 
                    aria-label="Ingredient input field" 
                    placeholder="e.g. oregano" 
                />
                <button id="btn" type="submit">+ Add Ingredient</button>
            </form>
            <ul>
                {arr.map((item, index) => (
                    <li key={index}>{item}</li> 
                ))}
            </ul>
        </>
    );
}