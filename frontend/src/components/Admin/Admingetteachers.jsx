import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Button from '../../parts/Button'
import Apppbar from '../../parts/Appbar'
export default function Admingetteachers() {
 
    const [teacher,setTeacher]=useState([])
    useEffect(() =>{
      console.log("hi")
       const fetchteachers=async()=>{  try {
         console.log("hey")
         const response=await axios.get("http://localhost:7777/teacher");
         setTeacher(response.data)
         console.log(response.data)
         console.log(response);
     } catch (error) {
       console.log(error);
    }}
    fetchteachers(); 
     
     },[])
     async function deleteteacher(id){
      const res=await axios.delete("http://localhost:7777/teacher/"+id);
 }
  return (
    <>
      <Apppbar/>
      <div className='py-24'>
    {
      teacher.map((teacher)=>(
            <div className="flex py-4 space-x-4 justify-center">
              <div className="bg-slate-200 w-full inline-flex gap-4">
                <h1 className=' text-xl'>{"Name:"+teacher.firstname+" "+teacher.lastname}</h1>
                <h1 className='text-xl'>{"Email:"+teacher.email}</h1>
                <h1 className='text-xl'>{"Joindate:"+teacher.joindate}</h1>
                <h1 className='text-xl'>{"subject: "+teacher.subject}</h1>
                <div className="w-80 py-2">
                  <Button label={"DELETE"} onClick={(e)=>{deleteteacher(teacher._id)}}/>
                </div>
              </div>

            </div>
       
      ))
    }
    </div>
    </>
  )
}
