import { motion } from 'motion/react'

export default function DaysLeft({ daysLeft }: { daysLeft: number }) {
  return (
    <motion.div
      className="text-foreground-muted mx-auto mt-8 flex w-full items-center justify-between text-xs"
      initial={{ opacity: 0, y: 2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.7, delay: 9, ease: 'easeInOut' }}
    >
      <p className="w-full text-center">{daysLeft} days left.</p>
    </motion.div>
  )
}
