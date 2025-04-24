
import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Your Name</h1>
        <nav className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
