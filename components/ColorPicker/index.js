import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

const ColorPicker = ({ currentColor, setCurrentColor }) => {

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

        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className={`transition ${open && '-rotate-45'}`}><path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"/></svg>

      </button>
      {
        open && (
          <div className="fixed z-1 top-0 bottom-0">
            <div className="relative z-10 top-10 left-20">
              <ChromePicker
                color={pickerColor}
                onChange={
                  (color) => {
                    handleChange(color.hex)
                  }
                }
              />
            </div>
            <button
              className="fixed z-1 top-0 bottom-0 left-0 right-0 bg-transparent"
              role="button"
              onClick={() => setOpen(false)}
            >
            </button>
          </div>
        )
      }
    </>
  )
}

export default ColorPicker