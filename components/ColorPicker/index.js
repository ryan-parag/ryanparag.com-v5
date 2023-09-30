import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

const ColorPicker = ({ setCurrentColor }) => {

  const [open, setOpen] = useState(false)
  const [pickerColor, setPickerColor] = useState('#ff0000')

  const handleChange = (newColor) => {
    let colorVal = newColor
    setPickerColor(colorVal)
    setCurrentColor(colorVal)
  }

  return(
    <>
      <button
        className={`relative z-10 theme-item bg-themeInverseSurface text-themeInverseOnSurface text-2xl ${open && 'scale-150 hover:scale-125'}`}
        onClick={() => setOpen(!open)}
      >
        <svg className={`transition ${open && '-rotate-45'}`} width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 5.75V18.25"></path>
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 12L5.75 12"></path>
        </svg>

      </button>
      {
        open && (
          <div
            className="fixed z-1 top-0 bottom-0 left-0 right-0"
          >
            <div className="relative z-10 top-10 left-3">
              <ChromePicker
                color={pickerColor}
                onChange={
                  (color) => {
                    handleChange(color.hex)
                  }
                }
              />
            </div>
          </div>
        )
      }
    </>
  )
}

export default ColorPicker