
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          I graduated from UC Berkeley in 2024
        </div>
      </div>
    </section>
  );
};

export default About;
