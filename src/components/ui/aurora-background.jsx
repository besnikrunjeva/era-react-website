import { cn } from "@/lib/utils";

const darkMask =
  "repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%)";

const lightMask =
  "repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%)";

const auroraColors =
  "repeating-linear-gradient(100deg, #4ca706 10%, #a3e635 15%, #6fcf20 20%, #bef264 25%, #4ca706 30%)";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  variant = "light",
  ...props
}) => {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center",
        isDark ? "bg-[#0f1010] text-white" : "bg-white text-gray-900",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          style={{
            position: "absolute",
            inset: "-10px",
            backgroundImage: `${isDark ? darkMask : lightMask}, ${auroraColors}`,
            backgroundSize: "300%, 200%",
            filter: "blur(10px)",
            opacity: 0.7,
            animation: "aurora 60s linear infinite",
            maskImage: showRadialGradient
              ? "radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%)"
              : undefined,
          }}
        />
      </div>

      {children}
    </div>
  );
};
