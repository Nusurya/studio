"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { submissions as initialSubmissions } from "@/lib/data";
import type { PodcastSubmission, SubmissionStatus } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { StatusBadge } from "@/components/status-badge";
import SubmissionDetails from "@/components/submission-details";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [submissions, setSubmissions] =
    useState<PodcastSubmission[]>(initialSubmissions);
  const [selectedSubmission, setSelectedSubmission] =
    useState<PodcastSubmission | null>(
      submissions.length > 0 ? submissions[0] : null
    );
  const [statusFilter, setStatusFilter] = useState<SubmissionStatus | "all">(
    "all"
  );
  const { toast } = useToast();

  const handleUpdateStatus = (
    id: string,
    status: SubmissionStatus,
    reason?: string
  ) => {
    const newSubmissions = submissions.map((s) =>
      s.id === id ? { ...s, status, rejectionReason: reason } : s
    );
    setSubmissions(newSubmissions);

    const updatedSubmission = newSubmissions.find((s) => s.id === id);
    if (updatedSubmission) {
      setSelectedSubmission(updatedSubmission);
      if (status === "approved") {
        toast({
          title: "Podcast Approved",
          description: `"${updatedSubmission.title}" has been approved.`,
        });
      } else if (status === "rejected") {
        toast({
          title: "Podcast Rejected",
          description: `"${updatedSubmission.title}" has been rejected.`,
          variant: "destructive",
        });
      }
    }
  };

  const filteredSubmissions = submissions.filter(
    (s) => statusFilter === "all" || s.status === statusFilter
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 md:p-8 container mx-auto">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <h2 className="text-2xl font-bold">Podcasts</h2>
              <div className="flex gap-4">
                <Select
                  value={statusFilter}
                  onValueChange={(v) => setStatusFilter(v as any)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Podcast Title</TableHead>
                      <TableHead className="hidden md:table-cell">Uploaded By</TableHead>
                      <TableHead className="hidden sm:table-cell">Upload Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSubmissions.map((submission) => (
                      <TableRow
                        key={submission.id}
                        onClick={() => setSelectedSubmission(submission)}
                        className={cn(
                          "cursor-pointer",
                          selectedSubmission?.id === submission.id &&
                            "bg-muted"
                        )}
                      >
                        <TableCell className="font-medium">
                          <div className="flex flex-col">
                            <span>{submission.title}</span>
                            <span className="text-xs text-muted-foreground md:hidden">{submission.submitter.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {submission.submitter.name}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          {format(new Date(submission.submissionDate), "PP")}
                        </TableCell>
                        <TableCell>
                          <StatusBadge status={submission.status} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          {selectedSubmission ? (
            <SubmissionDetails
              key={selectedSubmission.id}
              submission={selectedSubmission}
              onUpdateStatus={handleUpdateStatus}
            />
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Select a submission to view details
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
