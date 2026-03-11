import { useState } from "react";
import SearchHero from "@/components/SearchHero";
import VideoGrid from "@/components/VideoGrid";
import { mockVideos } from "@/data/mockVideos";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen gradient-mesh">
      <SearchHero onSearch={handleSearch} />
      {hasSearched && (
        <VideoGrid videos={mockVideos} query={searchQuery} />
      )}
    </div>
  );
};

export default Index;
