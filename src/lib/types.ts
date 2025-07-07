export type SubmissionStatus = "pending" | "approved" | "rejected";

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
}
