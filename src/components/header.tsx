
import { Logo } from "./logo";
import { Separator } from "@/components/ui/separator";
import type { Moderator } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserCircle } from "lucide-react";

interface HeaderProps {
  moderators: Moderator[];
  currentModerator: Moderator | null;
  onModeratorChange: (moderatorId: string) => void;
}

export function Header({
  moderators,
  currentModerator,
  onModeratorChange,
}: HeaderProps) {
  return (
    <header className="bg-card border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-end h-20">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <UserCircle className="text-muted-foreground" />
              <Select
                value={currentModerator?.id}
                onValueChange={onModeratorChange}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Moderator" />
                </SelectTrigger>
                <SelectContent>
                  {moderators.map((mod) => (
                    <SelectItem key={mod.id} value={mod.id}>
                      {mod.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              <Logo />
              <Separator orientation="vertical" className="h-10" />
              <h1 className="text-xl font-semibold text-muted-foreground">
                Admin Panel
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
