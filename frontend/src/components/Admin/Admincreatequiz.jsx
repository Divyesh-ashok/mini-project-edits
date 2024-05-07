import React from 'react'
import InputBox from '../../parts/InputBox'
//import Button from '../../parts/Button'
const Admincreatequiz = () => {

  return (
    <>
        <div className='bg-white mx-28 my-6 px-4 py-4 rounded-lg border-2  shadow-2xl flex flex-wrap w-192 h-full'>
          <InputBox label={'Question'} placeholder={'Write your question here!'}/>
          <InputBox onChange={(e)=>setFile(e.target.files[0])} label={"UPLOAD HERE"}type="file" accept='image/*'/>
          <div className=' bg-slate-300 mx-28 my-6 px-4 py-4 rounded-lg border-2  shadow-2xl flex flex-wrap w-172 h-full'>
            <InputBox label={'Choices'} placeholder={'Write your choices here!'}/>
            <InputBox onChange={(e)=>setFile(e.target.files[0])} label={"UPLOAD HERE"}type="file" accept='image/*'/>
            <InputBox label={'Choices'} placeholder={'Write your choices here!'}/>
            <InputBox onChange={(e)=>setFile(e.target.files[0])} label={"UPLOAD HERE"}type="file" accept='image/*'/>
            <InputBox label={'Choices'} placeholder={'Write your choices here!'}/>
            <InputBox onChange={(e)=>setFile(e.target.files[0])} label={"UPLOAD HERE"}type="file" accept='image/*'/>
            <InputBox label={'Choices'} placeholder={'Write your choices here!'}/>
            <InputBox onChange={(e)=>setFile(e.target.files[0])} label={"UPLOAD HERE"}type="file" accept='image/*'/>

          </div>
          <div className=' flex justify-center w-full gap-2'>
            <button className='w-96 text-white bg-black hover:bg-slate-800 rounded-md py-1.5'>Add question</button>
            <button className='w-96 text-white bg-black hover:bg-slate-800 rounded-md py-1.5'>Save quiz</button>
          </div>
        </div>
    </>
  )
}

export default Admincreatequiz