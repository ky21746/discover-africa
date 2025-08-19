import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 font-heebo">מאמר לא נמצא</h1>
        <Link to="/blog" className="btn-primary">
          חזרה לבלוג
        </Link>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL');
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  const quickTips = [
    'תמיד שאו מים ומזון חירום',
    'בדקו מזג האוויר לפני היציאה',
    'הודיעו למישהו על תוכניות הטיול',
    'שמרו על הטבע והסביבה'
  ];

  return (
    <div className="py-8 fade-in">
      {/* Navigation */}
      <div className="container mx-auto px-4 mb-6">
        <Link to="/blog" className="flex items-center gap-2 text-primary hover:underline">
          <ArrowRight className="w-4 h-4" />
          חזרה לבלוג
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-3 py-1 bg-primary text-white text-sm rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heebo leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <p className="text-xl text-muted leading-relaxed font-assistant">
              {post.excerpt}
            </p>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed font-assistant">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Tips */}
          <div className="bg-surface rounded-2xl p-6 mb-12">
            <h3 className="text-2xl font-bold mb-4 font-heebo">טיפים מהירים</h3>
            <ul className="space-y-2">
              {quickTips.map((tip, index) => (
                <li key={index} className="flex items-center gap-3 font-assistant">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="border-t pt-12">
              <h3 className="text-2xl font-bold mb-6 font-heebo">מאמרים קשורים</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors font-heebo">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-muted font-assistant">
                          {relatedPost.excerpt.slice(0, 100)}...
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-primary text-white rounded-2xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold mb-4 font-heebo">מוכנים לחוות בעצמכם?</h3>
            <p className="text-lg mb-6 font-assistant">צרו קשר ובואו נתכנן את הטיול המושלם שלכם</p>
            <Link to="/contact" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              בואו נתחיל לתכנן
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;