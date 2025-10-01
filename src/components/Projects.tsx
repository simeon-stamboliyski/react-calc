import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB featuring user authentication, payment integration, and inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800',
    link: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard that displays current conditions and forecasts using external APIs with beautiful data visualizations.',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <a
                    href={project.link}
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
