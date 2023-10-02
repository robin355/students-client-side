import { useEffect,} from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const StudentsInfo = () => {
const [students,setStudent]=useState([]);

useEffect(()=>{
    fetch(`http://std-srv-sid.atwebpages.com/all-studnets.php`)
    .then(res=>res.json())
    .then(data=>setStudent(data))
    
},[])
const handleDelete = (id) => {
  console.log(id)
  fetch(`http://std-srv-sid.atwebpages.com/delete?id=${id}`)
      .then(res => res.json())
      .then(data => {
          if (data.success==true) {
              toast.success(data.message)
              fetch(`http://std-srv-sid.atwebpages.com/all-studnets.php`)
                .then(res=>res.json())
                .then(data=>setStudent(data))
      
          }else{
            toast.error(data.message)
          }
      })
    }
      return (

        <div>
            <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>Si</th>
        <th>Roll</th> 
        <th>Name</th> 
        <th>Class</th> 
        <th>Section</th> 
        <th>Address</th> 
        <th>Mobile No</th> 
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead> 
     <tbody>

    {
      students.map((student, i) => <tr key={student._id}>
          <th>{i + 1}</th>
          <td>{student.roll}</td>
          <td>{student.name}</td>
          <td>{student.clases}</td>
          <td>{student.section}</td>
          <td>{student.address}</td>
          <td>{student.mobile}</td>
          <td>{student.email}</td>
          <button className='btn btn-xs btn-danger' onClick={()=>handleDelete(student.id)}>Delete</button>
          <Link to={`/updateStudent/${student.id}`} > <button className='btn btn-xs btn-danger'>Update</button></Link> 
      </tr>)
  }
    </tbody> 
  </table>
</div>
        
        </div>

    );
}

export default StudentsInfo;