import React from 'react'
import InputBox from '../../parts/InputBox'
import Button from '../../parts/Button'
import Heading from '../../parts/Heading'
export default function Studentscholarship() {
  return (
    <>
      <div className='h-max bg-slate-200'>
    <div className='bg- h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className="rounded-lg text-center bg-white w-108 p-2 h-max px-4 shadow-2xl">
                <Heading label={"APPLICATION FOR SCHOLARSHIP"}/>
                <InputBox label={"FULL NAME"}/>
                <InputBox label={"PHONE NO"}/>
                <InputBox label={"CONTACT DETAILS"}/>
                <InputBox label={"INCOME"}/>
                <InputBox label={"LETTER FOR APPLICATION"}type={"file"}/>
                <InputBox label={"INCOME CERTIFICATE"}type={"file"}/>
                <Button label={"submit"}/>
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}
