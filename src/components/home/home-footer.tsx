import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CopyEmailButton } from "@/components/sections/copy-email-button";
import { home, type SocialType } from "@/data/home";
import { cn } from "@/lib/utils";
import { container, isExternal, newTab, outlineButton, primaryButton, sans } from "@/components/home/home-shared";

const SOCIAL_ICONS: Record<SocialType, React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" }>> = {
  email: Mail,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  github: FaGithub,
};

export function HomeFooter() {
  return (
    <footer className="mt-14 border-t border-[var(--border)]">
      <div className={cn(container, "grid grid-cols-[2fr_3fr] items-start gap-8 pt-10 pb-14 phone:grid-cols-1")}>
        <div>
          <h2 className={cn(sans, "mb-3 text-[15px] font-semibold text-[var(--muted)]")}>Socials</h2>
          <ul className="space-y-2 text-[16px]">
            {home.socials.map(({ type, label, href }) => {
              const Icon = SOCIAL_ICONS[type];
              return (
                <li key={type} className="flex items-center gap-2">
                  <Icon className="size-4 shrink-0 text-[var(--muted)]" aria-hidden="true" />
                  {href ? (
                    <a
                      href={href}
                      {...(isExternal(href) ? newTab : {})}
                      className="break-all text-[var(--link)] hover:text-[var(--link-hover)] hover:underline"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-[var(--muted)]">{label}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className={cn(sans, "text-[15px] font-semibold text-[var(--muted)]")}>Directly DM</h2>
          <p className={cn(sans, "mb-3 text-[15px] text-[var(--muted)]")}>Fastest way to reach me.</p>
          <div className="flex gap-3 tiny:flex-col">
            <CopyEmailButton email={home.email} className={primaryButton} />
            <a href={home.linkedinDm} {...newTab} className={outlineButton}>
              <FaLinkedin className="size-4" aria-hidden="true" />
              LinkedIn
            </a>
            {home.xDm ? (
              <a href={home.xDm} {...newTab} className={outlineButton}>
                <FaXTwitter className="size-4" aria-hidden="true" />X
              </a>
            ) : (
              <span className={cn(outlineButton, "cursor-default opacity-50")}>
                <FaXTwitter className="size-4" aria-hidden="true" />X
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
