'use client'
import { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform
} from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * MovingBorder — Aceternity-inspired button with a traveling gradient border.
 * Use as the primary CTA on hero / feature blocks.
 */
export function MovingBorderButton({
  children,
  borderRadius = '1.25rem',
  duration = 3000,
  className,
  containerClassName,
  borderClassName,
  as: Tag = 'button',
  ...props
}: {
  children: React.ReactNode
  borderRadius?: string
  duration?: number
  className?: string
  containerClassName?: string
  borderClassName?: string
  as?: any
  [key: string]: any
}) {
  return (
    <Tag
      className={cn(
        'relative overflow-hidden p-[1px] text-base h-12 w-fit',
        containerClassName
      )}
      style={{ borderRadius }}
      {...props}
    >
      <div className="absolute inset-0 rounded-[inherit]" style={{ borderRadius }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              'h-20 w-20 bg-[radial-gradient(#EC4899_40%,transparent_60%)] opacity-90',
              borderClassName
            )}
          />
        </MovingBorder>
      </div>
      <div
        className={cn(
          'relative bg-background/80 backdrop-blur-xl border border-border/60 flex items-center justify-center w-full h-full px-5 text-sm font-medium antialiased',
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </Tag>
  )
}

function MovingBorder({
  children,
  duration = 2000,
  rx,
  ry
}: {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
}) {
  const pathRef = useRef<SVGRectElement>(null)
  const progress = useMotionValue<number>(0)

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength()
    if (length) {
      const pxPerMs = length / duration
      progress.set((time * pxPerMs) % length)
    }
  })

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x ?? 0)
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y ?? 0)
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div
        style={{ position: 'absolute', top: 0, left: 0, display: 'inline-block', transform }}
      >
        {children}
      </motion.div>
    </>
  )
}
