"use client"

import { ArticleCardVertical } from '@/components/cards/card-article-verticale'
import HorizontalFilter from '@/components/horizontal-filter'

const articleFilters = [
  { id: "tech", label: "Tech" },
  { id: "design", label: "Design" },
  { id: "business", label: "Business" },
]

const SchoolsPageComponent = () => {

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
      <div className='my-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6'>
          <ArticleCardVertical
            title="Campus Life & Facilities
Live, Learn, and Thrive on a Smart Campus"
            description="Welcome to E-JUST — where academic excellence meets a vibrant student experience. Designed with both students and families in mind, our modern smart campus offers safe housing, international-standard learning facilities, wellness services, and dynamic social spaces that foster personal growth, creativity, and lifelong friendships."
            image="https://www.ejust.edu.eg/assets/img/f7.jpg"
            href="/articles/mvp-2025"
            category="school"
            author={{ name: "Jean Dupont" }}
            date="12 janv. 2026"
            readingTime="5 min"
            tags={["school", "education", "campus"]}
          />
          <ArticleCardVertical
            title="Campus Life & Facilities
Live, Learn, and Thrive on a Smart Campus"
            description="Welcome to E-JUST — where academic excellence meets a vibrant student experience. Designed with both students and families in mind, our modern smart campus offers safe housing, international-standard learning facilities, wellness services, and dynamic social spaces that foster personal growth, creativity, and lifelong friendships."
            image="https://www.ejust.edu.eg/assets/img/f7.jpg"
            href="/articles/mvp-2025"
            category="school"
            author={{ name: "Jean Dupont" }}
            date="12 janv. 2026"
            readingTime="5 min"
            tags={["school", "education", "campus"]}
          />
          <ArticleCardVertical
            title="Campus Life & Facilities
Live, Learn, and Thrive on a Smart Campus"
            description="Welcome to E-JUST — where academic excellence meets a vibrant student experience. Designed with both students and families in mind, our modern smart campus offers safe housing, international-standard learning facilities, wellness services, and dynamic social spaces that foster personal growth, creativity, and lifelong friendships."
            image="https://www.ejust.edu.eg/assets/img/f7.jpg"
            href="/articles/mvp-2025"
            category="school"
            author={{ name: "Jean Dupont" }}
            date="12 janv. 2026"
            readingTime="5 min"
            tags={["school", "education", "campus"]}
          />
          <ArticleCardVertical
            title="Campus Life & Facilities
Live, Learn, and Thrive on a Smart Campus"
            description="Welcome to E-JUST — where academic excellence meets a vibrant student experience. Designed with both students and families in mind, our modern smart campus offers safe housing, international-standard learning facilities, wellness services, and dynamic social spaces that foster personal growth, creativity, and lifelong friendships."
            image="https://www.ejust.edu.eg/assets/img/f7.jpg"
            href="/articles/mvp-2025"
            category="school"
            author={{ name: "Jean Dupont" }}
            date="12 janv. 2026"
            readingTime="5 min"
            tags={["school", "education", "campus"]}
          />
        </div>
      </div>
    </div>
  )
}

export default SchoolsPageComponent