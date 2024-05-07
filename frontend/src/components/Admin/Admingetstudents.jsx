import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Button from '../../parts/Button'
import Apppbar from '../../parts/Appbar'
export default function Admingetstudents() {
  const [student,setStudent]=useState([])
  useEffect(() =>{
    console.log("hi")
     const fetchStudents=async()=>{  try {
       console.log("hey")
       const response=await axios.get("http://localhost:7777/student");
       setStudent(response.data)
       console.log(response.data)
       console.log(response);
   } catch (error) {
     console.log(error);
  }}
  fetchStudents(); 
   
   },[])
   async function deletestudent(id){
    const res=await axios.delete("http://localhost:7777/student/"+id);
}
  return (
    <>
    <Apppbar/>
    <div className='py-24'>
    {
      student.map((student)=>(
            <div className="flex py-4 space-x-4 justify-center w-full">
              <div className="grid bg-slate-200 w-96 justify-items-center">
                <h1 className='text-3xl'>{"Name:"+student.firstname+" "+student.lastname}</h1>
                <h1 className='text-3xl'>{"Email:"+student.email}</h1>
                <h1 className='text-3xl'>{"Joindate:"+student.joindate}</h1>
                <h1 className='text-3xl'>course took{": "+student.course}</h1>
                <div className="w-80 py-2">
                  <Button label={"DELETE"}onClick={(e)=>{deletestudent(student._id)}}/>
                </div>
              </div>

            </div>
       
      ))
    }
    </div>
    </>
  )
}
