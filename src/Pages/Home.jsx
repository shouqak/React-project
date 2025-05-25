import React, { useState } from 'react'

function Home() {
  const[firstNum,setFirstNum]=useState(7)
  const[secondNum,setSecondNum]=useState(9)

  const [result, setResult] = useState("");

  const Sum = () => {
    setResult(firstNum + secondNum);
  }
   const Sub = () => {
    setResult(firstNum - secondNum);
  }

     const Multiply = () => {
    setResult(firstNum * secondNum);
  }

     const Mood = () => {
    setResult(firstNum % secondNum);
  }

  return (
    <div className='mt-6 mx-auto w-70 h-96'>
      <div className="flex flex-col justify-center items-center gap-4 mt-9 bg-blue-100 relative rounded-2xl py-40 h-56">
       <p className='text-center font-light'> there is tow number click on any button to see Result</p>
        <div className='flex  gap-7 h'>
        <p className=' p-3 font-bold '>{firstNum}</p>
       <p className=' p-3  font-bold '>{secondNum}</p>
     
       </div>
       
         <div className="mt-2">
           <p className="text-lg font-bold">Result: {result}</p>
         </div>
       
         <div className='flex justify-center items-center gap-3'>
        <button className='inline-flex items-center px-3 py-2 bg-blue-600 rounded-full w-10 h-10 ' onClick={Sum}>+</button>
        <button className='inline-flex items-center px-3 py-2 bg-blue-600 rounded-full w-10 h-10'onClick={Sub}>-</button>
        <button className='inline-flex items-center px-3 py-2 bg-blue-600 rounded-full w-10 h-10' onClick={Multiply}>*</button>
        <button className='inline-flex items-center px-3 py-2 bg-blue-600 rounded-full w-10 h-10' onClick={Mood}>%</button>
       </div>
      </div>
    </div>

  )
}

export default Home