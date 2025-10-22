import { motion } from "framer-motion";

const GlassTile = () => {
  return(
    <div className="transition m-px h-10 w-10 rounded bg-themeSurfaceVariant opacity-20 backdrop-blur-md hover:scale-110 hover:opacity-30 hover:border hover:border-themeOutline"/>
  )
}

const GradientHeader = () => {
  return(
    <motion.div
      className="transition absolute top-0 left-0 right-0 overflow-x-hidden h-96 z-0 overflow-y-hidden pointer-events-none"
      initial={{ opacity: 0, height: 0 }}
      whileInView= {{ opacity: 1, height: '400px' }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="h-96 absolute -top-40 -left-24 -right-24 dark:opacity-20 opacity-40 pointer-events-none blur-2xl z-0"
        style={{
          background: 'linear-gradient(to bottom, var(--md-sys-color-primary), transparent)'
        }}
        initial={{ rotate: 0 }}
        whileInView= {{ rotate: '-8deg' }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 150 }}
        viewport={{ once: true }}
      />
    </motion.div>
  )
}

export default GradientHeader;