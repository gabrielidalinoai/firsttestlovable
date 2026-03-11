import { motion } from "framer-motion";
import { Clock, Eye } from "lucide-react";
import type { Video } from "@/data/mockVideos";

interface VideoCardProps {
  video: Video;
  index: number;
}

const VideoCard = ({ video, index }: VideoCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-background/80 text-foreground text-xs font-medium backdrop-blur-sm">
          {video.duration}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex gap-3">
          <img
            src={video.channelAvatar}
            alt={video.channel}
            className="w-9 h-9 rounded-full flex-shrink-0 mt-0.5"
          />
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {video.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{video.channel}</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
              <span className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {video.views}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {video.uploadDate}
              </span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs bg-secondary text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default VideoCard;
