import { Badge } from "@/components/ui/badge";
import type { SubmissionStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: SubmissionStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig = {
    pending: {
      label: "Pending",
      className:
        "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:hover:bg-yellow-900",
    },
    approved: {
      label: "Approved",
      className:
        "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300 dark:hover:bg-green-900",
    },
    rejected: {
      label: "Rejected",
      className:
        "bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/50 dark:text-red-300 dark:hover:bg-red-900",
    },
  };

  const config = statusConfig[status];

  return (
    <Badge
      variant="outline"
      className={cn(
        "border-transparent capitalize font-semibold text-xs",
        config.className
      )}
    >
      {config.label}
    </Badge>
  );
}
