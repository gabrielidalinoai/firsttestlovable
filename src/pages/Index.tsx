import { useState } from "react";
import SearchHero from "@/components/SearchHero";
import VideoGrid from "@/components/VideoGrid";
import VideoUploadSection from "@/components/VideoUploadSection";
import { mockVideos, type Video } from "@/data/mockVideos";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [uploadedVideos, setUploadedVideos] = useState<Video[]>([]);

  const allVideos = [...uploadedVideos, ...mockVideos];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setHasSearched(true);
  };

  const handleVideoUploaded = (video: Video) => {
    setUploadedVideos((prev) => [video, ...prev]);
  };

  return (
    <div className="min-h-screen gradient-mesh">
      <SearchHero onSearch={handleSearch} />
      <VideoUploadSection onVideoUploaded={handleVideoUploaded} />
      {hasSearched && (
        <VideoGrid videos={allVideos} query={searchQuery} />
      )}
    </div>
  );
};

export default Index;
