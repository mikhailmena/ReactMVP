import React, {useState, useEffect} from "react";
import "./Form.css"



function print(){
    console.log("function to submit the entries to the database")
}

function Form(){
    return (
        <div id="formDiv">
            <h2>Job Prospect Form</h2>
            <form>
                <label>
                    Job Title: </label>
                    <input name="jobtitle" type={'text'}/>
               
                <label>
                    Job Description: </label>
                    <input name="jobdescription" type={'text'}/>
               
                <label>
                    Job Point of Contact: </label>
                    <input name="poc" type={'text'}/>
               
                <button onClick={print}
                type="submit">Submit</button>

            </form>
        </div>
    )
}
export default Form;
