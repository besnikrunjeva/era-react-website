import { useRef } from "react"
import { cn } from "@/lib/utils"
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion"

const GridPattern = ({ offsetX, offsetY }) => (
  <svg className="w-full h-full">
    <defs>
      <motion.pattern
        id="grid-pattern"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
        x={offsetX}
        y={offsetY}
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </motion.pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>
)

export function InfiniteGrid({ children, className }) {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const gridOffsetX = useMotionValue(0)
  const gridOffsetY = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.4) % 40)
    gridOffsetY.set((gridOffsetY.get() + 0.4) % 40)
  })

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative w-full min-h-[100dvh] flex flex-col items-center justify-center bg-white",
        className
      )}
    >
      {/* Base dim grid */}
      <div className="absolute inset-0 z-0 text-[#4ca706] opacity-[0.07]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Mouse-reveal bright grid */}
      <motion.div
        className="absolute inset-0 z-0 text-[#4ca706] opacity-50"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* ERA green glow top-right */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-[#4ca706]/20 blur-[120px]" />
        <div className="absolute left-[-5%] bottom-[-10%] h-[30%] w-[30%] rounded-full bg-[#4ca706]/10 blur-[100px]" />
      </div>

      {/* Content — slight upward offset on desktop to compensate for nav height */}
      <div className="relative z-10 w-full pt-16 pb-10 md:py-0 md:-mt-16">
        {children}
      </div>

      {/* Bottom fade to white */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 z-[5] bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}
