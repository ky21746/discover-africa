import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
import Card from '../components/Common/Card';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL');
  };

  return (
    <div className="py-12 fade-in">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 font-sans">בלוג</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto font-sans">
            מאמרים, טיפים והשראה לטיול המושלם באוגנדה
          </p>
        </div>


        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div
                  className="card-image"
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
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 font-sans line-clamp-3 leading-relaxed">
                    {post.excerpt}
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

      </div>
    </div>
  );
};

export default Blog;