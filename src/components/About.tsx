
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">UC Berkeley</h3>
                    <p className="text-muted-foreground">Bachelor of Arts, Applied Mathematics</p>
                  </div>
                  <Badge variant="secondary">2024</Badge>
                </div>
                <p className="text-sm text-muted-foreground">My biggest interests are optimization and ML Infra. I was a research assistant, lab mentor, and IT tech.</p>

              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">Long Beach City College</h3>
                    <p className="text-muted-foreground">Associate's Degree, Mathematics</p>
                  </div>
                  <Badge variant="outline">2022</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  I was a tutor and student rep on a hiring committee. I was recognized as one of the best math students for the year 2020-2021, 
                  and I was commended for my skills, contributions, and performance
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Interests Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Interests & Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* <div>
                <h3 className="font-semibold mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                   TODO 
                </div>
              </div> */}
              
              <div>
                <h3 className="font-semibold mb-2">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  Lately, I have been exploring ML infra open-source. I've helped flag issues that should be closed.
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Personal Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <p>I am an avid gym goer and Olympic lifting newbie. I love games and fair competition.</p>
                  <p>I also follow news on wealth inequality and economics.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
