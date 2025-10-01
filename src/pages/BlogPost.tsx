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


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-[45rem] mb-10 rounded-xl overflow-hidden">
        {/* רקע תמונה – החלף לכתובת רלוונטית */}
        <img
          src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FGorillas%20in%20Bwindi%20Forest%2FGorilla%20family%20with%20silverback%20in%20Bwindi%20Impenetrable%20Forest%2C%20Uganda%2C%20Africa.webp?alt=media&token=6afb4c11-7cfa-4c28-a29e-d41dea9634ac"
          alt="Gorilla Trekking Bwindi Impenetrable National Park"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* שכבת כהות */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* טקסט על התמונה */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Gorilla Trekking Uganda – פארק בווינדי
          </h1>
          <p className="max-w-2xl text-lg md:text-xl">
            מסע אל לב הבלתי חדיר – חוויה עוצרת נשימה במפגש עם גורילות ההרים
          </p>
        </div>
      </section>

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
                    <h2 key={index} className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-gray-900">
                      {line.replace('## ', '')}
                    </h2>
                  );
                }
                
                if (line.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-8 mb-4 text-gray-800">
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
                
                // HTML div handling for tables
                if (line.includes('<div className="overflow-x-auto my-12">')) {
                  // Find the closing </div> tag
                  let tableContent = '';
                  let i = index;
                  while (i < post.content.split('\n').length) {
                    const currentLine = post.content.split('\n')[i];
                    tableContent += currentLine + '\n';
                    if (currentLine.includes('</div>')) {
                      break;
                    }
                    i++;
                  }
                  
                  return (
                    <div key={index} dangerouslySetInnerHTML={{ __html: tableContent }} />
                  );
                }
                
                // Skip lines that are part of the HTML table
                if (line.includes('<table') || line.includes('<thead') || line.includes('<tbody') || 
                    line.includes('<tr') || line.includes('<th') || line.includes('<td') || 
                    line.includes('</table>') || line.includes('</thead>') || line.includes('</tbody>') || 
                    line.includes('</tr>') || line.includes('</th>') || line.includes('</td>') ||
                    line.includes('</div>') && line.includes('overflow-x-auto')) {
                  return null;
                }
                
                // Table handling
                if (line.includes('|') && line.includes('---')) {
                  return null;
                }
                
                if (line.includes('|') && !line.includes('---')) {
                  const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);
                  
                  // Check if this is the first row (header)
                  const isFirstRow = index === 0;
                  
                  if (isFirstRow) {
                    return (
                      <div key={index} className="overflow-x-auto mb-12">
                        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                          <thead className="bg-primary text-white">
                            <tr>
                              {cells.map((cell, cellIndex) => (
                                <th key={cellIndex} className="px-4 py-3 text-right font-bold">
                                  {cell}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              {cells.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-4 py-3 text-right">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    );
                  } else {
                    return (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        {cells.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 text-right">
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
                    return text;
                  };
                  
                  return (
                    <li key={index} className="mb-3 text-lg leading-relaxed flex items-start gap-3">
                      <span className="text-primary text-2xl leading-none mt-1">•</span>
                      <span>{line.replace(/^[-*] /, '')}</span>
                    </li>
                  );
                }
                
                if (/^\d+\. /.test(line)) {
                  const number = line.match(/^(\d+)\./)?.[1];
                  const processHTML = (text: string) => {
                    return text;
                  };
                  
                  return (
                    <li key={index} className="mb-3 text-lg leading-relaxed flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {number}
                      </span>
                      <span className="pt-0.5">{line.replace(/^\d+\. /, '')}</span>
                    </li>
                  );
                }
                
                // Handle images
                if (line.match(/^!\[.*\]\(.*\)$/)) {
                  const match = line.match(/^!\[(.*?)\]\((.*?)\)$/);
                  if (match) {
                    const [, alt, src] = match;
                    return (
                      <div key={index} className="my-8">
                        <img 
                          src={src} 
                          alt={alt} 
                          className="w-full h-auto rounded-lg shadow-lg"
                        />
                      </div>
                    );
                  }
                }
                
                // Enhanced paragraphs
                if (line.trim()) {
                  return (
                    <p 
                      key={index} 
                      className="text-lg leading-relaxed mb-6 text-gray-700"
                    >
                      {line}
                    </p>
                  );
                }
                
                return null;
              })}
            </div>
          </article>


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