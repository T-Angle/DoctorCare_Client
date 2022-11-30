import React from 'react'
import JsonData from './data.json'
 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.age}</td>
                    <td>{info.address}</td>
                    <td>{info.gender}</td>
                    <td>{info.ssn}</td>
                </tr>
            )
        }
    )

    return(
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ADDRESS</th>
                    <th>GENDER</th>
                    <th>SSN</th>
                    </tr>
                </thead>
                <tbody>


                    {DisplayData}

                </tbody>
            </table>

        </div>
    )
 }

 export default JsonDataDisplay;
