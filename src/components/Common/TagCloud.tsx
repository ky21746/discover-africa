import React from 'react';

interface TagCloudProps {
  tags: string[];
  selectedTags: string[];
  onTagClick: (tag: string) => void;
}

const TagCloud: React.FC<TagCloudProps> = ({ tags, selectedTags, onTagClick }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            selectedTags.includes(tag)
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagCloud;