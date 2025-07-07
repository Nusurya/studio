import type { PodcastSubmission } from "./types";

export const submissions: PodcastSubmission[] = [
  {
    id: "1",
    title: "Tech Forward",
    description: "A weekly podcast discussing the latest in technology, startups, and innovation. Hosted by industry experts.",
    rssUrl: "https://feeds.example.com/tech-forward",
    submitter: {
      name: "Alice Johnson",
      email: "alice@example.com",
    },
    status: "pending",
    submissionDate: "2023-10-26T10:00:00Z",
  },
  {
    id: "2",
    title: "The Culinary Compass",
    description: "Exploring the world of food, from local traditions to global gastronomy. Join us on a delicious journey.",
    rssUrl: "https://feeds.example.com/culinary-compass",
    submitter: {
      name: "Bob Williams",
      email: "bob@example.com",
    },
    status: "pending",
    submissionDate: "2023-10-25T14:30:00Z",
  },
  {
    id: "3",
    title: "Mindful Moments",
    description: "A podcast about mindfulness, meditation, and mental well-being. Find your inner peace with our guided sessions.",
    rssUrl: "https://feeds.example.com/mindful-moments",
    submitter: {
      name: "Charlie Brown",
      email: "charlie@example.com",
    },
    status: "approved",
    submissionDate: "2023-10-24T09:00:00Z",
  },
  {
    id: "4",
    title: "Cosmic Queries",
    description: "An exploration of the universe, from black holes to distant galaxies. We answer your biggest questions about space.",
    rssUrl: "https://feeds.example.com/cosmic-queries",
    submitter: {
      name: "Diana Prince",
      email: "diana@example.com",
    },
    status: "rejected",
    rejectionReason: "Poor audio quality in the submitted sample episode.",
    submissionDate: "2023-10-23T18:00:00Z",
  },
  {
    id: "5",
    title: "The Indie Creator",
    description: "Interviews with independent artists, musicians, and filmmakers about their creative process and journey.",
    rssUrl: "https://feeds.example.com/indie-creator",
    submitter: {
      name: "Eve Adams",
      email: "eve@example.com",
    },
    status: "pending",
    submissionDate: "2023-10-22T11:45:00Z",
  },
];
