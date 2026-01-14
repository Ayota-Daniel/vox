type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded border text-sm disabled:opacity-50"
      >
        Précédent
      </button>

      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1
        const isActive = page === currentPage

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded text-sm border transition
              ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"}
            `}
          >
            {page}
          </button>
        )
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded border text-sm disabled:opacity-50"
      >
        Suivant
      </button>
    </div>
  )
}
