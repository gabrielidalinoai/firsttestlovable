import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Eye, Play } from "lucide-react";
import type { Video } from "@/data/mockVideos";

interface VideoCardProps {
  video: Video;
  index: number;
}

const VideoCard = ({ video, index }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300"
    >
      {/* Thumbnail / Video */}
      <div
        className="relative aspect-video overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovering ? "opacity-0" : "opacity-100"}`}
          loading="lazy"
        />
        <video
          ref={videoRef}
          src={video.videoUrl}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"}`}
        />

        {/* Play icon overlay when not hovering */}
        {!isHovering && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Play className="h-10 w-10 text-primary fill-primary" />
          </div>
        )}

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
