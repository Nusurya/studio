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
    category: "Wellness",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-02-15T10:00:00Z" }],
  },
  {
    id: "67890",
    title: "Advancements in Telemedicine",
    description:
      "A look into how telemedicine is changing the healthcare landscape in India, making it more accessible.",
    rssUrl: "https://feeds.example.com/telemedicine-advancements",
    submitter: {
      name: "Sunita Patel",
      email: "sunita@example.com",
    },
    status: "approved",
    submissionDate: "2024-02-14T14:30:00Z",
    category: "Healthcare",
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
    title: "Managing Diabetes Through Diet",
    description:
      "Nutritional tips and meal planning advice for individuals managing diabetes in an Indian context.",
    rssUrl: "https://feeds.example.com/diabetes-diet",
    submitter: {
      name: "Manoj Kumar",
      email: "manoj@example.com",
    },
    status: "rejected",
    rejectionReason: "Audio quality does not meet our standards.",
    submissionDate: "2024-02-13T09:00:00Z",
    category: "Healthcare",
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
    title: "The Rise of Health-Tech Startups",
    description:
      "An insider's guide to the booming health-tech startup scene in India, from Bangalore to Delhi.",
    rssUrl: "https://feeds.example.com/health-tech-startups",
    submitter: {
      name: "Deepika Singh",
      email: "deepika@example.com",
    },
    status: "pending",
    submissionDate: "2024-02-12T18:00:00Z",
    category: "Healthcare",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-02-12T18:00:00Z" }],
  },
  {
    id: "13579",
    title: "Mental Wellness in Ancient Texts",
    description:
      "Exploring timeless lessons on mental peace and mindfulness from ancient Indian scriptures.",
    rssUrl: "https://feeds.example.com/ancient-mental-wellness",
    submitter: {
      name: "Ravi Verma",
      email: "ravi@example.com",
    },
    status: "pending",
    submissionDate: "2024-02-11T11:45:00Z",
    category: "Wellness",
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
    title: "Digital Health Records in India",
    description:
      "Exploring the government's initiative for a unified digital health infrastructure.",
    rssUrl: "https://feeds.example.com/digital-health-records",
    submitter: {
      name: "Karan Malhotra",
      email: "karan@example.com",
    },
    status: "approved",
    submissionDate: "2024-02-09T12:20:00Z",
    category: "Healthcare",
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
    title: "Debunking Common Health Myths",
    description:
      "A doctor addresses and debunks common health myths prevalent in our society.",
    rssUrl: "https://feeds.example.com/health-myths-debunked",
    submitter: {
      name: "Aisha Khan",
      email: "aisha@example.com",
    },
    status: "rejected",
    rejectionReason: "Contains unverified medical claims.",
    submissionDate: "2024-02-08T16:00:00Z",
    category: "Healthcare",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [
      { status: "pending", changedAt: "2024-02-08T16:00:00Z" },
      {
        status: "rejected",
        changedAt: "2024-02-08T16:30:00Z",
        reason: "Contains unverified medical claims.",
        moderator: moderators[3],
      },
    ],
  },
  {
    id: "77889",
    title: "Music Therapy for Stress Relief",
    description:
      "An introduction to how classical music can be used as a therapeutic tool for stress and anxiety.",
    rssUrl: "https://feeds.example.com/music-therapy",
    submitter: {
      name: "Rajesh Pillai",
      email: "rajesh@example.com",
    },
    status: "pending",
    submissionDate: "2024-02-07T10:10:00Z",
    category: "Wellness",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-02-07T10:10:00Z" }],
  },
  {
    id: "99001",
    title: "Investing in the Healthcare Sector",
    description:
      "Strategies for investing in pharmaceutical and healthcare stocks for long-term growth.",
    rssUrl: "https://feeds.example.com/healthcare-investing",
    submitter: {
      name: "Meera Krishnan",
      email: "meera@example.com",
    },
    status: "approved",
    submissionDate: "2024-02-06T19:00:00Z",
    category: "Healthcare",
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
    title: "A History of Traditional Indian Medicine",
    description:
      "A detailed account of the origins and evolution of traditional healing practices in India.",
    rssUrl: "https://feeds.example.com/traditional-medicine-history",
    submitter: {
      name: "Arun Singh",
      email: "arun@example.com",
    },
    status: "pending",
    submissionDate: "2024-03-01T11:00:00Z",
    category: "Healthcare",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-03-01T11:00:00Z" }],
  },
  {
    id: "30002",
    title: "Nutritional Benefits of a Balanced Indian Diet",
    description:
      "Exploring how to achieve a balanced diet with traditional Indian foods for optimal health.",
    rssUrl: "https://feeds.example.com/balanced-indian-diet",
    submitter: {
      name: "Pooja Mehta",
      email: "pooja@example.com",
    },
    status: "approved",
    submissionDate: "2024-03-02T14:00:00Z",
    category: "Wellness",
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
    title: "Medical Tourism in Kerala: An Overview",
    description:
      "Discover why Kerala is a top destination for medical tourism, combining quality care and scenic beauty.",
    rssUrl: "https://feeds.example.com/kerala-medical-tourism",
    submitter: {
      name: "Nikhil Menon",
      email: "nikhil@example.com",
    },
    status: "pending",
    submissionDate: "2024-03-03T09:20:00Z",
    category: "Healthcare",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-03-03T09:20:00Z" }],
  },
  {
    id: "30004",
    title: "Public Health Policies in India",
    description:
      "An analysis of current public health initiatives and major policy changes by the government.",
    rssUrl: "https://feeds.example.com/indian-public-health",
    submitter: {
      name: "Aditi Rao",
      email: "aditi@example.com",
    },
    status: "rejected",
    rejectionReason: "One-sided political commentary.",
    submissionDate: "2024-03-04T18:00:00Z",
    category: "Healthcare",
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
    title: "The Therapeutic Benefits of Art",
    description:
      "A guide to how creative expression and art can be used for mental and emotional healing.",
    rssUrl: "https://feeds.example.com/art-therapy",
    submitter: {
      name: "Sneha Desai",
      email: "sneha@example.com",
    },
    status: "pending",
    submissionDate: "2024-03-05T12:00:00Z",
    category: "Wellness",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-03-05T12:00:00Z" }],
  },
  {
    id: "30006",
    title: "The Impact of GST on Healthcare Costs",
    description:
      "A simplified explanation of how the Goods and Services Tax system affects medical expenses.",
    rssUrl: "https://feeds.example.com/gst-on-healthcare",
    submitter: {
      name: "Vivek Kumar",
      email: "vivek@example.com",
    },
    status: "approved",
    submissionDate: "2024-03-06T10:00:00Z",
    category: "Healthcare",
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
    title: "Preventing Sports Injuries: A Guide for Athletes",
    description:
      "A fan's perspective on the history, teams, and excitement of the IPL.",
    rssUrl: "https://feeds.example.com/sports-injury-prevention",
    submitter: {
      name: "Amit Patel",
      email: "amit@example.com",
    },
    status: "pending",
    submissionDate: "2024-03-07T16:30:00Z",
    category: "Wellness",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-03-07T16:30:00Z" }],
  },
  {
    id: "30008",
    title: "Healthcare Innovations from Space Tech",
    description:
      "Highlighting how ISRO's innovations are being adapted for medical technology and telemedicine.",
    rssUrl: "https://feeds.example.com/space-tech-health",
    submitter: {
      name: "Divya Nair",
      email: "divya@example.com",
    },
    status: "approved",
    submissionDate: "2024-03-08T13:00:00Z",
    category: "Healthcare",
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
    title: "Zoonotic Diseases and Public Health",
    description:
      "Discussing the link between wildlife, conservation, and the prevention of diseases that spread from animals to humans.",
    rssUrl: "https://feeds.example.com/zoonotic-diseases",
    submitter: {
      name: "Gaurav Joshi",
      email: "gaurav@example.com",
    },
    status: "pending",
    submissionDate: "2024-03-09T08:45:00Z",
    category: "Healthcare",
    audioUrl:
      "https://storage.googleapis.com/studioprod-media/sotw-2245-discover.mp3",
    statusHistory: [{ status: "pending", changedAt: "2024-03-09T08:45:00Z" }],
  },
  {
    id: "30010",
    title: "Mental Health for Freelancers",
    description:
      "An analysis of the unique mental health challenges faced by workers in the gig economy.",
    rssUrl: "https://feeds.example.com/freelancer-mental-health",
    submitter: {
      name: "Ishita Agarwal",
      email: "ishita@example.com",
    },
    status: "approved",
    submissionDate: "2024-03-10T17:00:00Z",
    category: "Wellness",
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
