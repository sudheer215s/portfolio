import Link from "next/link";
import { NewsletterSubscribe } from "@/components/sections/newsletter-subscribe";
import { BLOGS } from "@/data/blogs";
import { cn } from "@/lib/utils";
import { formatDate, headingButton, isExternal, newTab, sans, sectionHeading } from "@/components/home/home-shared";

interface HomePost {
  title: string;
  href: string;
  /** YYYY-MM-DD */
  date: string;
}

// The 4 newest published posts, newest first. Build guides are left out: each
// one is a companion to an essay on the same topic, so they would show twice.
function getLatestPosts(limit = 4): HomePost[] {
  return BLOGS.flatMap(({ title, href, date, kind }) => (href && kind !== "guide" ? [{ title, href, date }] : []))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

export function HomeBlogs() {
  const posts = getLatestPosts();
  if (posts.length === 0) return null;

  return (
    <section id="blog" aria-labelledby="blog-heading" className="mt-14">
      {/* The newsletter form opens on its own line under this row (see NewsletterSubscribe). */}
      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-3">
        <h2 id="blog-heading" className={cn(sectionHeading, "mr-auto")}>
          Technical Blogs
        </h2>
        <NewsletterSubscribe
          className={headingButton}
          submitClassName="border-[var(--text)] bg-[var(--text)] text-[var(--on-text)] hover:border-[var(--text-hover)] hover:bg-[var(--text-hover)]"
        />
        <Link
          href="/blogs"
          className={cn(sans, "text-[15px] font-medium text-[var(--link)] hover:text-[var(--link-hover)] hover:underline")}
        >
          All posts →
        </Link>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.href} className="border-t border-[var(--border)]">
            <a
              href={post.href}
              {...(isExternal(post.href) ? newTab : {})}
              className="group flex min-h-12 items-baseline justify-between gap-6 py-3.5 phone:flex-col phone:gap-1"
            >
              <span className="line-clamp-2 text-[var(--link)] group-hover:text-[var(--link-hover)] group-hover:underline">
                {post.title}
              </span>
              <time
                dateTime={post.date}
                className={cn(sans, "shrink-0 whitespace-nowrap text-[15px] text-[var(--muted)] tabular-nums")}
              >
                {formatDate(post.date)}
              </time>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
