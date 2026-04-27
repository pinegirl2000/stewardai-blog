'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

/**
 * BackgroundGradient — Aceternity-inspired animated gradient border.
 * Wrap any card to give it the SNS-friendly glowing edge.
 */
export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true
}: {
  children: ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) {
  const variants = {
    initial: { backgroundPosition: '0 50%' },
    animate: { backgroundPosition: ['0 50%', '100% 50%', '0 50%'] }
  }

  return (
    <div className={cn('relative p-[2px] rounded-3xl group', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? { duration: 6, repeat: Infinity, repeatType: 'reverse' }
            : undefined
        }
        style={{ backgroundSize: '300% 300%' }}
        className="absolute inset-0 rounded-3xl z-0 opacity-60 group-hover:opacity-100 transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#7C3AED,transparent),radial-gradient(circle_farthest-side_at_100%_0,#EC4899,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#06B6D4,transparent),radial-gradient(circle_farthest-side_at_0_0,#F59E0B,#1f2937)]"
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? { duration: 6, repeat: Infinity, repeatType: 'reverse' }
            : undefined
        }
        style={{ backgroundSize: '300% 300%' }}
        className="absolute inset-0 rounded-3xl z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#7C3AED,transparent),radial-gradient(circle_farthest-side_at_100%_0,#EC4899,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#06B6D4,transparent),radial-gradient(circle_farthest-side_at_0_0,#F59E0B,#1f2937)]"
      />
      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  )
}
