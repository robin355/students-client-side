import axios from "axios";
import { toast } from "react-toastify";

const Addstudent = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const Roll = form.Roll.value;
        const clases = form.clases.value;
        const section = form.section.value;
        const address = form.address.value;
        const email = form.email.value;
        const mobile = form.mobile.value;

        const student = {
            name: name,
            Roll:Roll,
            clases:clases,
            section:section,
            address:address,
            email:email,
            mobile:mobile


        }

        const data = new FormData();
        data.append('student', JSON.stringify(student));
        axios.post(`http://std-srv-sid.atwebpages.com/`,data)
        // .then(res=>res.json())
        .then(data=>{
            if(data.data.success==true){
                toast.success(data.data.message)
            }else{
                toast.error(data.data.message)
            }
        })


console.log(student)
        // fetch('https://student-info-server-2er3iek2e-robin355.vercel.app/addstudent', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(student),
        // })

        // .then(res => res.json())
        //     .then(data => {
        //         if (data.acknowledged > 0) {
        //             // toast.success('added successFully')
        //             form.reset()
        //         }
        //     })
        //     .catch(error => console.log(error))
    }
    return (
        <div>
       <form onSubmit={handleSubmit}  >
<h2 className='text-3xl text-center m-3 text-orange-600'>Please Input Student information:</h2>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
<input name='Roll' type="text" placeholder="Your Roll" className="input input-bordered w-full " />
<input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full " />
<input name='clases' type="text" placeholder="Your Class" className="input input-bordered w-full " />
<input name='section' type="text" placeholder="Your Section" className="input input-bordered w-full " />
<input name='address' type="text" placeholder="Your Address" className="input input-bordered w-full " />
<input name='mobile' type="text" placeholder="Your Mobile Number" className="input input-bordered w-full " />
<input name='email' type="text" placeholder="Your Email" className="input input-bordered w-full " />    
</div>
<input className='btn btn-outline btn-error m-3' type="submit" value="Added Student" />
</form>
        </div>
    );
};

export default Addstudent;