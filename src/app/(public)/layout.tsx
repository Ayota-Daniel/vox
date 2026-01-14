import Navbar from "@/components/blocks/navbar"
import { ReactNode } from "react"


export default function PublicLayout({ children }: {
  children: ReactNode
}) {
  return (
    <div className="flex flex-col h-full mx-auto">
      <Navbar />
      {children}
    </div>
  )

}