"use client"

import { ArticleCardHorizontal } from '@/components/cards/card-article-horizontal'
import HorizontalFilter from '@/components/horizontal-filter'

const articleFilters = [
  { id: "tech", label: "Tech" },
  { id: "design", label: "Design" },
  { id: "business", label: "Business" },
]

const TalentPageComponent = () => {

  function handleFilterChange(selected: string[]) {
    console.log("Filtres actifs :", selected)
    // → appel API
    // → filter local
    // → router.push avec searchParams
  }
  return (
    <div className='min-h-[90dvh] overflow-y-auto w-screen xl:w-7xl mx-auto'>
      <div className='flex flex-row items-center justify-center'>
        <HorizontalFilter
          items={articleFilters}
          onChange={handleFilterChange}
        />
      </div>
      <div className='my-5 space-y-3 gap-6'>
        <ArticleCardHorizontal
          title="Comprendre le MVP en 2025"
          description="Comment lancer vite, tester bien et itérer intelligemment."
          image="https://picsum.photos/1280/720"
          href="/articles/mvp-2025"
          category="Business"
          author={{ name: "Jean Dupont" }}
          date="12 janv. 2026"
          readingTime="5 min"
          tags={["startup", "product", "mvp"]}
        />
        <ArticleCardHorizontal
          title="Comprendre le MVP en 2025"
          description="Comment lancer vite, tester bien et itérer intelligemment."
          image="https://picsum.photos/1280/720"
          href="/articles/mvp-2025"
          category="Business"
          author={{ name: "Jean Dupont" }}
          date="12 janv. 2026"
          readingTime="5 min"
          tags={["startup", "product", "mvp"]}
        />
        <ArticleCardHorizontal
          title="Comprendre le MVP en 2025"
          description="Comment lancer vite, tester bien et itérer intelligemment."
          image="https://picsum.photos/1280/720"
          href="/articles/mvp-2025"
          category="Business"
          author={{ name: "Jean Dupont" }}
          date="12 janv. 2026"
          readingTime="5 min"
          tags={["startup", "product", "mvp"]}
        />
      </div>
    </div>
  )
}

export default TalentPageComponent