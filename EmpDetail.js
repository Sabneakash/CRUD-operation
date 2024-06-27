import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const EmpDetail = () => {
    const {empid}=useParams();

    const[empdata, empdatachange] = useState({})

    useEffect(()=>{
        fetch("http://localhost:8001/employees/"+empid).then((res)=>{
            return res.json();
        }).then((resp)=>{
           empdatachange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })

    },[]);
    return(
        <div className="card" style={{"textAlign":"left"}}>
            <div className="card-title">
                <h2>Employee Detail</h2>
            </div>
            <div className="card-body"></div>
            { empdata &&
                <div>
              
                  <h1>The Employee name is : <b>{empdata.name}</b> ({empdata.id})</h1>
                  <h3>Contact Details</h3>
                  <h5>Email is : {empdata.email}</h5>
                  <h5>Phone is : {empdata.phone}</h5>
                  <Link className="btn btn-danger" to="/">Back to Listing</Link>


                </div>
            }
        </div>
    )
}

export default EmpDetail;