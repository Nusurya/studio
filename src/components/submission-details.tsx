"use client";

import { useState } from "react";
import type { PodcastSubmission } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/status-badge";
import { useToast } from "@/hooks/use-toast";
import { Check, X, Link as LinkIcon, Mail, User } from "lucide-react";
import { RejectionDialog } from "./rejection-dialog";
import { Separator } from "@/components/ui/separator";

interface SubmissionDetailsProps {
  initialSubmission: PodcastSubmission;
}

export default function SubmissionDetails({
  initialSubmission,
}: SubmissionDetailsProps) {
  const [submission, setSubmission] = useState(initialSubmission);
  const [isRejecting, setIsRejecting] = useState(false);
  const { toast } = useToast();

  const handleApprove = () => {
    setSubmission({ ...submission, status: "approved" });
    toast({
      title: "Podcast Approved",
      description: `"${submission.title}" has been approved.`,
    });
  };

  const handleReject = (reason: string) => {
    setSubmission({ ...submission, status: "rejected", rejectionReason: reason });
    toast({
      title: "Podcast Rejected",
      description: `"${submission.title}" has been rejected.`,
      variant: "destructive",
    });
  };

  const isPending = submission.status === "pending";

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold font-headline leading-tight">
            {submission.title}
          </h1>
          <p className="text-muted-foreground mt-1">
            Reviewing submission from {submission.submitter.name}
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <StatusBadge status={submission.status} />
          {isPending && (
            <div className="flex gap-2">
              <Button onClick={() => setIsRejecting(true)} variant="outline">
                <X className="mr-2 h-4 w-4" /> Reject
              </Button>
              <Button
                onClick={handleApprove}
                className="bg-accent text-accent-foreground hover:bg-accent/80"
              >
                <Check className="mr-2 h-4 w-4" /> Approve
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Podcast Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{submission.description}</p>
              <Separator className="my-4" />
              <div className="flex items-center gap-3 text-sm">
                <LinkIcon className="h-4 w-4 text-muted-foreground" />
                <a
                  href={submission.rssUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all font-medium"
                >
                  {submission.rssUrl}
                </a>
              </div>
            </CardContent>
          </Card>
          {submission.status === "rejected" && submission.rejectionReason && (
            <Card className="bg-destructive/10 border-destructive">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <XCircle />
                  Rejection Reason
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  {submission.rejectionReason}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Submitter Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{submission.submitter.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {submission.submitter.email}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <RejectionDialog
        open={isRejecting}
        onOpenChange={setIsRejecting}
        onReject={handleReject}
      />
    </>
  );
}
