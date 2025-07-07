import type { PodcastSubmission, Moderator } from "./types";

export const moderators: Moderator[] = [
  { id: "mod1", name: "Priya Sharma" },
  { id: "mod2", name: "Rohan Kapoor" },
  { id: "mod3", name: "Anjali Mehta" },
  { id: "mod4", name: "Vikram Singh" },
  { id: "mod5", name: "Neha Gupta" },
  { id: "mod6", name: "Arjun Reddy" },
];

export const submissions: PodcastSubmission[] = [
  {
    id: "12345",
    title: "Understanding Ayurveda",
    description:
      "This episode covers the basics of Ayurveda, including doshas, principles, and wellness strategies.",
    rssUrl: "https://feeds.example.com/understanding-ayurveda",
    submitter: {
      name: "Sanjay Gupta",
      email: "sanjay@example.com",
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
    title: "The Future of UPI",
    description:
      "A look into how the Unified Payments Interface is changing the digital payment landscape in India.",
    rssUrl: "https://feeds.example.com/upi-future",
    submitter: {
      name: "Sunita Patel",
      email: "sunita@example.com",
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
    title: "Homemade Indian Sweets",
    description:
      "Simple and effective tips for making delicious Indian sweets at home for festivals and celebrations.",
    rssUrl: "https://feeds.example.com/indian-sweets",
    submitter: {
      name: "Manoj Kumar",
      email: "manoj@example.com",
    },
    status: "rejected",
    rejectionReason: "Audio quality does not meet our standards.",
    submissionDate: "2024-02-13T09:00:00Z",
    category: "Cooking",
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
    title: "Indian Startup Ecosystem",
    description:
      "An insider's guide to the booming startup scene in India, from Bangalore to Delhi.",
    rssUrl: "https://feeds.example.com/indian-startup-ecosystem",
    submitter: {
      name: "Deepika Singh",
      email: "deepika@example.com",
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
    title: "The Epics: Ramayana and Mahabharata",
    description:
      "Exploring the timeless tales and lessons from the great Indian epics.",
    rssUrl: "https://feeds.example.com/indian-epics",
    submitter: {
      name: "Ravi Verma",
      email: "ravi@example.com",
    },
    status: "pending",
    submissionDate: "2024-02-11T11:45:00Z",
    category: "Culture",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-02-11T11:45:00Z" }],
  },
  {
    id: "24680",
    title: "Yoga for Inner Peace",
    description:
      "An introduction to various asanas and meditation techniques to reduce stress and improve focus.",
    rssUrl: "https://feeds.example.com/yoga-for-peace",
    submitter: {
      name: "Lakshmi Iyer",
      email: "lakshmi@example.com",
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
    title: "Digital India Explained",
    description:
      "Exploring the government's initiative for a digitally empowered society and knowledge economy.",
    rssUrl: "https://feeds.example.com/digital-india",
    submitter: {
      name: "Karan Malhotra",
      email: "karan@example.com",
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
    title: "Bollywood Film Review",
    description:
      "A deep dive into the latest blockbuster Bollywood movie, its story, music, and performances.",
    rssUrl: "https://feeds.example.com/bollywood-review",
    submitter: {
      name: "Aisha Khan",
      email: "aisha@example.com",
    },
    status: "rejected",
    rejectionReason: "Contains spoilers without warning.",
    submissionDate: "2024-02-08T16:00:00Z",
    category: "Entertainment",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-02-08T16:00:00Z" },
      {
        status: "rejected",
        changedAt: "2024-02-08T16:30:00Z",
        reason: "Contains spoilers without warning.",
        moderator: moderators[3],
      },
    ],
  },
  {
    id: "77889",
    title: "Indian Classical Music",
    description:
      "An introduction to the fundamental principles of Carnatic and Hindustani classical music.",
    rssUrl: "https://feeds.example.com/indian-classical-music",
    submitter: {
      name: "Rajesh Pillai",
      email: "rajesh@example.com",
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
    title: "Indian Stock Market Analysis",
    description:
      "Strategies for investing in the Indian stock market for long-term growth.",
    rssUrl: "https://feeds.example.com/indian-stock-market",
    submitter: {
      name: "Meera Krishnan",
      email: "meera@example.com",
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
  {
    id: "30001",
    title: "History of the Mughal Empire",
    description:
      "A detailed account of the rise and fall of the Mughal dynasty in India.",
    rssUrl: "https://feeds.example.com/mughal-history",
    submitter: {
      name: "Arun Singh",
      email: "arun@example.com",
    },
    status: "pending",
    submissionDate: "2024-03-01T11:00:00Z",
    category: "History",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-03-01T11:00:00Z" }],
  },
  {
    id: "30002",
    title: "Modern Indian Cuisine",
    description:
      "Exploring fusion recipes that blend traditional and modern cooking techniques.",
    rssUrl: "https://feeds.example.com/modern-indian-cuisine",
    submitter: {
      name: "Pooja Mehta",
      email: "pooja@example.com",
    },
    status: "approved",
    submissionDate: "2024-03-02T14:00:00Z",
    category: "Cooking",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-03-02T14:00:00Z" },
      {
        status: "approved",
        changedAt: "2024-03-02T15:30:00Z",
        moderator: moderators[5],
      },
    ],
  },
  {
    id: "30003",
    title: "Travel Guide to Kerala",
    description:
      "Discover the backwaters, beaches, and culture of 'God's Own Country'.",
    rssUrl: "https://feeds.example.com/kerala-travel-guide",
    submitter: {
      name: "Nikhil Menon",
      email: "nikhil@example.com",
    },
    status: "pending",
    submissionDate: "2024-03-03T09:20:00Z",
    category: "Travel",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-03-03T09:20:00Z" }],
  },
  {
    id: "30004",
    title: "Indian Politics Today",
    description:
      "An analysis of the current political landscape and major policy changes.",
    rssUrl: "https://feeds.example.com/indian-politics",
    submitter: {
      name: "Aditi Rao",
      email: "aditi@example.com",
    },
    status: "rejected",
    rejectionReason: "One-sided political commentary.",
    submissionDate: "2024-03-04T18:00:00Z",
    category: "Politics",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-03-04T18:00:00Z" },
      {
        status: "rejected",
        changedAt: "2024-03-04T18:45:00Z",
        reason: "One-sided political commentary.",
        moderator: moderators[0],
      },
    ],
  },
  {
    id: "30005",
    title: "The Art of Rangoli",
    description:
      "A guide to creating beautiful and intricate Rangoli designs for festivals.",
    rssUrl: "https://feeds.example.com/rangoli-art",
    submitter: {
      name: "Sneha Desai",
      email: "sneha@example.com",
    },
    status: "pending",
    submissionDate: "2024-03-05T12:00:00Z",
    category: "Creative",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-03-05T12:00:00Z" }],
  },
  {
    id: "30006",
    title: "Understanding GST in India",
    description:
      "A simplified explanation of the Goods and Services Tax system.",
    rssUrl: "https://feeds.example.com/gst-explained",
    submitter: {
      name: "Vivek Kumar",
      email: "vivek@example.com",
    },
    status: "approved",
    submissionDate: "2024-03-06T10:00:00Z",
    category: "Business",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-03-06T10:00:00Z" },
      {
        status: "approved",
        changedAt: "2024-03-06T11:00:00Z",
        moderator: moderators[1],
      },
    ],
  },
  {
    id: "30007",
    title: "The Indian Premier League (IPL)",
    description:
      "A fan's perspective on the history, teams, and excitement of the IPL.",
    rssUrl: "https://feeds.example.com/ipl-discussion",
    submitter: {
      name: "Amit Patel",
      email: "amit@example.com",
    },
    status: "pending",
    submissionDate: "2024-03-07T16:30:00Z",
    category: "Sports",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-03-07T16:30:00Z" }],
  },
  {
    id: "30008",
    title: "Space Missions of ISRO",
    description:
      "Highlighting the major achievements and future missions of the Indian Space Research Organisation.",
    rssUrl: "https://feeds.example.com/isro-missions",
    submitter: {
      name: "Divya Nair",
      email: "divya@example.com",
    },
    status: "approved",
    submissionDate: "2024-03-08T13:00:00Z",
    category: "Science",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-03-08T13:00:00Z" },
      {
        status: "approved",
        changedAt: "2024-03-08T14:00:00Z",
        moderator: moderators[2],
      },
    ],
  },
  {
    id: "30009",
    title: "Indian Wildlife Conservation",
    description:
      "Discussing the efforts to protect endangered species like tigers and elephants in India.",
    rssUrl: "https://feeds.example.com/indian-wildlife",
    submitter: {
      name: "Gaurav Joshi",
      email: "gaurav@example.com",
    },
    status: "pending",
    submissionDate: "2024-03-09T08:45:00Z",
    category: "Environment",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-03-09T08:45:00Z" }],
  },
  {
    id: "30010",
    title: "The Gig Economy in India",
    description:
      "An analysis of the rise of freelance and contract work in Indian cities.",
    rssUrl: "https://feeds.example.com/indian-gig-economy",
    submitter: {
      name: "Ishita Agarwal",
      email: "ishita@example.com",
    },
    status: "approved",
    submissionDate: "2024-03-10T17:00:00Z",
    category: "Business",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-03-10T17:00:00Z" },
      {
        status: "approved",
        changedAt: "2024-03-11T10:00:00Z",
        moderator: moderators[4],
      },
    ],
  },
];
