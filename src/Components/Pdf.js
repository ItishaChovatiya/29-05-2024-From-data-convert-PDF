import React from 'react'
import { usePDF } from 'react-to-pdf';
export default function Pdf(props) {
    const {abc,name,body} =props.itisha

    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  return (
    <div className='mx-auto d-block'  >
        <div ref={targetRef}>
        <img src={abc} className="w-50 mx-auto " alt='scs'></img>
        <h2>{name}</h2>
        <p>{body}</p>
        </div>
     <div>
     <button  className='btn btn-success'  onClick={() => toPDF()}>Download PDF</button>
    </div>
  </div>
  )
}
