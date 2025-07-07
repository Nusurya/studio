export type SubmissionStatus = "pending" | "approved" | "rejected";

export interface StatusHistory {
  status: SubmissionStatus;
  changedAt: string;
  reason?: string;
}

export interface PodcastSubmission {
  id: string;
  title: string;
  description: string;
  rssUrl: string;
  submitter: {
    name: string;
    email: string;
  };
  status: SubmissionStatus;
  rejectionReason?: string;
  submissionDate: string;
  category: string;
  audioUrl: string;
  statusHistory?: StatusHistory[];
}
