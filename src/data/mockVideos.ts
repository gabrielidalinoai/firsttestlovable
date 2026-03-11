export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
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
    title: "Amazing Kid Scores Winning Goal in Youth Soccer Match",
    description: "Watch this incredible moment as a young player dribbles past defenders and scores the winning goal in the championship match.",
    thumbnail: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=640&q=80",
    duration: "3:24",
    views: "1.2M views",
    uploadDate: "2 weeks ago",
    channel: "Youth Sports TV",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=YSTV&backgroundColor=06b6d4",
    tags: ["soccer", "kids", "sports", "goal"],
  },
  {
    id: "2",
    title: "Kids Soccer Training Drills for Beginners",
    description: "Essential training drills every young soccer player should practice. Improve footwork, passing, and shooting skills.",
    thumbnail: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=640&q=80",
    duration: "12:08",
    views: "890K views",
    uploadDate: "1 month ago",
    channel: "Coach Academy",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=CA&backgroundColor=8b5cf6",
    tags: ["training", "drills", "soccer", "tutorial"],
  },
  {
    id: "3",
    title: "Street Soccer Skills - Kids Edition",
    description: "Freestyle soccer tricks performed by talented young street players from around the world.",
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=640&q=80",
    duration: "8:45",
    views: "2.4M views",
    uploadDate: "3 days ago",
    channel: "Street Ballers",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=SB&backgroundColor=f43f5e",
    tags: ["freestyle", "tricks", "street", "soccer"],
  },
  {
    id: "4",
    title: "Youth Soccer League Highlights 2024",
    description: "Best moments and goals from the 2024 youth soccer league season. Incredible plays from young athletes.",
    thumbnail: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=640&q=80",
    duration: "15:32",
    views: "456K views",
    uploadDate: "1 week ago",
    channel: "League Highlights",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=LH&backgroundColor=eab308",
    tags: ["highlights", "league", "2024", "soccer"],
  },
  {
    id: "5",
    title: "How to Teach Kids Soccer - Parent's Guide",
    description: "A comprehensive guide for parents who want to teach their kids the fundamentals of soccer at home.",
    thumbnail: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=640&q=80",
    duration: "20:15",
    views: "320K views",
    uploadDate: "2 months ago",
    channel: "Parent Coach",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=PC&backgroundColor=22c55e",
    tags: ["parenting", "teaching", "soccer", "guide"],
  },
  {
    id: "6",
    title: "Mini World Cup - Kids Soccer Tournament",
    description: "Full coverage of the annual Mini World Cup where kids represent different countries in an exciting tournament.",
    thumbnail: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=640&q=80",
    duration: "45:00",
    views: "1.8M views",
    uploadDate: "5 days ago",
    channel: "Global Kids Sports",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=GKS&backgroundColor=3b82f6",
    tags: ["tournament", "world cup", "kids", "soccer"],
  },
];
