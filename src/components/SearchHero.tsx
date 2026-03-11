import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface SearchHeroProps {
  onSearch: (query: string) => void;
}

const SearchHero = ({ onSearch }: SearchHeroProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold text-center tracking-tight mb-4"
      >
        <span className="text-foreground">Find </span>
        <span className="text-primary glow-text">Any Video</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-muted-foreground text-lg md:text-xl text-center max-w-xl mb-10"
      >
        Describe what you're looking for and we'll find it.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onSubmit={handleSubmit}
        className="w-full max-w-2xl relative"
      >
        <div className="relative group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Try "a kid playing soccer"...'
            className="w-full h-14 md:h-16 rounded-2xl bg-secondary border border-border pl-14 pr-6 text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        </div>

        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {["a kid playing soccer", "cooking tutorial", "cute cats", "space documentary"].map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => {
                setQuery(suggestion);
                onSearch(suggestion);
              }}
              className="px-4 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:text-primary transition-all duration-200"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </motion.form>
    </section>
  );
};

export default SearchHero;
