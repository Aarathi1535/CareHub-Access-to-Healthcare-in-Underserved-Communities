
import FeatureCard from "./FeatureCard";
import { Video, MapPin, BookOpen, Activity, Stethoscope, Users } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Virtual Consultations",
      description: "Connect with healthcare professionals remotely through secure video calls, reducing travel time and costs."
    },
    {
      icon: MapPin,
      title: "Resource Locator",
      description: "Find nearby healthcare facilities, pharmacies, and mobile clinics that serve your community."
    },
    {
      icon: BookOpen,
      title: "Health Education",
      description: "Access educational content about preventive care, disease management, and healthy living practices."
    },
    {
      icon: Activity,
      title: "Symptom Checker",
      description: "Get preliminary insights about your symptoms and guidance on when to seek professional care."
    },
    {
      icon: Stethoscope,
      title: "Follow-up Care",
      description: "Manage your treatment plan and receive reminders for medication and follow-up appointments."
    },
    {
      icon: Users,
      title: "Community Health",
      description: "Connect with community health workers and volunteers providing support in your area."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bridging the Healthcare Gap
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform offers essential services to connect underserved communities 
            with quality healthcare resources and providers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
