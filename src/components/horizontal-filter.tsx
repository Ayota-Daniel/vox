"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type FilterItem = {
  id: string
  label: string
}

type HorizontalFilterProps = {
  items: FilterItem[]
  defaultSelected?: string[]
  multiple?: boolean
  onChange?: (selected: string[]) => void
  className?: string
}

export default function HorizontalFilter({
  items,
  defaultSelected = [],
  multiple = true,
  onChange,
  className,
}: HorizontalFilterProps) {
  const [selected, setSelected] = useState<string[]>(defaultSelected)

  function toggleItem(id: string) {
    let newSelected: string[] = []

    if (multiple) {
      newSelected = selected.includes(id)
        ? selected.filter((item) => item !== id)
        : [...selected, id]
    } else {
      newSelected = selected.includes(id) ? [] : [id]
    }

    setSelected(newSelected)
    onChange?.(newSelected)
  }

  return (
    <div
      className={cn(
        "flex gap-2 overflow-x-auto py-2 scrollbar-hide",
        className
      )}
    >
      {items.map((item) => {
        const isActive = selected.includes(item.id)

        return (
          <Badge
            key={item.id}
            onClick={() => toggleItem(item.id)}
            variant={isActive ? "default" : "outline"}
            className={cn(
              "cursor-pointer whitespace-nowrap transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            )}
          >
            {item.label}
          </Badge>
        )
      })}
    </div>
  )
}
