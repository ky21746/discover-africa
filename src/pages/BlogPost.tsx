import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, Tag, Share2, BookmarkPlus } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">מאמר לא נמצא</h1>
          <p className="text-gray-600 mb-8 text-lg">המאמר שחיפשתם אינו קיים במערכת</p>
          <Link to="/blog" className="btn-primary inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
            <ArrowRight className="w-5 h-5" />
            חזרה לבלוג
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Image */}
      <div className="relative w-full h-[45vh] mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FGorillas%20in%20Bwindi%20Forest%2FGorilla%20family%20with%20silverback%20in%20Bwindi%20Impenetrable%20Forest%2C%20Uganda%2C%20Africa.webp?alt=media&token=6afb4c11-7cfa-4c28-a29e-d41dea9634ac"
          alt="המדריך המקיף לטיול גורילות בפארק הלאומי בווינדי"
          className="w-full h-full object-cover"
        />
        
        {/* Hero Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              המדריך המקיף לטיול גורילות בפארק הלאומי בווינדי
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Article Header */}
          <header className="mb-12 fade-in">
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                <User className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{post.readTime}</span>
              </div>
            </div>
            
            {/* Excerpt */}
            <div className="bg-gradient-to-r from-primary/5 to-transparent border-r-4 border-primary pr-6 py-4">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                {post.excerpt}
              </p>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg md:prose-xl max-w-none mb-16">
            <div className="text-gray-800 leading-relaxed space-y-6">
              {post.content.split('\n').map((line, index) => {
                if (line.trim() === '') return null;
                
                // Image handling with better styling
                if (line.startsWith('![')) {
                  const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
                  if (imageMatch) {
                    return (
                      <figure key={index} className="my-12">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                          <img
                            src={imageMatch[2]}
                            alt={imageMatch[1]}
                            className="w-full h-auto"
                          />
                        </div>
                        {imageMatch[1] && (
                          <figcaption className="text-center text-sm text-gray-500 mt-4 italic">
                            {imageMatch[1]}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }
                }
                
                // Enhanced headings with better spacing
                if (line.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-4xl md:text-5xl font-bold mb-8 mt-16 text-gray-900 border-b-4 border-primary pb-4">
                      {line.replace('# ', '')}
                    </h1>
                  );
                }
                
                if (line.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl md:text-3xl font-bold mb-6 mt-12 text-gray-900 flex items-center gap-3">
                      <span className="w-2 h-8 bg-primary rounded-full"></span>
                      {line.replace('## ', '')}
                    </h2>
                  );
                }
                
                if (line.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl md:text-2xl font-semibold mb-5 mt-10 text-gray-800">
                      {line.replace('### ', '')}
                    </h3>
                  );
                }
                
                if (line.startsWith('#### ')) {
                  return (
                    <h4 key={index} className="text-xl md:text-2xl font-semibold mb-4 mt-8 text-gray-800">
                      {line.replace('#### ', '')}
                    </h4>
                  );
                }
                
                if (line.startsWith('---')) {
                  return <hr key={index} className="my-12 border-t-2 border-gray-200" />;
                }
                
                // Table handling
                if (line.includes('|') && line.includes('---')) {
                  return null;
                }
                
                if (line.includes('|') && !line.includes('---')) {
                  const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);
                  const isHeader = index === 0 || (index > 0 && cells.some(cell => cell.includes('**')));
                  
                  if (isHeader) {
                    return (
                      <tr key={index} className="bg-gradient-to-l from-primary to-primary/90 text-white">
                        {cells.map((cell, cellIndex) => (
                          <th key={cellIndex} className="px-6 py-4 text-right font-bold text-lg">
                            {cell.replace(/\*\*/g, '')}
                          </th>
                        ))}
                      </tr>
                    );
                  } else {
                    return (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        {cells.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-6 py-4 text-right">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    );
                  }
                }
                
                // List items with enhanced styling and HTML processing
                if (line.startsWith('- ') || line.startsWith('* ')) {
                  const processHTML = (text: string) => {
                    return text
                      .replace(/<b>(.*?)<\/b>/g, '<strong class="font-bold text-primary">$1</strong>')
                      .replace(/<strong>(.*?)<\/strong>/g, '<strong class="font-bold text-primary">$1</strong>');
                  };
                  
                  return (
                    <li key={index} className="mb-3 text-lg leading-relaxed flex items-start gap-3">
                      <span className="text-primary text-2xl leading-none mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: processHTML(line.replace(/^[-*] /, '')) }} />
                    </li>
                  );
                }
                
                if (/^\d+\. /.test(line)) {
                  const number = line.match(/^(\d+)\./)?.[1];
                  const processHTML = (text: string) => {
                    return text
                      .replace(/<b>(.*?)<\/b>/g, '<strong class="font-bold text-primary">$1</strong>')
                      .replace(/<strong>(.*?)<\/strong>/g, '<strong class="font-bold text-primary">$1</strong>');
                  };
                  
                  return (
                    <li key={index} className="mb-3 text-lg leading-relaxed flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {number}
                      </span>
                      <span className="pt-0.5" dangerouslySetInnerHTML={{ __html: processHTML(line.replace(/^\d+\. /, '')) }} />
                    </li>
                  );
                }
                
                // Enhanced paragraphs with HTML processing
                if (line.trim()) {
                  // Process HTML tags in the line
                  const processHTML = (text: string) => {
                    return text
                      .replace(/<b>(.*?)<\/b>/g, '<strong class="font-bold text-primary">$1</strong>')
                      .replace(/<strong>(.*?)<\/strong>/g, '<strong class="font-bold text-primary">$1</strong>');
                  };
                  
                  return (
                    <p 
                      key={index} 
                      className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700"
                      dangerouslySetInnerHTML={{ __html: processHTML(line) }}
                    />
                  );
                }
                
                return null;
              })}
            </div>
          </article>

          {/* Quick Tips Section - Enhanced */}
          <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-10 mb-16 shadow-lg border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">טיפים מהירים לדרך</h3>
            </div>
            <ul className="space-y-4">
              {quickTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-lg text-gray-800 pt-1">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Posts Section - Enhanced */}
          {relatedPosts.length > 0 && (
            <div className="border-t-2 border-gray-200 pt-16 mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                מאמרים שכדאי לקרוא
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed line-clamp-3 flex-1">
                          {relatedPost.excerpt}
                        </p>
                        <div className="mt-4 flex items-center text-primary font-medium">
                          <span>קרא עוד</span>
                          <ArrowRight className="w-4 h-4 mr-2 group-hover:mr-3 transition-all" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}


        </div>
      </div>
    </div>
  );
};

export default BlogPost;