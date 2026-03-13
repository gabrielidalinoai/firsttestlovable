import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Film, X, Plus, Check } from "lucide-react";
import type { Video } from "@/data/mockVideos";

interface VideoUploadSectionProps {
  onVideoUploaded: (video: Video) => void;
}

const VideoUploadSection = ({ onVideoUploaded }: VideoUploadSectionProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith("video/")) handleFile(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleFile = (file: File) => {
    setUploadedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setIsSubmitted(false);
  };

  const handleRemoveFile = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setUploadedFile(null);
    setPreviewUrl(null);
    setTitle("");
    setDescription("");
    setTags("");
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    if (!uploadedFile || !previewUrl || !title.trim()) return;

    const newVideo: Video = {
      id: `upload-${Date.now()}`,
      title: title.trim(),
      description: description.trim() || "User uploaded video",
      thumbnail: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=640&q=80",
      videoUrl: previewUrl,
      duration: "0:00",
      views: "0 views",
      uploadDate: "Just now",
      channel: "My Uploads",
      channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=ME&backgroundColor=06b6d4",
      tags: tags
        .split(",")
        .map((t) => t.trim().toLowerCase())
        .filter(Boolean),
    };

    onVideoUploaded(newVideo);
    setIsSubmitted(true);

    setTimeout(() => {
      handleRemoveFile();
    }, 2000);
  };

  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Upload className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Upload Your Videos</h2>
            <p className="text-sm text-muted-foreground">Add videos to make them searchable</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12 gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-7 w-7 text-primary" />
                </div>
                <p className="text-foreground font-medium">Video added successfully!</p>
              </motion.div>
            ) : !uploadedFile ? (
              <motion.div
                key="dropzone"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative flex flex-col items-center justify-center py-16 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-300 ${
                  isDragging
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40 hover:bg-secondary/30"
                }`}
              >
                <Film className="h-10 w-10 text-muted-foreground mb-3" />
                <p className="text-foreground font-medium mb-1">
                  Drop your video here or click to browse
                </p>
                <p className="text-sm text-muted-foreground">
                  MP4, WebM, MOV supported
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                {/* Video preview */}
                <div className="relative rounded-xl overflow-hidden aspect-video bg-secondary">
                  <video
                    src={previewUrl!}
                    controls
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={handleRemoveFile}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-destructive/80 transition-colors"
                  >
                    <X className="h-4 w-4 text-foreground" />
                  </button>
                </div>

                {/* Metadata form */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Title <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Give your video a title..."
                      maxLength={100}
                      className="w-full h-11 rounded-xl bg-secondary border border-border px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe what happens in the video..."
                      maxLength={500}
                      rows={3}
                      className="w-full rounded-xl bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Tags <span className="text-muted-foreground text-xs">(comma separated)</span>
                    </label>
                    <input
                      type="text"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="e.g. security, parking lot, night"
                      maxLength={200}
                      className="w-full h-11 rounded-xl bg-secondary border border-border px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!title.trim()}
                  className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Plus className="h-5 w-5" />
                  Add Video to Library
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoUploadSection;
