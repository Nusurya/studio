"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { submissions as initialSubmissions, moderators } from "@/lib/data";
import type {
  PodcastSubmission,
  StatusHistory,
  SubmissionStatus,
  Moderator,
} from "@/lib/types";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function DashboardPage() {
  const [submissions, setSubmissions] =
    useState<PodcastSubmission[]>(initialSubmissions);
  const [selectedSubmission, setSelectedSubmission] =
    useState<PodcastSubmission | null>(
      submissions.length > 0 ? submissions[0] : null
    );
  const [statusFilter, setStatusFilter] = useState<SubmissionStatus | "all">(
    "all"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [hasMounted, setHasMounted] = useState(false);
  const [currentModeratorId, setCurrentModeratorId] = useState<string>("all");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleUpdateStatus = (
    id: string,
    status: SubmissionStatus,
    reason?: string
  ) => {
    if (currentModeratorId === "all") {
      toast({
        title: "Action Required",
        description:
          "Please select a panelist from the dropdown to take an action.",
        variant: "destructive",
      });
      return;
    }
    const currentModerator = moderators.find(
      (mod) => mod.id === currentModeratorId
    );

    if (!currentModerator) {
      toast({
        title: "Error",
        description: "Invalid panelist selected.",
        variant: "destructive",
      });
      return;
    }

    const newSubmissions = submissions.map((s) => {
      if (s.id === id) {
        const newHistoryEntry: StatusHistory = {
          status,
          changedAt: new Date().toISOString(),
          reason: status === "rejected" ? reason : undefined,
          moderator: currentModerator,
        };
        const newHistory = [
          ...(s.statusHistory || [
            { status: "pending", changedAt: s.submissionDate },
          ]),
          newHistoryEntry,
        ];
        return {
          ...s,
          status,
          rejectionReason: reason,
          statusHistory: newHistory,
        };
      }
      return s;
    });
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

  const filteredSubmissions = submissions
    .filter((s) => statusFilter === "all" || s.status === statusFilter)
    .filter((s) => {
      const term = searchTerm.toLowerCase();
      return (
        s.title.toLowerCase().includes(term) ||
        s.description.toLowerCase().includes(term) ||
        s.submitter.name.toLowerCase().includes(term)
      );
    });

  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);
  const paginatedSubmissions = filteredSubmissions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (paginatedSubmissions.length > 0) {
      if (
        !selectedSubmission ||
        !paginatedSubmissions.some((s) => s.id === selectedSubmission.id)
      ) {
        setSelectedSubmission(paginatedSubmissions[0]);
      }
    } else {
      if (currentPage > 1) {
        setCurrentPage(1);
      } else {
        setSelectedSubmission(null);
      }
    }
  }, [currentPage, paginatedSubmissions, selectedSubmission]);

  const handleFilterChange = (value: SubmissionStatus | "all") => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 md:p-8 container mx-auto">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-wrap items-center justify-end gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 sm:w-auto md:w-[250px]"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Panelist:
                </span>
                <Select
                  value={currentModeratorId}
                  onValueChange={setCurrentModeratorId}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Panelist" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {moderators.map((mod) => (
                      <SelectItem key={mod.id} value={mod.id}>
                        {mod.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Select
                value={statusFilter}
                onValueChange={(v) => handleFilterChange(v as any)}
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
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Podcast Title</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Uploaded By
                      </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Upload Date
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Moderator
                      </TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedSubmissions.map((submission) => (
                      <TableRow
                        key={submission.id}
                        onClick={() => setSelectedSubmission(submission)}
                        className={cn(
                          "cursor-pointer",
                          selectedSubmission?.id === submission.id && "bg-muted"
                        )}
                      >
                        <TableCell className="font-medium">
                          <div className="flex flex-col">
                            <span>{submission.title}</span>
                            <span className="text-xs text-muted-foreground md:hidden">
                              {submission.submitter.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {submission.submitter.name}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          {hasMounted
                            ? format(
                                new Date(submission.submissionDate),
                                "PPp"
                              )
                            : null}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {submission.statusHistory
                            ?.slice()
                            .reverse()
                            .find((h) => h.moderator)?.moderator?.name ?? "N/A"}
                        </TableCell>
                        <TableCell>
                          <StatusBadge status={submission.status} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1 || totalPages === 0}
                >
                  Previous
                </Button>
                <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                  Page {totalPages > 0 ? currentPage : 0} of {totalPages}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages || totalPages === 0}
                >
                  Next
                </Button>
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
              isActionable={currentModeratorId !== "all"}
            />
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  No submissions to display.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
