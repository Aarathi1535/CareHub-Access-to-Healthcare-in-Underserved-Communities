
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search, Phone, Clock, Stethoscope, Building, Pill } from "lucide-react";
import { motion } from "framer-motion";

// Mock data for demonstration
const mockResources = [
  {
    id: 1,
    name: "Community Health Center",
    type: "clinic",
    distance: "2.3 miles",
    address: "123 Main Street, Village A",
    phone: "+1 234-567-8901",
    hours: "Mon-Fri: 8am-5pm",
    services: ["Primary Care", "Vaccination", "Prenatal Care"],
    available: true
  },
  {
    id: 2,
    name: "Mobile Medical Unit",
    type: "mobile",
    distance: "1.5 miles",
    address: "Village Square, Village B",
    schedule: "Every Tuesday, 9am-3pm",
    services: ["Basic Health Checkups", "Medication Refills", "Health Education"],
    available: true
  },
  {
    id: 3,
    name: "Rural Pharmacy",
    type: "pharmacy",
    distance: "3.1 miles",
    address: "45 River Road, Village C",
    phone: "+1 234-567-8902",
    hours: "Mon-Sat: 9am-7pm",
    services: ["Prescription Filling", "Basic Medications", "First Aid Supplies"],
    available: true
  },
  {
    id: 4,
    name: "Regional Hospital",
    type: "hospital",
    distance: "12.7 miles",
    address: "789 Health Avenue, Town Center",
    phone: "+1 234-567-8903",
    hours: "24/7",
    services: ["Emergency Care", "Surgery", "Specialized Treatment"],
    available: true
  },
  {
    id: 5,
    name: "Women's Health Center",
    type: "clinic",
    distance: "5.4 miles",
    address: "56 Cedar Lane, Village D",
    phone: "+1 234-567-8904",
    hours: "Mon-Fri: 8am-4pm",
    services: ["Prenatal Care", "Family Planning", "Women's Health Services"],
    available: true
  }
];

const ResourceCard = ({ resource }: { resource: typeof mockResources[0] }) => {
  const getIcon = () => {
    switch (resource.type) {
      case 'clinic':
        return <Stethoscope className="h-5 w-5" />;
      case 'hospital':
        return <Building className="h-5 w-5" />;
      case 'pharmacy':
        return <Pill className="h-5 w-5" />;
      case 'mobile':
        return <MapPin className="h-5 w-5" />;
      default:
        return <Building className="h-5 w-5" />;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-carehub-50 dark:bg-carehub-900/30 mr-3">
              {getIcon()}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{resource.name}</h3>
              <p className="text-sm text-muted-foreground flex items-center">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                {resource.distance} away
              </p>
            </div>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2.5 py-1 rounded-full">
            Available
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <p className="text-sm flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground/70" />
            {resource.address}
          </p>
          {resource.phone && (
            <p className="text-sm flex items-center text-muted-foreground">
              <Phone className="h-4 w-4 mr-2 text-muted-foreground/70" />
              {resource.phone}
            </p>
          )}
          {(resource.hours || resource.schedule) && (
            <p className="text-sm flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-2 text-muted-foreground/70" />
              {resource.hours || resource.schedule}
            </p>
          )}
        </div>
        
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Services:</p>
          <div className="flex flex-wrap gap-2">
            {resource.services.map((service, index) => (
              <span 
                key={index}
                className="text-xs px-2.5 py-1 rounded-full bg-carehub-100 dark:bg-carehub-900/40 text-carehub-800 dark:text-carehub-300"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1">
            Details
          </Button>
          <Button size="sm" className="flex-1">
            Get Directions
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [resourceType, setResourceType] = useState<string>("all");
  
  // Filter resources based on search and filter criteria
  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = resourceType === "all" || resource.type === resourceType;
    
    return matchesSearch && matchesType;
  });
  
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
              <h1 className="text-4xl font-bold mb-4">Healthcare Resources</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find healthcare facilities, pharmacies, and services near you
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel rounded-xl p-6 md:p-8 mb-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-3 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search for healthcare services, facilities..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <div className="md:col-span-1">
                  <Select value={resourceType} onValueChange={setResourceType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Resource Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Resources</SelectItem>
                      <SelectItem value="clinic">Clinics</SelectItem>
                      <SelectItem value="hospital">Hospitals</SelectItem>
                      <SelectItem value="pharmacy">Pharmacies</SelectItem>
                      <SelectItem value="mobile">Mobile Units</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-1">
                  <Button className="w-full">
                    Search
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
              
              {filteredResources.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground text-lg">No resources found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
