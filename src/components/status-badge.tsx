import { Badge } from "@/components/ui/badge";
import type { SubmissionStatus } from "@/lib/types";
import { Clock, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: SubmissionStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig = {
    pending: {
      label: "Pending",
      icon: <Clock className="h-3 w-3" />,
      variant: "secondary" as const,
      className: "text-secondary-foreground",
    },
    approved: {
      label: "Approved",
      icon: <CheckCircle className="h-3 w-3" />,
      variant: "default" as const,
      className: "bg-accent text-accent-foreground hover:bg-accent/80",
    },
    rejected: {
      label: "Rejected",
      icon: <XCircle className="h-3 w-3" />,
      variant: "destructive" as const,
      className: "",
    },
  };

  const config = statusConfig[status];

  return (
    <Badge
      variant={config.variant}
      className={cn("gap-1.5 font-medium capitalize", config.className)}
    >
      {config.icon}
      <span>{config.label}</span>
    </Badge>
  );
}
