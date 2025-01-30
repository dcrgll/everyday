import { motion } from 'motion/react'

export default function Footer({ daysLeft }: { daysLeft: number }) {
  return (
    <motion.footer
      className="text-foreground-muted mx-auto mt-8 flex w-full items-center justify-between text-xs"
      initial={{ opacity: 0, y: 2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.7, delay: 9, ease: 'easeInOut' }}
    >
      <div className="flex w-full items-center justify-center space-x-2">
        <span>{daysLeft} days left.</span>
      </div>
    </motion.footer>
  )
}
