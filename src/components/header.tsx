
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="bg-card border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-xl font-semibold text-foreground">
            Admin Panel
          </h1>
          <Logo />
        </div>
      </div>
    </header>
  );
}
