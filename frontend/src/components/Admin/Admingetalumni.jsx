import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Button from '../../parts/Button'
import Apppbar from '../../parts/Appbar'
export default function Admingetalumni() {
  const [alumni,setAlumni]=useState([])
  useEffect(() =>{
    console.log("hi")
     const fetchAlumnis=async()=>{  try {
       console.log("hey")
       const response=await axios.get("http://localhost:7777/alumni");
       setAlumni(response.data)
       console.log(response.data)
       console.log(response);
   } catch (error) {
     console.log(error);
  }}
  fetchAlumnis(); 
   
   },[])
   async function deletealumni(id){
        const res=await axios.delete("http://localhost:7777/alumni/"+id);
   }
  return (
    <>
      <Apppbar/>
      <div className="flex">
    {
      alumni.map((alumni)=>(
           
             <>
                <h1 className='text-3xl'>{"Name:"+alumni.firstname+" "+alumni.lastname}</h1>
                <h1 className='text-3xl'>{"Email:"+alumni.email}</h1>
                <h1 className='text-3xl'>{"Specialization:"+alumni.specialization}</h1>
               
                <div className="w-80 py-2">
                  <Button label={"DELETE"} onClick={(e)=>{deletealumni(alumni._id)}}/>
                </div>
             
                </>
       
      ))
      
    
    }
      </div>
    </>
  )
}