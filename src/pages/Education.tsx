
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { BookOpen, Search, Download, Heart, Thermometer, Baby, Stethoscope, Brain, Filter } from "lucide-react";

// Mock data for demonstration
const mockResources = [
  {
    id: 1,
    title: "Understanding Preventive Healthcare",
    category: "preventive",
    format: "article",
    thumbnail: "preventive.jpg",
    downloadable: true,
    description: "Learn about essential preventive healthcare practices that can help avoid common illnesses and maintain wellbeing."
  },
  {
    id: 2,
    title: "Maternal and Child Nutrition Guide",
    category: "maternal",
    format: "guide",
    thumbnail: "maternal.jpg",
    downloadable: true,
    description: "Essential nutritional information for pregnant women and young children to ensure healthy development."
  },
  {
    id: 3,
    title: "Recognizing Common Disease Symptoms",
    category: "disease",
    format: "video",
    thumbnail: "symptoms.jpg",
    downloadable: false,
    description: "Visual guide to help identify symptoms of common diseases prevalent in rural communities."
  },
  {
    id: 4,
    title: "Mental Health Awareness and Support",
    category: "mental",
    format: "article",
    thumbnail: "mental.jpg",
    downloadable: true,
    description: "Understanding mental health issues, reducing stigma, and finding support in limited-resource settings."
  },
  {
    id: 5,
    title: "First Aid Basics",
    category: "preventive",
    format: "guide",
    thumbnail: "firstaid.jpg",
    downloadable: true,
    description: "Step-by-step instructions for basic first aid procedures that can be crucial before professional help arrives."
  },
  {
    id: 6,
    title: "Vaccination Schedule for Children",
    category: "maternal",
    format: "infographic",
    thumbnail: "vaccination.jpg",
    downloadable: true,
    description: "Complete immunization schedule for children with explanations of each vaccine's importance."
  },
  {
    id: 7,
    title: "Managing Chronic Conditions",
    category: "disease",
    format: "article",
    thumbnail: "chronic.jpg",
    downloadable: true,
    description: "Guidance for patients with diabetes, hypertension, and other chronic conditions in limited-resource settings."
  },
  {
    id: 8,
    title: "Stress Management Techniques",
    category: "mental",
    format: "audio",
    thumbnail: "stress.jpg",
    downloadable: true,
    description: "Simple stress-reduction practices that can be implemented in daily life without special equipment."
  }
];

const categoryIcons = {
  preventive: <Heart className="h-5 w-5" />,
  disease: <Stethoscope className="h-5 w-5" />,
  maternal: <Baby className="h-5 w-5" />,
  mental: <Brain className="h-5 w-5" />
};

const formatLabels = {
  article: { label: "Article", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
  guide: { label: "Guide", color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" },
  video: { label: "Video", color: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300" },
  infographic: { label: "Infographic", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300" },
  audio: { label: "Audio", color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300" }
};

const ResourceCard = ({ resource }: { resource: typeof mockResources[0] }) => {
  const categoryIcon = resource.category in categoryIcons 
    ? categoryIcons[resource.category as keyof typeof categoryIcons] 
    : <Thermometer className="h-5 w-5" />;
    
  const format = resource.format in formatLabels 
    ? formatLabels[resource.format as keyof typeof formatLabels] 
    : { label: resource.format, color: "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300" };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="glass-card h-full flex flex-col overflow-hidden">
        <div className="relative h-48 bg-muted">
          <div className="absolute inset-0 flex items-center justify-center bg-carehub-100 dark:bg-carehub-900/50">
            <BookOpen className="h-16 w-16 text-carehub-400" />
          </div>
          <div className="absolute top-3 right-3">
            <span className={`text-xs px-2.5 py-1 rounded-full ${format.color}`}>
              {format.label}
            </span>
          </div>
        </div>
        
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center mb-3">
            <div className="p-1.5 rounded-md bg-carehub-50 dark:bg-carehub-900/30 mr-2">
              {categoryIcon}
            </div>
            <p className="text-sm font-medium capitalize">
              {resource.category === 'maternal' ? 'Maternal & Child Health' : 
               resource.category === 'mental' ? 'Mental Health' :
               resource.category === 'disease' ? 'Disease Management' : 
               'Preventive Care'}
            </p>
          </div>
          
          <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
          
          <p className="text-muted-foreground text-sm mb-4 flex-1">
            {resource.description}
          </p>
          
          <div className="flex gap-3 mt-auto">
            <Button variant="outline" size="sm" className="flex-1">
              View
            </Button>
            {resource.downloadable && (
              <Button size="sm" className="flex-1 gap-1">
                <Download className="h-4 w-4" />
                Download
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Education = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeTab === "all" || resource.category === activeTab;
    
    return matchesSearch && matchesCategory;
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
              <h1 className="text-4xl font-bold mb-4">Health Education</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Access educational resources to learn about preventive care, disease management, and healthy living
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-10"
            >
              <div className="glass-panel rounded-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      placeholder="Search for health topics..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <Button className="md:w-auto">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 mb-6">
                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                  <div className="flex items-center mb-4">
                    <Filter className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span className="text-sm font-medium mr-4">Filter by category:</span>
                    <TabsList className="bg-muted/50">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="preventive" className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span className="hidden sm:inline">Preventive</span>
                      </TabsTrigger>
                      <TabsTrigger value="maternal" className="flex items-center gap-1">
                        <Baby className="h-4 w-4" />
                        <span className="hidden sm:inline">Maternal</span>
                      </TabsTrigger>
                      <TabsTrigger value="disease" className="flex items-center gap-1">
                        <Stethoscope className="h-4 w-4" />
                        <span className="hidden sm:inline">Disease</span>
                      </TabsTrigger>
                      <TabsTrigger value="mental" className="flex items-center gap-1">
                        <Brain className="h-4 w-4" />
                        <span className="hidden sm:inline">Mental</span>
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="all" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredResources.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))}
                      
                      {filteredResources.length === 0 && (
                        <div className="col-span-full text-center py-12">
                          <p className="text-muted-foreground text-lg">No resources found matching your search.</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  {/* Other tab content will display the same grid based on filtered data */}
                  {["preventive", "maternal", "disease", "mental"].map(tab => (
                    <TabsContent key={tab} value={tab} className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredResources.map((resource) => (
                          <ResourceCard key={resource.id} resource={resource} />
                        ))}
                        
                        {filteredResources.length === 0 && (
                          <div className="col-span-full text-center py-12">
                            <p className="text-muted-foreground text-lg">No resources found matching your search.</p>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
