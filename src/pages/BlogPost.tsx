import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import fm from 'front-matter';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
// Optionally: import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    // Dynamically import the markdown file for the post
    const postFiles = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' });
    const filePath = `../posts/${slug}.md`;
    const fileContent = postFiles[filePath];
    if (fileContent) {
      const parsed = fm(fileContent as string);
      const attributes = typeof parsed.attributes === 'object' && parsed.attributes !== null ? parsed.attributes : {};
      setPost({ ...attributes, content: parsed.body });
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="mb-4">Post not found.</p>
        <Link to="/blog" className="text-primary underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="container mx-auto px-4 py-16 max-w-2xl break-words whitespace-normal">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
              <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8">
            <Link to="/blog" className="text-primary underline">← Back to Blog</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPost; 