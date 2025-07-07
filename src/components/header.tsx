import { Logo } from "./logo";
import { UserNav } from "./user-nav";

export function Header() {
  return (
    <header className="bg-card border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <h1 className="text-xl font-semibold text-primary hidden sm:block">
              Admin Panel
            </h1>
          </div>
          <UserNav />
        </div>
      </div>
    </header>
  );
}
