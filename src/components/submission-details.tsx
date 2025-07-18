"use client";

import { useState, useEffect } from "react";
import type { PodcastSubmission, SubmissionStatus } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RejectionDialog } from "./rejection-dialog";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { StatusBadge } from "./status-badge";
import { Undo2 } from "lucide-react";

interface SubmissionDetailsProps {
  submission: PodcastSubmission;
  onUpdateStatus: (
    id: string,
    status: SubmissionStatus,
    reason?: string
  ) => void;
  isActionable: boolean;
}

export default function SubmissionDetails({
  submission,
  onUpdateStatus,
  isActionable,
}: SubmissionDetailsProps) {
  const [isRejecting, setIsRejecting] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleApprove = () => {
    onUpdateStatus(submission.id, "approved");
  };

  const handleStartReject = () => {
    setIsRejecting(true);
  };

  const handleConfirmReject = (reason: string) => {
    onUpdateStatus(submission.id, "rejected", reason);
    setIsRejecting(false);
  };

  const handleReReview = () => {
    onUpdateStatus(submission.id, "pending");
  };

  return (
    <>
      <Card className="sticky top-28">
        <CardHeader>
          <CardTitle className="text-xl font-bold leading-tight">
            {submission.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <audio controls src={submission.audioUrl} className="w-full h-10">
            Your browser does not support the audio element.
          </audio>

          <div>
            <h3 className="font-semibold text-primary text-xs uppercase tracking-wider">
              Description
            </h3>
            <p className="text-muted-foreground">{submission.description}</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary text-xs uppercase tracking-wider">
              Category
            </h3>
            <p className="text-muted-foreground">{submission.category}</p>
          </div>

          {submission.status === "rejected" && submission.rejectionReason && (
            <div>
              <h3 className="font-semibold text-destructive text-xs uppercase tracking-wider">
                Rejection Reason
              </h3>
              <p className="text-muted-foreground">
                {submission.rejectionReason}
              </p>
            </div>
          )}

          <Separator />

          {submission.statusHistory && submission.statusHistory.length > 0 && (
            <div>
              <h3 className="font-semibold text-primary text-xs uppercase tracking-wider mb-2">
                Audit Trail
              </h3>
              <div className="space-y-3">
                {submission.statusHistory
                  .slice()
                  .sort(
                    (a, b) =>
                      new Date(b.changedAt).getTime() -
                      new Date(a.changedAt).getTime()
                  )
                  .map((event, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="pt-1">
                        <StatusBadge status={event.status} />
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground capitalize">
                          {event.status}
                          {event.moderator && (
                            <span className="text-muted-foreground text-xs">
                              {" "}
                              by {event.moderator.name}
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {hasMounted
                            ? format(new Date(event.changedAt), "PPp")
                            : null}
                        </p>
                        {event.status === "rejected" && event.reason && (
                          <p className="text-xs text-muted-foreground italic mt-1">
                            Reason: {event.reason}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <Separator />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-primary text-xs uppercase tracking-wider">
                Uploader
              </h3>
              <p className="text-muted-foreground">
                {submission.submitter.name}
              </p>
              <p className="text-xs text-muted-foreground">
                ID: {submission.id}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-primary text-xs uppercase tracking-wider">
                Submission Date
              </h3>
              <p className="text-muted-foreground">
                {hasMounted
                  ? format(new Date(submission.submissionDate), "PPp")
                  : null}
              </p>
            </div>
          </div>
        </CardContent>
        {submission.status === "pending" && (
          <CardFooter className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-6">
            <Button
              onClick={handleApprove}
              variant="accent"
              className="w-full"
              disabled={!isActionable}
            >
              Approve
            </Button>
            <Button
              onClick={handleStartReject}
              variant="destructive"
              className="w-full"
              disabled={!isActionable}
            >
              Reject
            </Button>
          </CardFooter>
        )}
        {(submission.status === "rejected" ||
          submission.status === "approved") && (
          <CardFooter className="grid grid-cols-1 pt-6">
            <Button
              onClick={handleReReview}
              variant="ghost"
              disabled={!isActionable}
              className="w-full border border-yellow-300 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 hover:text-yellow-900 dark:border-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300 dark:hover:bg-yellow-900 dark:hover:text-yellow-200"
            >
              <Undo2 />
              Re-Review
            </Button>
          </CardFooter>
        )}
      </Card>

      <RejectionDialog
        open={isRejecting}
        onOpenChange={setIsRejecting}
        onReject={handleConfirmReject}
      />
    </>
  );
}
