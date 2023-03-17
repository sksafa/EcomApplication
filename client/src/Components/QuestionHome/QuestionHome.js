import React from 'react'
import QuestionDoctor from '../../Help/Images/QuestionDoctor.jpg'
import AccorditionFlobite from './AccorditionFlobite'
const QuestionHome = () => {
  return (
    <>
    <div className='container'>
     <div classname>
        <div id='sideImageDev'>
            <img 

              src={QuestionDoctor}
             />
        </div>
        <div id='questionSide'>
          <h1>hello this is question part</h1>
          <AccorditionFlobite />
        </div>        
     </div>
    </div>
    </>
  )
}

export default QuestionHome