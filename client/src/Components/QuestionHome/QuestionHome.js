import React from 'react'
import QuestionDoctor from '../../Help/Images/QuestionDoctor.jpg'
import AccorditionFlobite from './AccorditionFlobite'
const QuestionHome = () => {
  return (
    <>
    <div className='container my-10'>
     <div className='flex'>
        <div id='sideImageDev'>
            <img 
              loading='lazy'
              width='900px'
              src={QuestionDoctor}
             />
        </div>
        <div id='questionSide' className=' w-[800px]  mt-16'>
          <AccorditionFlobite />
        </div>        
     </div>
    </div>
    </>
  )
}

export default QuestionHome