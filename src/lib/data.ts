import type { PodcastSubmission } from "./types";

export const submissions: PodcastSubmission[] = [
  {
    id: "12345",
    title: "Understanding Diabetes",
    description: "This episode covers the basics of diabetes, including symptoms, causes, and management strategies.",
    rssUrl: "https://feeds.example.com/understanding-diabetes",
    submitter: {
      name: "John Smith",
      email: "john@example.com",
    },
    status: "pending",
    submissionDate: "2024-02-15T10:00:00Z",
    category: "Healthcare",
    audioUrl: "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-02-15T10:00:00Z" },
    ],
  },
  {
    id: "67890",
    title: "The Future of Telemedicine",
    description: "A look into how virtual appointments and remote monitoring are changing the healthcare landscape.",
    rssUrl: "https://feeds.example.com/telemedicine-future",
    submitter: {
      name: "Sarah Brown",
      email: "sarah@example.com",
    },
    status: "approved",
    submissionDate: "2024-02-14T14:30:00Z",
    category: "Technology",
    audioUrl: "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-02-14T14:30:00Z" },
      { status: "approved", changedAt: "2024-02-14T15:00:00Z" },
    ],
  },
  {
    id: "54321",
    title: "Healthy Eating Tips",
    description: "Simple and effective tips for incorporating healthier foods into your daily diet for a better lifestyle.",
    rssUrl: "https://feeds.example.com/healthy-eating",
    submitter: {
      name: "Michael Johnson",
      email: "michael@example.com",
    },
    status: "rejected",
    rejectionReason: "Audio quality does not meet our standards.",
    submissionDate: "2024-02-13T09:00:00Z",
    category: "Wellness",
    audioUrl: "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-02-13T09:00:00Z" },
      {
        status: "rejected",
        changedAt: "2024-02-13T09:30:00Z",
        reason: "Audio quality does not meet our standards.",
      },
    ],
  },
  {
    id: "98765",
    title: "Startup Funding 101",
    description: "An insider's guide to securing funding for your startup, from venture capital to angel investors.",
    rssUrl: "https://feeds.example.com/startup-funding",
    submitter: {
      name: "Emily White",
      email: "emily@example.com",
    },
    status: "pending",
    submissionDate: "2024-02-12T18:00:00Z",
    category: "Business",
    audioUrl: "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-02-12T18:00:00Z" },
    ],
  },
  {
    id: "13579",
    title: "The Art of Storytelling",
    description: "Learn how to craft compelling narratives that captivate your audience, whether in writing or speaking.",
    rssUrl: "https://feeds.example.com/art-of-storytelling",
    submitter: {
      name: "David Green",
      email: "david@example.com",
    },
    status: "pending",
    submissionDate: "2024-02-11T11:45:00Z",
    category: "Creative",
    audioUrl: "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-02-11T11:45:00Z" },
    ],
  },
];
