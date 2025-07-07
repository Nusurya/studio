import { Mic } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-card border-b sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-bold text-foreground"
          >
            <div className="p-2 bg-primary text-primary-foreground rounded-lg">
              <Mic className="h-6 w-6" />
            </div>
            <span className="font-headline">Podcast Patrol</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
