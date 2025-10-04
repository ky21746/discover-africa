import React from 'react';
import { useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import BwindiBlogPost from '../components/Blog/BwindiBlogPost';
import MurchisonFallsBlogPost from '../components/Blog/MurchisonFallsBlogPost';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Render the appropriate blog post component based on the slug
  const renderBlogPost = () => {
    switch (slug) {
      case 'bwindi-gorilla-trekking-guide':
        return <BwindiBlogPost />;
      case 'murchison-falls-safari-guide':
        return <MurchisonFallsBlogPost />;
      default:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">מאמר לא נמצא</h1>
              <p className="text-gray-600 mb-8">המאמר שחיפשת לא קיים במערכת.</p>
              <a 
                href="/blog" 
                className="bg-[#CAA131] text-white px-6 py-3 rounded-lg hover:bg-[#B8912A] transition-colors"
              >
                חזור לבלוג
              </a>
            </div>
          </div>
        );
    }
  };

  return (
    <HelmetProvider>
      {renderBlogPost()}
    </HelmetProvider>
  );
};

export default BlogPost;