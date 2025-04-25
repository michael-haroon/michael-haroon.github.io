import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Hello, I'm <span className="text-primary">Michael Haroon</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          A passionate Developer specialized in Software Engineering
        </p>
        <div className="flex gap-4 justify-center animate-fade-in">
          <Button asChild>
            <a href="#about">About Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:mrharoon@berkeley.edu">Contact Me</a>
          </Button>
        </div>
        <div className="flex justify-center gap-4 mt-6 animate-fade-in">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/michael-haroon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/michael-haroon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:mrharoon@berkeley.edu" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://kaggle.com/michaelharoon" target="_blank" rel="noopener noreferrer" aria-label="Kaggle">
              <span className="font-bold text-sm">Kaggle</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
