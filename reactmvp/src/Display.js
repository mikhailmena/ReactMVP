import React from 'react'


$.get("https://express-api-7mpi.onrender.com/api/memo", (data) => {
    console.log(data)
    // let $newDiv ' $'
    // for (let i =0; i < data.length; i++){
    //     $('#display').prepend(data[i].description)
    // }
     //prepends data from get call to display ---- I need to make a for loop to display all of it
});

function Display() {
    return(
        <div>
            <table>
                <tr>
                    <td>

                    </td>

                </tr>

            </table>
        </div>
    )
}

export default Display;