export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  views: string;
  uploadDate: string;
  channel: string;
  channelAvatar: string;
  tags: string[];
}

export const mockVideos: Video[] = [
  {
    id: "1",
    title: "Parking Lot Surveillance - Suspicious Activity Detected",
    description: "Security camera captures unusual movement in the north parking lot during late night hours.",
    thumbnail: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=640&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "0:45",
    views: "342K views",
    uploadDate: "3 days ago",
    channel: "SecureCam Pro",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=SCP&backgroundColor=06b6d4",
    tags: ["parking lot", "night", "surveillance", "security"],
  },
  {
    id: "2",
    title: "Warehouse Entry Point - Motion Triggered Recording",
    description: "Automated recording triggered by motion sensors at the main warehouse entrance.",
    thumbnail: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=640&q=80",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    duration: "2:12",
    views: "128K views",
    uploadDate: "1 week ago",
    channel: "WatchGuard Systems",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=WGS&backgroundColor=8b5cf6",
    tags: ["warehouse", "motion", "entry", "automated"],
  },
  {
    id: "3",
    title: "Store Front Camera - Nighttime Footage Compilation",
    description: "Compilation of notable events captured by storefront security cameras over the past month.",
    thumbnail: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=640&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "8:30",
    views: "2.1M views",
    uploadDate: "2 days ago",
    channel: "CCTV Archives",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=CCTV&backgroundColor=f43f5e",
    tags: ["storefront", "night", "compilation", "cctv"],
  },
  {
    id: "4",
    title: "Office Building Lobby - 24/7 Live Feed Highlights",
    description: "Key moments from the office building lobby security feed including package deliveries and visitor logs.",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=640&q=80",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    duration: "5:15",
    views: "567K views",
    uploadDate: "5 days ago",
    channel: "BuildingSec",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=BS&backgroundColor=eab308",
    tags: ["office", "lobby", "live feed", "highlights"],
  },
  {
    id: "5",
    title: "Residential Driveway Camera - Package Theft Attempt",
    description: "Home security camera catches a porch pirate attempting to steal a delivered package.",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=640&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "1:08",
    views: "4.5M views",
    uploadDate: "12 hours ago",
    channel: "Home Watch",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=HW&backgroundColor=22c55e",
    tags: ["residential", "theft", "porch pirate", "doorbell cam"],
  },
  {
    id: "6",
    title: "Traffic Intersection Camera - Close Call Compilation",
    description: "Dramatic near-miss incidents captured at a busy city intersection by traffic monitoring cameras.",
    thumbnail: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=640&q=80",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    duration: "12:45",
    views: "8.9M views",
    uploadDate: "1 week ago",
    channel: "Traffic Cam Daily",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=TCD&backgroundColor=3b82f6",
    tags: ["traffic", "intersection", "close call", "dashcam"],
  },
];
