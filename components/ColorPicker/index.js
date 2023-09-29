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
        <svg className={`transition ${open && '-rotate-45'}`} viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" class="css-i6dzq1"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
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