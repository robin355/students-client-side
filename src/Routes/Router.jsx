import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Addstudent from "../pages/Home/AddStudent/Addstudent";
import Update from "../pages/Home/Update/Update";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addStudents',
                element:<Addstudent></Addstudent>
            },
            {
                path:'/updateStudent/:id',
                element:<Update></Update>,
                loader: ({ params }) => fetch(`http://localhost/students-server-side/get-student.php?id=${params?.id}`)
                
            }
        ]
    }

])