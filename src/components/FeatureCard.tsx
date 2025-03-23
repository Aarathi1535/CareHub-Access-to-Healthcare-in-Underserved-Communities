
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  delay = 0
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "glass-card p-6 rounded-xl flex flex-col h-full", 
        className
      )}
    >
      <div className="p-3 rounded-lg bg-carehub-50 dark:bg-carehub-900/30 w-fit mb-4">
        <Icon className="h-6 w-6 text-carehub-600 dark:text-carehub-400" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
