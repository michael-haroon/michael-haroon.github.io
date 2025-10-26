import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import fm from 'front-matter';
import { Link } from 'react-router-dom';

type Tab = { label: string; value: string; subtitle?: string };
type Post = {
  title?: string;
  excerpt?: string;
  description?: string;
  author?: string;
  date?: string;
  category?: string;
  tags?: string[] | string;
  image?: string;
  content: string;
  slug: string;
};

const formatDate = (dateStr?: string): string => {
  if (!dateStr || typeof dateStr !== 'string') return '—';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return '—';
  const [year, month, day] = parts;
  const yi = parseInt(year);
  const mi = parseInt(month);
  const di = parseInt(day);
  if (Number.isNaN(yi) || Number.isNaN(mi) || Number.isNaN(di)) return '—';
  const date = new Date(yi, mi - 1, di);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const TABS: Tab[] = [
  { label: 'Career', value: 'career' },
  { label: 'Socioeconomic changes', value: 'movements', subtitle: 'challenge the status quo to make our lives better' },
];

const Blog = () => {
  const [selectedTab, setSelectedTab] = useState('career');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically import all markdown files in src/posts
    const postFiles = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' });
    const loadedPosts: Post[] = Object.entries(postFiles).map(([filePath, fileContent]) => {
      const parsed = fm(fileContent as string);
      const data = parsed.attributes as Record<string, unknown>;
      return {
        ...(data as Partial<Post>),
        content: parsed.body,
        slug: filePath.split('/').pop()!.replace('.md', ''),
      };
    });
    // Sort by date descending (handle missing/invalid dates safely)
    const parseDate = (dateStr?: string) => {
      if (!dateStr || typeof dateStr !== 'string') return new Date(0);
      const parts = dateStr.split('-');
      if (parts.length !== 3) return new Date(0);
      const [year, month, day] = parts;
      const yi = parseInt(year);
      const mi = parseInt(month);
      const di = parseInt(day);
      if (Number.isNaN(yi) || Number.isNaN(mi) || Number.isNaN(di)) return new Date(0);
      return new Date(yi, mi - 1, di);
    };
    loadedPosts.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
    setPosts(loadedPosts);
    setLoading(false);
  }, []);

  // For the Career tab, we further group by subcategories (SWE, trading, cybersecurity)
  const isCareer = selectedTab === 'career';
  const filteredPosts = posts.filter(post => {
    if (isCareer) {
      // Accept career subcategories
      const value = String(post.category || '').toLowerCase();
      return value === 'swe' || value === 'trading' || value === 'cybersecurity' || value === 'career';
    }
    return post.category === selectedTab;
  });

  const careerSections: { key: string; title: string }[] = [
    { key: 'trading', title: 'Trading' },
    { key: 'swe', title: 'SWE' },
    { key: 'cybersecurity', title: 'Cybersecurity' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {selectedTab === 'movements'
                ? (TABS.find((t) => t.value === 'movements')?.subtitle ?? 'Thoughts, insights, and lessons learned from my journey.')
                : 'Thoughts, insights, and lessons learned from my journey.'}
            </p>
          </div>
        </section>

        {/* Tabs */}
        <div className="container mx-auto px-4 mb-8 flex justify-center">
          <div className="inline-flex rounded-lg bg-muted p-1 shadow-sm">
            {TABS.map(tab => (
              <button
                key={tab.value}
                className={`px-6 py-2 rounded-lg font-medium focus:outline-none transition-colors duration-200 ${selectedTab === tab.value ? 'bg-background text-primary shadow' : 'text-muted-foreground hover:text-primary'}`}
                onClick={() => setSelectedTab(tab.value)}
                aria-selected={selectedTab === tab.value}
                aria-controls={`tab-panel-${tab.value}`}
                role="tab"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <section className="container mx-auto px-4 pb-16" id={`tab-panel-${selectedTab}`} role="tabpanel">
          {loading ? (
            <div className="col-span-full text-center text-muted-foreground py-12">
              Loading posts...
            </div>
          ) : (
            <>
              {isCareer ? (
                <div className="space-y-12">
                  {careerSections.map(section => {
                    const sectionPosts = filteredPosts.filter(p => String(p.category || '').toLowerCase() === section.key);
                    if (sectionPosts.length === 0) return null;
                    return (
                      <div key={section.key}>
                        <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {sectionPosts.map((post) => (
                            <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                              <div className="aspect-video overflow-hidden">
                                <img 
                                  src={post.image} 
                                  alt={post.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <CardHeader className="pb-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="secondary" className="text-xs">
                                    {section.title}
                                  </Badge>
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Calendar className="h-3 w-3" />
                                    {formatDate(post.date)}
                                  </div>
                                </div>
                                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                                  {post.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-3">
                                  {post.excerpt || post.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="pt-0">
                                <div className="flex items-center justify-end">
                                  <Button variant="ghost" size="sm" className="group-hover:text-primary" asChild>
                                    <Link to={`/blog/${post.slug}`}>
                                      Read More
                                      <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                  </Button>
                                </div>
                                <div className="flex flex-wrap gap-1 mt-3">
                                  {post.tags && (Array.isArray(post.tags) ? post.tags : [post.tags])
                                    .slice(0, 2)
                                    .map((tag) => (
                                      <Badge 
                                        key={tag} 
                                        variant={tag === 'About Me' ? 'default' : 'outline'} 
                                        className={`text-xs ${tag === 'About Me' ? 'bg-purple-600 hover:bg-purple-700 text-white' : ''}`}
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.length === 0 ? (
                    <div className="col-span-full text-center text-muted-foreground py-12">
                      No posts yet in this section.
                    </div>
                  ) : (
                    filteredPosts.map((post) => (
                      <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader className="pb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                            </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.date)}
                          </div>
                          </div>
                          <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-3">
                            {post.excerpt || post.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-end">
                            <Button variant="ghost" size="sm" className="group-hover:text-primary" asChild>
                              <Link to={`/blog/${post.slug}`}>
                                Read More
                                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {post.tags && (Array.isArray(post.tags) ? post.tags : [post.tags])
                              .slice(0, 2)
                              .map((tag) => (
                                <Badge 
                                  key={tag} 
                                  variant={tag === 'About Me' ? 'default' : 'outline'} 
                                  className={`text-xs ${tag === 'About Me' ? 'bg-purple-600 hover:bg-purple-700 text-white' : ''}`}
                                >
                                  {tag}
                                </Badge>
                              ))}
                          </div>
                          {/* Optionally render a preview of the markdown content */}
                          {/* <div className="mt-2 text-sm text-muted-foreground line-clamp-2">
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                          </div> */}
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              )}
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Blog; 