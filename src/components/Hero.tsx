
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-16 pb-10 px-4 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-carehub-100/50 to-transparent dark:from-carehub-950/30 dark:to-transparent -z-10" 
        aria-hidden="true"
      />
      
      {/* Main content */}
      <div className="container max-w-6xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-carehub-100 text-carehub-800 dark:bg-carehub-900/50 dark:text-carehub-200">
            Bridging Healthcare Gaps
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration:.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance"
        >
          <span>Making Quality Healthcare </span>
          <span className="text-gradient">Accessible to All</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-3xl mb-10 text-balance"
        >
          CareHub connects underserved communities with healthcare resources, providers, 
          and education—empowering better health outcomes even in remote areas.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <Button asChild size="lg" className="text-base font-medium">
            <Link to="/consultations">
              Start a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base font-medium">
            <Link to="/resources">
              Find Healthcare Resources
            </Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Visual elements */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" 
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
