import { Logo } from "./logo";
import { UserNav } from "./user-nav";
import type { Moderator } from "@/lib/types";

export function Header({ moderator }: { moderator: Moderator | null }) {
  return (
    <header className="bg-card border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-xl font-semibold text-primary hidden sm:block">
              Admin Panel - Podcast Review
            </h1>
          </div>
          <UserNav moderator={moderator} />
        </div>
      </div>
    </header>
  );
}
