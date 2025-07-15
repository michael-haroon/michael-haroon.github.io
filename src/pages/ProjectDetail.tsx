import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Globe } from 'lucide-react';
import fm from 'front-matter';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    // Dynamically import the markdown file for the project
    const projectFiles = import.meta.glob('../projects/*.md', { eager: true, query: '?raw', import: 'default' });
    const filePath = `../projects/${slug}.md`;
    const fileContent = projectFiles[filePath];
    if (fileContent) {
      const parsed = fm(fileContent as string);
      const attributes = typeof parsed.attributes === 'object' && parsed.attributes !== null ? parsed.attributes : {};
      setProject({ ...attributes, content: parsed.body });
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="mb-4">Project not found.</p>
        <Link to="/portfolio" className="text-primary underline">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="container mx-auto px-4 py-16 max-w-2xl">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                {project.featured && (
                  <Badge variant="default" className="bg-primary text-xs">Featured</Badge>
                )}
              </div>
              <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
              <CardDescription className="mb-2">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies?.map((tech: string) => (
                  <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                ))}
              </div>
              <div className="flex gap-2 mb-2">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary underline">
                    <Github className="h-4 w-4 mr-1" /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary underline">
                    <Globe className="h-4 w-4 mr-1" /> Live Demo
                  </a>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{project.content}</ReactMarkdown>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8">
            <Link to="/portfolio" className="text-primary underline">← Back to Portfolio</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail; 