import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <Avatar className="w-32 h-32 mx-auto mb-6">
          <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" alt="Profile" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hello, I'm Jane Doe
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A passionate full-stack developer specializing in React and modern web technologies. 
          I love creating beautiful, functional applications that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default Hero;
