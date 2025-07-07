import { Logo } from "./logo";

export function Header() {
  return (
    <header className="bg-card border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center h-20">
          <Logo />
        </div>
      </div>
    </header>
  );
}
