'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * TextGenerateEffect — Aceternity-inspired typing-like reveal of words.
 * Used for hero headlines.
 */
export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5
}: {
  words: string
  className?: string
  filter?: boolean
  duration?: number
}) {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(' ')

  useEffect(() => {
    animate(
      'span',
      { opacity: 1, filter: filter ? 'blur(0px)' : 'none' },
      { duration, delay: stagger(0.18) }
    )
  }, [animate, duration, filter])

  return (
    <motion.div ref={scope} className={cn('inline', className)}>
      {wordsArray.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="opacity-0 inline-block mr-2"
          style={{ filter: filter ? 'blur(8px)' : 'none' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
