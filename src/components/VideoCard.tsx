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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 ease-out hover:border-primary/40 hover:scale-[1.12] hover:z-20 hover:shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.4),0_0_40px_hsl(var(--primary)/0.15)]"
    >
      {/* Thumbnail / Video */}
      <div className="relative aspect-video overflow-hidden">
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

        {/* Dark overlay / capa */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent transition-opacity duration-300 ${isHovering ? "opacity-0" : "opacity-100"}`}
        />

        {/* Play icon overlay when not hovering */}
        {!isHovering && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center border border-primary/30">
              <Play className="h-7 w-7 text-primary fill-primary ml-0.5" />
            </div>
          </div>
        )}

        {/* Title overlay on thumbnail */}
        {!isHovering && (
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="text-sm font-medium text-foreground line-clamp-1 drop-shadow-lg">
              {video.title}
            </p>
          </div>
        )}

        <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-background/80 text-foreground text-xs font-medium backdrop-blur-sm">
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
