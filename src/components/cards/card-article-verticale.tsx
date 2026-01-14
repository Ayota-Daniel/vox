/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArticleMeta } from "@/lib/types"

export function ArticleCardVertical({
  title,
  description,
  image,
  href,
  category,
  date,
  readingTime,
  author,
  tags
}: ArticleMeta) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full max-w-sm"
    >
      <Link href={href} className="block">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          {/* Image */}
          <div className="relative px-1 h-48 w-full">
            <img
            loading="lazy"
              src={image}
              alt={title}
              className="object-cover h-56 w-96 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content */}
          <CardContent className="space-y-3 p-4">
            {category && (
              <Badge variant="secondary" className="w-fit">
                {category}
              </Badge>
            )}

            <h3 className="text-lg font-semibold leading-snug">
              {title}
            </h3>

            <p className="text-sm text-muted-foreground line-clamp-3">
              {description}
            </p>

            <div className="text-xs text-muted-foreground">
              {author?.name && <span>{author.name}</span>}
              {date && <span> • {date}</span>}
              {readingTime && <span> • {readingTime}</span>}
            </div>
            {tags && (
              <div className="flex gap-1 flex-wrap">
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
