import React, { useState } from 'react'
import {
  ColorPicker as AriaColorPicker,
  DialogTrigger,
  Button,
  Popover,
  Dialog,
  ColorSwatch,
  ColorArea,
  ColorThumb,
  ColorSlider,
  SliderTrack,
  ColorField,
  Input,
  Label,
  parseColor,
} from 'react-aria-components'
import { motion } from 'framer-motion'

const MotionButton = motion(Button)

const ColorPicker = ({ currentColor, setCurrentColor }) => {

  const [open, setOpen] = useState(false)

  const handleChange = (newColor) => {
    setCurrentColor(newColor.toString('hex'))
  }

  return(
    <AriaColorPicker defaultValue={parseColor('#ff0000')} onChange={handleChange}>
      <DialogTrigger isOpen={open} onOpenChange={setOpen}>
        <MotionButton
          className="transition relative z-10 theme-item bg-themeInverseSurface text-themeInverseOnSurface text-2xl active:scale-95"
          animate={{ scale: open ? 1.2 : 1 }}
          whileHover={{ scale: open ? 1.1 : 1.1 }}
          transition={{ type: 'spring', duration: 0.12, bounce: 0.25 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
            animate={{ rotate: open ? -45 : 0 }}
            transition={{ type: 'spring', duration: 0.1, bounce: 0.25 }}
          >
            <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"/>
          </motion.svg>
        </MotionButton>
        <Popover placement="bottom start" offset={12} className="cp-popover z-30">
          <Dialog aria-label="Custom color" className="flex w-52 flex-col gap-3 rounded-2xl border border-themeOutlineVariant bg-themeSurface p-4 shadow-xl outline-none">
            <div className="flex items-center gap-2">
              <ColorSwatch className="h-8 w-8 flex-none rounded-full border border-themeOutlineVariant" />
              <ColorField className="flex flex-1 flex-col">
                <Label className="sr-only">Hex</Label>
                <Input className="w-full rounded-md bg-themeSurface px-2 py-1 text-sm text-themeOnSurface border border-themeOutlineVariant outline-none focus:ring-2 focus:ring-themeOutline" />
              </ColorField>
            </div>
            <ColorArea
              colorSpace="hsb"
              xChannel="saturation"
              yChannel="brightness"
              className="!h-40 !w-full rounded-xl"
            >
              <ColorThumb className="h-4 w-4 rounded-full border-2 border-white shadow ring-1 ring-black/20 cursor-pointer transition hover:scale-105 focus:scale-95" />
            </ColorArea>
            <ColorSlider colorSpace="hsb" channel="hue">
              <SliderTrack
                className="h-4 w-full rounded-full"
                style={({ defaultStyle }) => ({ background: defaultStyle.background })}
              >
                <ColorThumb className="h-5 w-5 rounded-full border-2 border-white shadow ring-1 ring-black/20 transform top-2 relative cursor-pointer transition hover:scale-105 focus:scale-95" />
              </SliderTrack>
            </ColorSlider>
          </Dialog>
        </Popover>
      </DialogTrigger>
    </AriaColorPicker>
  )
}

export default ColorPicker
