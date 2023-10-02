// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Update = () => {
    
    const loadData = JSON.parse(useLoaderData());
    console.log(loadData)
    const handleUpdate = event => {
        event.preventDefault();
        let fData = new FormData(document.getElementsByTagName('form')[0])

        
        
        axios.post(`http://std-srv-sid.atwebpages.com/update.php?id=${loadData.data?.id}`, fData)
            .then(data => {
                data = data.data
                if (data.success==true) {
                    toast.success(data.message)
                }else{
                    toast.error(data.message)
                }

            })
        }
    console.log(loadData)
    return (
        <div>
             <form onSubmit={handleUpdate}>
<h2 className='text-3xl text-center m-3 text-orange-600'>Please Update Student information:</h2>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
<input name='Roll' defaultValue={loadData.data?.roll} type="text" placeholder="Your Roll" className="input input-bordered w-full " />
<input name='name'  defaultValue={loadData.data?.name} type="text" placeholder="Your Name" className="input input-bordered w-full " />
<input name='clases' defaultValue={loadData.data?.clases} type="text" placeholder="Your Class" className="input input-bordered w-full " />
<input name='section'defaultValue={loadData.data?.section} type="text" placeholder="Your Section" className="input input-bordered w-full " />
<input name='address'defaultValue={loadData.data?.address} type="text" placeholder="Your Address" className="input input-bordered w-full " />
<input name='mobile' defaultValue={loadData.data?.mobile}  type="text" placeholder="Your Mobile Number" className="input input-bordered w-full " />
<input name='email' defaultValue={loadData.data?.email} type="text" placeholder="Your Email" className="input input-bordered w-full " />    
</div>
<input className='btn btn-outline btn-error m-3' type="submit" value="Update Information" />
</form> 
        </div>
    );
            }
export default Update;