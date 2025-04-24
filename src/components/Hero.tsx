
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Hello, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          A passionate [Your Role] specialized in [Your Expertise]
        </p>
        <div className="flex gap-4 justify-center animate-fade-in">
          <Button asChild>
            <a href="#about">About Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:your.email@example.com">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
