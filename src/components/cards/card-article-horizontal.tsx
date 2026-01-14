/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArticleMeta } from "@/lib/types"

export function ArticleCardHorizontal({
  title,
  description,
  image,
  href,
  category,
  date,
  readingTime,
  author,
  tags,
}: ArticleMeta) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={href} className="block">
        <Card className="overflow-hidden hover:shadow-md transition-shadow">
          <CardContent className="flex gap-4 px-4  py-2">
            {/* Image */}
            <div className="relative h-60 w-120 shrink-0 overflow-hidden">
              <img
                loading="lazy"
                src={image}
                alt={title}
                className="object-cover min-w-32 min-h-32 max-h-60 max-w-120  aspect-video transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between gap-2">
              <div className="space-y-1">
                {category && <Badge variant="secondary">{category}</Badge>}

                <h3 className="text-base font-semibold leading-tight my-2">
                  {title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {description}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  {author && <span>✍️ {author.name}</span>}
                  {date && <span>{date}</span>}
                  {readingTime && <span>• {readingTime}</span>}

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
              </div>


            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
