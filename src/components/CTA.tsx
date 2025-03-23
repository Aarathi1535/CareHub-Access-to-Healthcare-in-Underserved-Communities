
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-radial from-carehub-50/50 via-transparent to-transparent dark:from-carehub-900/20 dark:via-transparent dark:to-transparent -z-10" 
      />
      
      <div className="container max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-2xl overflow-hidden shadow-glass border-white/20 dark:border-slate-800/20"
        >
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Join us in revolutionizing healthcare access
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
              Whether you're a healthcare provider, community health worker, or someone seeking care,
              CareHub provides the tools and connections you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-medium">
                <Link to="/consultations">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium">
                <Link to="/community">Join Our Community</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
