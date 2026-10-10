import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { home } from "@/data/home";
import { PERSON } from "@/lib/site";
import { cn } from "@/lib/utils";
import { sans } from "@/components/home/home-shared";

const photoBox =
  "float-right mt-1 mb-4 ml-8 size-[240px] rounded-full [shape-outside:circle(50%)] " +
  "phone:float-none phone:mx-auto phone:mt-0 phone:mb-6 phone:size-[160px] phone:[shape-outside:none]";

const initials = PERSON.name
  .split(" ")
  .map((part) => part[0])
  .slice(0, 2)
  .join("");

export function HomePortrait() {
  // Until the photo is added under /public, show a neutral placeholder circle.
  const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", home.photo));
  if (!hasPhoto) {
    return (
      <div
        role="img"
        aria-label={`Portrait of ${PERSON.name} (placeholder)`}
        className={cn(photoBox, sans, "flex items-center justify-center bg-[var(--placeholder-bg)] text-[40px] font-medium text-[var(--muted)]")}
      >
        {initials}
      </div>
    );
  }
  return (
    <Image
      src={home.photo}
      alt={`Portrait of ${PERSON.name}`}
      width={480}
      height={480}
      priority
      sizes="(max-width: 640px) 160px, 240px"
      className={cn(photoBox, "block object-cover")}
    />
  );
}
