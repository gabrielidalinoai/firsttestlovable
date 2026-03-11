import { motion } from "framer-motion";
import type { Video } from "@/data/mockVideos";
import VideoCard from "./VideoCard";

interface VideoGridProps {
  videos: Video[];
  query: string;
}

const VideoGrid = ({ videos, query }: VideoGridProps) => {
  return (
    <section className="px-6 pb-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-baseline justify-between mb-6"
      >
        <h2 className="text-xl font-semibold text-foreground">
          Results for{" "}
          <span className="text-primary">"{query}"</span>
        </h2>
        <span className="text-sm text-muted-foreground">
          {videos.length} videos found
        </span>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <VideoCard key={video.id} video={video} index={i} />
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
