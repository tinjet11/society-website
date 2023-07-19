import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
 
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10 bg-gray-300 opacity-30", className)}
      {...props}
    />
  )
}
 
export { Skeleton }