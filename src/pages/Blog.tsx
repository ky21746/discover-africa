import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
import Card from '../components/Common/Card';
import SearchBar from '../components/Common/SearchBar';
import TagCloud from '../components/Common/TagCloud';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = searchQuery === '' || 
                           post.title.includes(searchQuery) || 
                           post.excerpt.includes(searchQuery) ||
                           post.tags.some(tag => tag.includes(searchQuery));
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => post.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <span key={index} className="search-highlight">{part}</span> : part
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL');
  };

  return (
    <div className="py-12 fade-in">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">בלוג</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto font-sans">
            מאמרים, טיפים והשראה לטיול המושלם באוגנדה
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto mb-6">
            <SearchBar
              placeholder="חפשו במאמרים..."
              onSearch={setSearchQuery}
            />
          </div>

          {/* Tag Cloud */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 font-sans">נושאים:</h3>
            <TagCloud
              tags={allTags}
              selectedTags={selectedTags}
              onTagClick={handleTagClick}
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div
                  className="card-image h-48"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <div className="card-content p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 font-sans leading-tight text-gray-900">
                    {highlightText(post.title, searchQuery)}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 font-sans line-clamp-3 leading-relaxed">
                    {highlightText(post.excerpt, searchQuery)}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <Link to={`/blog/${post.id}`} className="btn-primary w-full text-center">
                      קראו עוד
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted mb-4">לא נמצאו מאמרים, נסו מילה אחרת</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTags([]);
              }}
              className="btn-secondary"
            >
              נקה סינונים
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-primary text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-sans">הישארו מעודכנים</h2>
          <p className="text-xl mb-6 font-sans">
            הירשמו לניוזלטר וקבלו טיפים ומאמרים חדשים ישירות למייל
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="הכניסו את המייל שלכם"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-right"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              הרשמה
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;