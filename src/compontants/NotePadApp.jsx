import React, { useRef } from 'react'

const NotePadApp = () => {
  const inputArea = useRef(null)
  const outputArea = useRef(null)

  const convertLowerCase = () => {
    let userInput = inputArea.current.value

    outputArea.current.value = userInput.toLowerCase()
  }
  const convertUPPERCASE = () => {
    let userInput = inputArea.current.value
    outputArea.current.value = userInput.toUpperCase()
  }
  const convertCapital = () => {
    let userInput = inputArea.current.value;
    let capitalized = userInput
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    outputArea.current.value = capitalized;
  };

  const fontSizeChange = (event) => {
    let fontSize = event.target.value;
    inputArea.current.style.fontSize = fontSize;
  }

  const colorChange = (event) => {
    let color = event.target.value;
    inputArea.current.style.color = color;
  }

  const BackgroundColorChange = (event) => {
    let background = event.target.value;
    inputArea.current.style.background = background;
  }

  return (
    <>
      <div className='m-2'>
        <h4 className='text-center my-2'>Advance Notepad</h4>
        <textarea name="" id="" className='form-control border border-secondary' rows={10} ref={inputArea}></textarea>
      </div>

      <div className='row m-3'>
        <div className="col-md-2">
          <button className='form-control my-4 btn btn-outline-primary' onClick={convertUPPERCASE}>UPPERCASE</button>
        </div>
        <div className="col-md-2">
          <button className='form-control my-4 btn btn-outline-warning' onClick={convertLowerCase}>lower case</button>
        </div>
        <div className="col-md-2">
          <button className='form-control my-4 btn btn-outline-success' onClick={convertCapital}>Capital Case</button>
        </div>
        <div className="col-md-2">
          <label htmlFor="font-size" className='form-label'>Font Size</label>
          <select className='form-control' id='font-size' onChange={fontSizeChange}>
            <option value=""> Select Font Size</option>
            <option value="12px"> 12</option>
            <option value="14px"> 14</option>
            <option value="16px"> 16</option>
            <option value="20px"> 20</option>
            <option value="22px"> 22</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="font-color" className='form-label'>Color Change</label>
          <input type="color" name="" id="font-color" className='form-control' placeholder='Select color' onChange={colorChange} />
        </div>

        <div className="col-md-2">
          <label htmlFor="bg-color" className='form-label'>Background Color</label>
          <input type="color" name="" id="bg-color" className='form-control' placeholder='Select Background Color' onChange={BackgroundColorChange} />
        </div>
      </div>
      <div className='m-2'>
        <textarea name="" id="" className='form-control border border-secondary' rows={10} ref={outputArea} readOnly></textarea>
      </div>
    </>
  )
}

export default NotePadApp
