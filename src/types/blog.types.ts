// Blog post types for Discover Africa blog system

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  featuredImage?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  readingTime?: number; // in minutes
  isPublished: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon?: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  bio: string;
  avatar?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  color: string;
}

export interface BlogPostMeta {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  category: string;
}

export interface BlogPostProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
  author?: BlogAuthor;
}

export interface BlogListProps {
  posts: BlogPost[];
  categories: BlogCategory[];
  tags: BlogTag[];
  currentCategory?: string;
  currentTag?: string;
  searchQuery?: string;
}

export interface BlogFilters {
  category?: string;
  tag?: string;
  search?: string;
  sortBy?: 'date' | 'title' | 'readingTime';
  sortOrder?: 'asc' | 'desc';
}
