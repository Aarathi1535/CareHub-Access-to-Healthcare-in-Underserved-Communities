
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, MessageCircle, FileText, Activity, ChevronRight } from "lucide-react";

const Consultations = () => {
  const [consultationType, setConsultationType] = useState<string | undefined>();
  
  const consultationTypes = [
    {
      id: "video",
      icon: Video,
      title: "Video Consultation",
      description: "Speak with a healthcare provider face-to-face through secure video"
    },
    {
      id: "chat",
      icon: MessageCircle,
      title: "Chat Consultation",
      description: "Text-based consultation for basic healthcare questions"
    },
    {
      id: "records",
      icon: FileText,
      title: "Medical Records Review",
      description: "Have a doctor review your existing medical records"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 pb-16">
        <section className="px-4 py-16">
          <div className="container max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold mb-4">Virtual Consultations</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect with healthcare providers from anywhere, reducing barriers of distance and travel.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {consultationTypes.map((type, index) => {
                const Icon = type.icon;
                const isSelected = consultationType === type.id;
                
                return (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card 
                      className={`glass-card h-full cursor-pointer transition-all duration-300 ${
                        isSelected 
                          ? "ring-2 ring-carehub-500 dark:ring-carehub-400" 
                          : "hover:scale-[1.02]"
                      }`}
                      onClick={() => setConsultationType(type.id)}
                    >
                      <div className="p-6 flex flex-col h-full">
                        <div className="p-3 rounded-lg bg-carehub-50 dark:bg-carehub-900/30 w-fit mb-4">
                          <Icon className="h-6 w-6 text-carehub-600 dark:text-carehub-400" />
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                        <p className="text-muted-foreground mb-4">{type.description}</p>
                        
                        <div className="mt-auto">
                          <Button 
                            variant={isSelected ? "default" : "ghost"} 
                            className="w-full justify-between group"
                            onClick={() => setConsultationType(type.id)}
                          >
                            {isSelected ? "Selected" : "Select"}
                            <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
            
            {consultationType && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
                className="glass-panel rounded-xl p-6 md:p-8 max-w-3xl mx-auto overflow-hidden"
              >
                <h2 className="text-2xl font-semibold mb-6">Schedule Your Consultation</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Medical Specialty</Label>
                      <Select>
                        <SelectTrigger id="specialty">
                          <SelectValue placeholder="Select specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Medicine</SelectItem>
                          <SelectItem value="pediatrics">Pediatrics</SelectItem>
                          <SelectItem value="obgyn">Obstetrics & Gynecology</SelectItem>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="mental-health">Mental Health</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="symptoms">Describe Your Symptoms</Label>
                    <Textarea 
                      id="symptoms" 
                      placeholder="Please describe why you're seeking a consultation" 
                      rows={4} 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Preferred Date
                      </Label>
                      <Input id="date" type="date" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Preferred Time
                      </Label>
                      <Input id="time" type="time" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button type="submit" size="lg">
                      Request Consultation
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consultations;
