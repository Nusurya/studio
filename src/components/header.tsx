
import { Logo } from "./logo";
import { Separator } from "@/components/ui/separator";

export function Header() {
  return (
    <header className="bg-card border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-end h-20">
          <div className="flex items-center gap-4">
            <Logo />
            <Separator orientation="vertical" className="h-10" />
            <h1 className="text-xl font-semibold text-muted-foreground">
              Admin Panel
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
