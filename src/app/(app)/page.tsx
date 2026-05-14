import { getBooks } from "@/db/sgbd"
import { BookCard } from "@/components/book-card"

export default async function Page() {
  const books = await getBooks()
  return (
    <section>
      <div className="container my-2 mx-4">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10">
          {books.map((book, id) => (
            <BookCard
              key={id}
              title={book.title}
              description={book.description ?? ""}
              imageUrl={`/books/${book.id}.jpg`}
              href={`/books/${book.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
