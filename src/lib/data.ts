import type { PodcastSubmission, Moderator } from "./types";

export const moderators: Moderator[] = [
  { id: "mod1", name: "Alex Ray" },
  { id: "mod2", name: "Ben Carter" },
  { id: "mod3", name: "Casey Day" },
  { id: "mod4", name: "Drew Evans" },
  { id: "mod5", name: "Frankie Green" },
  { id: "mod6", name: "Glen Harris" },
];

export const submissions: PodcastSubmission[] = [
  {
    id: "12345",
    title: "Understanding Diabetes",
    description:
      "This episode covers the basics of diabetes, including symptoms, causes, and management strategies.",
    rssUrl: "https://feeds.example.com/understanding-diabetes",
    submitter: {
      name: "John Smith",
      email: "john@example.com",
    },
    status: "pending",
    submissionDate: "2024-02-15T10:00:00Z",
    category: "Healthcare",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-02-15T10:00:00Z" }],
  },
  {
    id: "67890",
    title: "The Future of Telemedicine",
    description:
      "A look into how virtual appointments and remote monitoring are changing the healthcare landscape.",
    rssUrl: "https://feeds.example.com/telemedicine-future",
    submitter: {
      name: "Sarah Brown",
      email: "sarah@example.com",
    },
    status: "approved",
    submissionDate: "2024-02-14T14:30:00Z",
    category: "Technology",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-02-14T14:30:00Z" },
      {
        status: "approved",
        changedAt: "2024-02-14T15:00:00Z",
        moderator: moderators[0],
      },
    ],
  },
  {
    id: "54321",
    title: "Healthy Eating Tips",
    description:
      "Simple and effective tips for incorporating healthier foods into your daily diet for a better lifestyle.",
    rssUrl: "https://feeds.example.com/healthy-eating",
    submitter: {
      name: "Michael Johnson",
      email: "michael@example.com",
    },
    status: "rejected",
    rejectionReason: "Audio quality does not meet our standards.",
    submissionDate: "2024-02-13T09:00:00Z",
    category: "Wellness",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-02-13T09:00:00Z" },
      {
        status: "rejected",
        changedAt: "2024-02-13T09:30:00Z",
        reason: "Audio quality does not meet our standards.",
        moderator: moderators[1],
      },
    ],
  },
  {
    id: "98765",
    title: "Startup Funding 101",
    description:
      "An insider's guide to securing funding for your startup, from venture capital to angel investors.",
    rssUrl: "https://feeds.example.com/startup-funding",
    submitter: {
      name: "Emily White",
      email: "emily@example.com",
    },
    status: "pending",
    submissionDate: "2024-02-12T18:00:00Z",
    category: "Business",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-02-12T18:00:00Z" }],
  },
  {
    id: "13579",
    title: "The Art of Storytelling",
    description:
      "Learn how to craft compelling narratives that captivate your audience, whether in writing or speaking.",
    rssUrl: "https://feeds.example.com/art-of-storytelling",
    submitter: {
      name: "David Green",
      email: "david@example.com",
    },
    status: "pending",
    submissionDate: "2024-02-11T11:45:00Z",
    category: "Creative",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-02-11T11:45:00Z" }],
  },
  {
    id: "24680",
    title: "Meditation for Beginners",
    description:
      "An introduction to mindfulness and meditation techniques to reduce stress and improve focus.",
    rssUrl: "https://feeds.example.com/meditation-beginners",
    submitter: {
      name: "Laura Evans",
      email: "laura@example.com",
    },
    status: "pending",
    submissionDate: "2024-02-10T15:00:00Z",
    category: "Wellness",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-02-10T15:00:00Z" }],
  },
  {
    id: "11223",
    title: "Cybersecurity Threats Today",
    description:
      "Exploring the latest cybersecurity threats and how to protect yourself and your business online.",
    rssUrl: "https://feeds.example.com/cybersecurity-threats",
    submitter: {
      name: "Chris Williams",
      email: "chris@example.com",
    },
    status: "approved",
    submissionDate: "2024-02-09T12:20:00Z",
    category: "Technology",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-02-09T12:20:00Z" },
      {
        status: "approved",
        changedAt: "2024-02-09T13:00:00Z",
        moderator: moderators[2],
      },
    ],
  },
  {
    id: "44556",
    title: "The Keto Diet Explained",
    description:
      "A deep dive into the ketogenic diet, its benefits, risks, and what you can eat.",
    rssUrl: "https://feeds.example.com/keto-diet",
    submitter: {
      name: "Amanda Clark",
      email: "amanda@example.com",
    },
    status: "rejected",
    rejectionReason: "Inaccurate medical claims.",
    submissionDate: "2024-02-08T16:00:00Z",
    category: "Healthcare",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-02-08T16:00:00Z" },
      {
        status: "rejected",
        changedAt: "2024-02-08T16:30:00Z",
        reason: "Inaccurate medical claims.",
        moderator: moderators[3],
      },
    ],
  },
  {
    id: "77889",
    title: "Basics of Graphic Design",
    description:
      "Learn the fundamental principles of graphic design, including color theory, typography, and layout.",
    rssUrl: "https://feeds.example.com/graphic-design-basics",
    submitter: {
      name: "Robert Lewis",
      email: "robert@example.com",
    },
    status: "pending",
    submissionDate: "2024-02-07T10:10:00Z",
    category: "Creative",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-02-07T10:10:00Z" }],
  },
  {
    id: "99001",
    title: "Financial Independence",
    description:
      "Strategies for achieving financial independence and retiring early (FIRE movement).",
    rssUrl: "https://feeds.example.com/financial-independence",
    submitter: {
      name: "Jessica Martinez",
      email: "jessica@example.com",
    },
    status: "approved",
    submissionDate: "2024-02-06T19:00:00Z",
    category: "Business",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-02-06T19:00:00Z" },
      {
        status: "approved",
        changedAt: "2024-02-07T09:00:00Z",
        moderator: moderators[4],
      },
    ],
  },
];
