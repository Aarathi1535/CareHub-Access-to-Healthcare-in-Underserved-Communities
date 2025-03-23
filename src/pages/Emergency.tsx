
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Phone, Milestone, AlertTriangle, MapPin, Heart, Thermometer, Pill, Clock } from "lucide-react";

const EmergencyContact = ({ 
  icon: Icon, 
  label, 
  contact, 
  description 
}: { 
  icon: React.ElementType; 
  label: string; 
  contact: string; 
  description: string;
}) => {
  return (
    <Card className="glass-card">
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-semibold">{label}</h3>
        </div>
        <p className="text-2xl font-bold mb-2">{contact}</p>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
          <Phone className="h-4 w-4 mr-2" />
          Call Now
        </Button>
      </div>
    </Card>
  );
};

const EmergencyInfo = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex gap-3">
      <div className="p-2 h-fit rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Emergency = () => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  
  const handleGetLocation = () => {
    setUseCurrentLocation(true);
    setLocation("Using your current location");
    // In a real app, would use the browser's geolocation API
  };
  
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
              <div className="inline-flex items-center justify-center p-2 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Emergency Assistance</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get immediate help during medical emergencies
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 order-2 lg:order-1"
              >
                <Card className="glass-panel p-6 md:p-8">
                  <h2 className="text-2xl font-semibold mb-6">Request Emergency Help</h2>
                  
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="location">Your Location</Label>
                      <div className="flex gap-3">
                        <Input 
                          id="location" 
                          placeholder="Enter your location" 
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          disabled={useCurrentLocation}
                          className="flex-1"
                        />
                        <Button 
                          type="button" 
                          variant={useCurrentLocation ? "default" : "outline"}
                          onClick={handleGetLocation}
                          className="flex-shrink-0"
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          Current Location
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="emergency-description">Emergency Description</Label>
                      <Textarea 
                        id="emergency-description" 
                        placeholder="Briefly describe the emergency situation" 
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                    >
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Send Emergency Request
                    </Button>
                  </form>
                  
                  <div className="mt-8 space-y-5">
                    <h3 className="font-semibold">While Waiting for Help:</h3>
                    
                    <EmergencyInfo 
                      icon={Clock}
                      title="Stay Calm and Monitor"
                      description="Keep the patient calm and monitor vital signs. Note any changes in condition."
                    />
                    
                    <EmergencyInfo 
                      icon={Heart}
                      title="Basic First Aid"
                      description="Apply basic first aid if trained. For severe bleeding, apply pressure with clean cloth."
                    />
                    
                    <EmergencyInfo 
                      icon={Thermometer}
                      title="Manage Temperature"
                      description="For high fever, use cool compresses. For shock, keep the person warm and elevate legs if possible."
                    />
                    
                    <EmergencyInfo 
                      icon={Pill}
                      title="Medication Information"
                      description="Have information ready about any medications the person is taking or allergies they have."
                    />
                  </div>
                </Card>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 order-1 lg:order-2"
              >
                <EmergencyContact 
                  icon={Phone}
                  label="Emergency Hotline"
                  contact="911"
                  description="National emergency number for immediate assistance"
                />
                
                <EmergencyContact 
                  icon={Milestone}
                  label="Local Health Center"
                  contact="+1 234-567-8901"
                  description="Community healthcare facility - available 24/7"
                />
                
                <EmergencyContact 
                  icon={AlertTriangle}
                  label="Poison Control"
                  contact="+1 800-222-1222"
                  description="For cases of poisoning or exposure to toxic substances"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Emergency;
