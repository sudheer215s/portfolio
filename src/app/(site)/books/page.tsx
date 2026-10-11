import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books",
  description: "Books that have shaped my thinking on philosophy, business, and life.",
  alternates: { canonical: "/books" },
};

interface Book {
  title: string;
  author: string;
}

interface Section {
  id: string;
  title: string;
  intro?: string;
  books: Book[];
  /** The one line that lists several authors' collected works together. */
  extraLine?: React.ReactNode;
}

// Same sections as the template. Replace each placeholder when the list is ready.
const SECTIONS: Section[] = [
  {
    id: "influences",
    title: "Influences",
    intro: "Books that changed how I see the world:",
    books: [
      { title: "Placeholder title 01", author: "Author" },
      { title: "Placeholder title 02", author: "Author" },
      { title: "Placeholder title 03", author: "Author" },
    ],
  },
  {
    id: "philosophy",
    title: "Philosophy",
    intro: "Reading philosophy now that I have some life experience to bring to it:",
    books: [
      { title: "Placeholder title 04", author: "Author" },
      { title: "Placeholder title 05", author: "Author" },
      { title: "Placeholder title 06", author: "Author" },
    ],
  },
  {
    id: "fiction-poetry",
    title: "Fiction & Poetry",
    books: [
      { title: "Placeholder title 07", author: "Author" },
      { title: "Placeholder title 08", author: "Author" },
      { title: "Placeholder title 09", author: "Author" },
    ],
    extraLine: (
      <>
        Works of <strong className="font-medium text-foreground">Author</strong>,{" "}
        <strong className="font-medium text-foreground">Author</strong>, and{" "}
        <strong className="font-medium text-foreground">Author</strong>
      </>
    ),
  },
  {
    id: "eastern-aesthetics",
    title: "Eastern Aesthetics",
    books: [
      { title: "Placeholder title 10", author: "Author" },
      { title: "Placeholder title 11", author: "Author" },
      { title: "Placeholder title 12", author: "Author" },
    ],
  },
  {
    id: "business",
    title: "Business",
    books: [
      { title: "Placeholder title 13", author: "Author" },
      { title: "Placeholder title 14", author: "Author" },
      { title: "Placeholder title 15", author: "Author" },
    ],
  },
  {
    id: "to-read",
    title: "To Read",
    intro: "Recommendations I haven't gotten to yet:",
    books: [
      { title: "Placeholder title 16", author: "Author" },
      { title: "Placeholder title 17", author: "Author" },
      { title: "Placeholder title 18", author: "Author" },
    ],
  },
];

export default function BooksPage() {
  return (
    <div className="max-w-none py-10">
      <h1 id="books" className="text-[20px] font-normal leading-normal text-foreground/70 mb-8">
        Books
      </h1>

      {SECTIONS.map((section, i) => (
        <section key={section.id} className={i > 0 ? "mt-10" : undefined}>
          <h2
            id={section.id}
            className="text-[20px] font-normal leading-normal text-foreground mb-3"
          >
            {section.title}
          </h2>
          {section.intro && (
            <p className="text-foreground/65 leading-relaxed mb-3">{section.intro}</p>
          )}
          <ul className="list-disc ml-5 space-y-1.5 text-foreground/80 leading-relaxed">
            {section.books.map((book) => (
              <li key={book.title}>
                <strong className="font-medium text-foreground">{book.title}</strong> -{" "}
                {book.author}
              </li>
            ))}
            {section.extraLine && <li>{section.extraLine}</li>}
          </ul>
          {i < SECTIONS.length - 1 && <hr className="border-border mt-10" />}
        </section>
      ))}

      <div className="mt-16 pt-6 border-t border-border font-mono text-sm">
        <a href="#books" className="text-primary hover:underline">
          ↑ Back to top
        </a>
        <div className="mt-4">
          <Link href="/user-manual" className="text-primary hover:underline">
            ← Previous: User Manual
          </Link>
        </div>
      </div>
    </div>
  );
}
