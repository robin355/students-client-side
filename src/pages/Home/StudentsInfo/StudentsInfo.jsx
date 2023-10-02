// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useEffect,} from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// import { Link } from "react-router-dom";
const StudentsInfo = () => {
const [students,setStudent]=useState([]);
// axios.get(`http://std-srv-sid.atwebpages.com/all-studnets.php`).then(function(response){
//     setStudent(response.data);
// })
useEffect(()=>{
    fetch(`http://std-srv-sid.atwebpages.com/all-studnets.php`)
    .then(res=>res.json())
    .then(data=>setStudent(data))
    
},[])
// let i = 0, j = 0;
// for( i = 0;i < students.length; i++){
//     for( j = 0; j < students[i].length; j++){
//         html += <span>{students[i][j]}</span>;
//     }
// }

// console.log(html);
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
              // const remaing = students.filter(studentId => studentId._id !== id)
              // setStudent(remaing)
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