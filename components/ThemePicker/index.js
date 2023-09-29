import { motion } from 'framer-motion';
import ColorPicker from '@/components/ColorPicker';

const ThemePicker = ({ currentColor, setCurrentColor, themeColors }) => {

  return(
    <div className="flex items-center justify-center mb-6 fixed top-6 rounded-full bg-themeSurfaceVariant z-10 left-1/2 -translate-x-1/2 py-2 px-1 border dark:border-transparent border-current text-themeBackground">
      {
        themeColors.map((item,i) => (
          <button
            onClick={() => setCurrentColor(item)}
            className={`theme-item`}
            style={{ background: item }}
          >
            {
              currentColor === item && (
                <motion.div
                  className="h-0 w-0 bg-white ring-2 ring-white ring-opacity-50 rounded-full"
                  animate={{ width: '12px', height: '12px' }}
                  transition={{ duration: 0.1, delay: 0.1 }}
                />
              )
            }
          </button>
        ))
      }
      <ColorPicker setCurrentColor={setCurrentColor}/>
    </div>
  )
}

export default ThemePicker