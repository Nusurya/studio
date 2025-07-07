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

interface SubmissionDetailsProps {
  submission: PodcastSubmission;
  onUpdateStatus: (
    id: string,
    status: SubmissionStatus,
    reason?: string
  ) => void;
}

export default function SubmissionDetails({
  submission,
  onUpdateStatus,
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

  const isPending = submission.status === "pending";

  return (
    <>
      <Card className="sticky top-28">
        <CardHeader>
          <CardTitle className="text-xl font-bold leading-tight">
            {submission.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
              Description
            </h3>
            <p className="text-foreground/80">{submission.description}</p>
          </div>
          <div>
            <h3 className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
              Category
            </h3>
            <p className="text-foreground/80">{submission.category}</p>
          </div>

          <audio controls src={submission.audioUrl} className="w-full h-10">
            Your browser does not support the audio element.
          </audio>

          {submission.status === "rejected" && submission.rejectionReason && (
            <div>
              <h3 className="font-semibold text-destructive text-xs uppercase tracking-wider">
                Rejection Reason
              </h3>
              <p className="text-foreground/80">
                {submission.rejectionReason}
              </p>
            </div>
          )}

          <Separator />

          {submission.statusHistory && submission.statusHistory.length > 0 && (
            <div>
              <h3 className="font-semibold text-muted-foreground text-xs uppercase tracking-wider mb-2">
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
                        <p className="text-foreground/80 capitalize">
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
              <h3 className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                Uploader
              </h3>
              <p className="text-foreground/80">{submission.submitter.name}</p>
              <p className="text-xs text-muted-foreground">
                ID: {submission.id}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                Submission Date
              </h3>
              <p className="text-foreground/80">
                {hasMounted
                  ? format(new Date(submission.submissionDate), "PPp")
                  : null}
              </p>
            </div>
          </div>
        </CardContent>
        {isPending && (
          <CardFooter className="flex gap-2">
            <Button onClick={handleApprove} className="w-full">
              Approve
            </Button>
            <Button
              onClick={handleStartReject}
              variant="outline"
              className="w-full text-destructive border-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              Reject
            </Button>
          </CardFooter>
        )}
        {(submission.status === "rejected" ||
          submission.status === "approved") && (
          <CardFooter>
            <Button
              onClick={handleReReview}
              variant="secondary"
              className="w-full"
            >
              Re-review
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
