// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import { toast } from "react-toastify";

const Update = () => {
    const loadData = JSON.parse(useLoaderData());
    // console.log(loadData)
    // const [review, setReview] = useState(loadData);
    // const handleUpdate = event => {
    //     event.preventDefault();
    //     fetch(`http://localhost/students-server-side/get-student.php?id=${loadData?.id}`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(review)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 toast.success('Review Updated')
    //             }

    //         })
    //     }
        

    // const handleInputChange = event => {
    //     const field = event.target.name;
    //     const value = event.target.value;
    //     const newReview = { ...review }
    //     newReview[field] = value;
    //     setReview(newReview);
    // }
    console.log(loadData)
    return (
        <div>
             <form>
<h2 className='text-3xl text-center m-3 text-orange-600'>Please Update Student information:</h2>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
<input name='Roll'  defaultValue={loadData.data?.roll} type="text" placeholder="Your Roll" className="input input-bordered w-full " />
<input name='name' defaultValue={loadData.data?.name} type="text" placeholder="Your Name" className="input input-bordered w-full " />
<input name='clases' defaultValue={loadData.data?.clases} type="text" placeholder="Your Class" className="input input-bordered w-full " />
<input name='section' defaultValue={loadData.data?.section} type="text" placeholder="Your Section" className="input input-bordered w-full " />
<input name='address' defaultValue={loadData.data?.address} type="text" placeholder="Your Address" className="input input-bordered w-full " />
<input name='mobile' defaultValue={loadData.data?.mobile}  type="text" placeholder="Your Mobile Number" className="input input-bordered w-full " />
<input name='email' defaultValue={loadData.data?.email} type="text" placeholder="Your Email" className="input input-bordered w-full " />    
</div>
<input className='btn btn-outline btn-error m-3' type="submit" value="Update Information" />
</form> 
        </div>
    );
            }
export default Update;