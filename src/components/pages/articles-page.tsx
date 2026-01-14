"use client"

import articlesJSON from "@/data/articles.json"
import { ArticleCardSkeleton } from '@/components/article-skeleton'
import { ArticleCardHorizontal } from '@/components/cards/card-article-horizontal'
import HorizontalFilter from '@/components/horizontal-filter'
import { Suspense, useMemo, useState } from "react"
import { Pagination } from '../paginator';
import { ArticleMeta } from '@/lib/types';

const articleFilters = [
  { id: "tech", label: "Tech" },
  { id: "design", label: "Design" },
  { id: "business", label: "Business" },
  { id: "applications", label: "Applications" },
  { id: "infrastructures", label: "Infrastructures" },
  { id: "markets", label: "Markets" },
  { id: "models", label: "Models" },
  { id: "synergies", label: "Synergies" },
  { id: "relationships", label: "Relationships" },
  { id: "functionalities", label: "Functionalities" },
  { id: "deliverables", label: "Deliverables" },
]

const articles = articlesJSON as ArticleMeta[]

const PAGE_SIZE = 6

const ArticlesPageComponent = () => {

  const [page, setPage] = useState(1)
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["all"])

  /* ----------------------------
   1. FILTRAGE
----------------------------- */
  const filteredArticles = useMemo(() => {
    if (selectedCategories.includes("all")) return articles

    return articles.filter((article) =>
      selectedCategories.includes(article.category!)
    )
  }, [selectedCategories])

  /* ----------------------------
     2. PAGINATION
  ----------------------------- */
  const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE)

  const paginatedArticles = filteredArticles.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  )

  /* ----------------------------
     3. HANDLER FILTRES
  ----------------------------- */

  function handleFilterChange(selected: string[]) {
    setSelectedCategories(
      selected.length === 0 ? ["all"] : selected
    )
    setPage(1) // reset pagination
    // paginatedArticles.filter((article) => article.tags.some((item) => selected.includes(item)));
    // → appel API
    // → filter local
    // → router.push avec searchParams
  }
  return (
    <Suspense fallback={<ArticleCardSkeleton />}>
      <div className='min-h-[90dvh] overflow-y-auto w-screen xl:w-7xl mx-auto'>
        <div className='flex flex-row items-center justify-center'>
          <HorizontalFilter
            items={articleFilters}
            onChange={handleFilterChange}
          />
        </div>
        <div className='my-7 space-y-3'>
          {paginatedArticles.map((article, index) => (
            <ArticleCardHorizontal
              key={index}
              {...article}
            />
          ))}
        </div>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </Suspense>
  )
}

export default ArticlesPageComponent