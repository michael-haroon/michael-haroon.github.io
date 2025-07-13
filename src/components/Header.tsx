
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold hover:text-primary transition-colors">
          Michael Haroon
        </Link>
        <nav className="flex items-center gap-6">
          <div className="flex gap-2">
            <Button 
              variant={isActive('/') ? "default" : "ghost"} 
              size="sm" 
              asChild
            >
              <Link to="/">Home</Link>
            </Button>
            <Button 
              variant={isActive('/portfolio') ? "default" : "ghost"} 
              size="sm" 
              asChild
            >
              <Link to="/portfolio">Portfolio</Link>
            </Button>
            <Button 
              variant={isActive('/blog') ? "default" : "ghost"} 
              size="sm" 
              asChild
            >
              <Link to="/blog">Blog</Link>
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/michael-haroon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/michael-haroon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
