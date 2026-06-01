import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { cn } from '@/lib/utils'

export function LogoCloud({ className, logos, ...props }) {
  return (
    <div
      {...props}
      className={cn(
        'overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]',
        className
      )}
    >
      <InfiniteSlider gap={72} duration={40} durationOnHover={80}>
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="pointer-events-none h-16 w-auto select-none object-contain md:h-20"
            loading="lazy"
          />
        ))}
      </InfiniteSlider>
    </div>
  )
}
