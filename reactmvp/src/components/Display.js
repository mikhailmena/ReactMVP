import React, {useEffect, useState, createContext} from 'react';
import Table from 'react-bootstrap/Table';
import "./Display.css"


const itemContext = createContext();

function Display({items}) {
    const [error, setError] = useState(null);
    
    // const [items, setItems] = useState([]);

    
    if (error) {
        return <div>Error: {error.message}</div>;
      } 
      

        return (

           
            <Table id='Table' className='bordered ' >
              <thead >
                <tr >
                  <th>Job ID</th>
                  <th>Job Title</th>
                  <th>Job Description</th>
                  <th>Poc</th>
                </tr>
              </thead>
              <tbody> 

                  {items.map(item => (
                  <tr>
                    <td >{item.id}</td>
                    <td >{item.jobtitle} </td>
                    <td >{item.jobdescription} </td>
                    <td >{item.poc} </td>                 
                  </tr>  ))}

              </tbody>
            </Table>
            
        );
      }
    


export default Display;

// {items.map(item => (
//   <li key={item.id}>
//     {item.name} {item.price}
//   </li>
// ))}