import e from "cors";
import React, { useState, useEffect, useContext } from "react";
import Display from "./Display";
import "./Form.css"
import LinkedIn from "./LinkedIn";



const CreateJob = (props) => {
    const [jobid, setjobid] = useState("")
    const [jobtitle, settitle] = useState("")
    const [jobdescription, setdescription] = useState("")
    const [poc, setpoc] = useState("")
    const [message, setMessage] = useState("")
    const [submitted, setsubmitted] = useState(0)
    const [items, setItems] = useState([]);


    
    
    function deleterow() {
        // Simple DELETE request with fetch
        fetch(`http://localhost:8080/delete${jobid}`, { method: 'DELETE' })
            .then(() => this.setStatus({ status: 'Delete successful' }));
    }
    

    useEffect(() => {
        fetch("http://localhost:8080/api")
        .then(res => res.json())
        .then(
            (result) => {
               setItems(result);
            }
        )

    },[submitted]);


    let jsubmit = async e => {
        setsubmitted(submitted + 1)
        e.preventDefault();
        console.log(submitted)
        
        try{
        let res = fetch('http://localhost:8080/push', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            jobtitle: jobtitle,
            jobdescription: jobdescription,
            poc: poc
         }),
        });

        if (res.status === 200) {
            setjobid("");
            settitle("");
            setdescription("");
            setpoc("");
        }else {
            setMessage("Some error occured");
        }
        props.updatePage();
      } catch (err) {
        console.log(err);
      }
      
    };
         return(
            
            <div id="formDiv">
                <Display items={items}/>
            <h2>Job Prospect Form</h2>
            <form onSubmit={jsubmit}>
                    <input  type={'integer'}  value={jobid}
                     name="job1[jobtitle]" placeholder="job id"
                     onChange={(e) => setjobid(e.target.value)}/>

                    <input  type={'text'}  value={jobtitle}
                     name="job1[jobtitle]" placeholder="job title"
                     onChange={(e) => settitle(e.target.value)}/>
                     
                    <input  type={'text'} value={jobdescription}
                     name="job1[description]" placeholder="job description"
                     onChange={(e) => setdescription(e.target.value)}/>
                                        
                     <input  type={'text'} value={poc}
                     name="job1[description]" placeholder="Point of Contact"
                     onChange={(e) => setpoc(e.target.value)}/>

                    

                    
               
                <button  type="submit" onClick={jsubmit}>Submit</button>
                <button onClick={deleterow} type="delete">Delete</button>

            </form>
            <LinkedIn/>
    
        </div>
        )
        
    }
    


export default CreateJob;

