
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "CareHub has transformed healthcare access in our rural community. Now we can consult with specialists without traveling hours to the city.",
    author: "Maria Hernandez",
    role: "Community Leader, Rural Highlands",
    avatarSrc: null,
  },
  {
    quote: "As a community health worker, this platform has empowered me to coordinate care more effectively. The educational resources help me better serve my community.",
    author: "James Okonkwo",
    role: "Community Health Worker",
    avatarSrc: null,
  },
  {
    quote: "I was able to get a virtual second opinion for my mother's condition that confirmed she needed urgent care. CareHub literally saved her life.",
    author: "Aisha Rahman",
    role: "Family Caregiver",
    avatarSrc: null,
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background element */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-carehub-50/50 to-transparent dark:from-carehub-950/20 dark:to-transparent -z-10" 
        aria-hidden="true"
      />
      
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Stories, Real Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how CareHub is making a difference in communities around the world.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "glass-card p-6 rounded-xl flex flex-col",
                index === 1 ? "md:-mt-8" : ""
              )}
            >
              <div className="mb-4">
                <svg
                  className="h-8 w-8 text-carehub-300 dark:text-carehub-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="flex-1 text-foreground mb-4 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-carehub-100 dark:bg-carehub-800 flex items-center justify-center text-carehub-600 dark:text-carehub-200 font-medium">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
