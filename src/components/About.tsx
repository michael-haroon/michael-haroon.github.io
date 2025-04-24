
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              [Your brief professional bio here. Talk about your experience, skills, and what drives you. 
              Keep it concise but engaging, highlighting your key achievements and areas of expertise.]
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Skill 1</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Skill 2</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Skill 3</span>
              {/* Add more skills as needed */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
