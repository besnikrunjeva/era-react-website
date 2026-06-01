import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Box, ArrowRight } from 'lucide-react'

export function ProductCard({ image, name, description, href, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareEnable={true}
        glareMaxOpacity={0.08}
        glareColor="#4ca706"
        glarePosition="all"
        scale={1.02}
        transitionSpeed={600}
        className="rounded-2xl"
      >
        <Link
          to={href}
          className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          {/* Image */}
          <div className="relative h-52 overflow-hidden bg-gray-50">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#4ca706]/0 group-hover:bg-[#4ca706]/10 transition-colors duration-300" />
            {/* 3D badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-[#4ca706] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md shadow-[#4ca706]/30">
              <Box className="size-2.5" />
              3D Preview
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1.5 p-4">
            <h3 className="font-semibold text-gray-900 text-base">{name}</h3>
            <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
            <div className="mt-2 flex items-center gap-1 text-xs font-medium text-[#4ca706]">
              Personalizo në 3D
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  )
}
