
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Calendar, Users, MapPin, HeartHandshake, User, Briefcase, MessageCircle } from "lucide-react";

// Mock data for demonstration
const mockEvents = [
  {
    id: 1,
    title: "Community Health Workshop",
    date: "August 15, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Village Community Center",
    organizer: "Dr. Sarah Johnson",
    attendees: 32,
    description: "Learn essential health practices and get free basic health checkups from our volunteer medical team."
  },
  {
    id: 2,
    title: "Maternal Care Training",
    date: "August 22, 2023",
    time: "9:00 AM - 12:00 PM",
    location: "Women's Support Center",
    organizer: "Midwife Association",
    attendees: 18,
    description: "Training session for expectant mothers and family members on prenatal care and childbirth preparation."
  },
  {
    id: 3,
    title: "Mobile Clinic Visit",
    date: "August 28, 2023",
    time: "All Day",
    location: "Village Square",
    organizer: "Regional Hospital Outreach",
    attendees: 75,
    description: "The mobile clinic will offer vaccinations, basic treatments, and consultations for all community members."
  }
];

const mockVolunteers = [
  {
    id: 1,
    name: "Dr. James Wilson",
    role: "General Physician",
    avatar: null,
    location: "Visits monthly from Central Hospital",
    bio: "Providing general medical care to rural communities for over 10 years."
  },
  {
    id: 2,
    name: "Nurse Rachel Chen",
    role: "Community Health Nurse",
    avatar: null,
    location: "Based in Village A",
    bio: "Specialized in maternal and child health, conducts regular home visits."
  },
  {
    id: 3,
    name: "Samuel Okafor",
    role: "Community Health Worker",
    avatar: null,
    location: "Serves Villages B and C",
    bio: "Trained in basic healthcare and disease prevention education."
  },
  {
    id: 4,
    name: "Amina Hassan",
    role: "Health Educator",
    avatar: null,
    location: "Mobile across region",
    bio: "Focuses on preventive health education and promoting healthy practices."
  }
];

const EventCard = ({ event }: { event: typeof mockEvents[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-card overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
          
          <div className="space-y-2 mb-4">
            <p className="text-sm flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground/70" />
              {event.date} • {event.time}
            </p>
            <p className="text-sm flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2 text-muted-foreground/70" />
              {event.location}
            </p>
            <p className="text-sm flex items-center text-muted-foreground">
              <User className="h-4 w-4 mr-2 text-muted-foreground/70" />
              Organized by: {event.organizer}
            </p>
            <p className="text-sm flex items-center text-muted-foreground">
              <Users className="h-4 w-4 mr-2 text-muted-foreground/70" />
              {event.attendees} attending
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground mb-6">
            {event.description}
          </p>
          
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="flex-1">
              Learn More
            </Button>
            <Button size="sm" className="flex-1">
              Attend
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const VolunteerCard = ({ volunteer }: { volunteer: typeof mockVolunteers[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-card overflow-hidden h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src={volunteer.avatar || ""} alt={volunteer.name} />
              <AvatarFallback className="bg-carehub-100 text-carehub-700 dark:bg-carehub-800 dark:text-carehub-200">
                {volunteer.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{volunteer.name}</h3>
              <p className="text-sm text-muted-foreground">{volunteer.role}</p>
            </div>
          </div>
          
          <p className="text-sm flex items-center text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground/70" />
            {volunteer.location}
          </p>
          
          <p className="text-sm text-muted-foreground flex-1 mb-4">
            {volunteer.bio}
          </p>
          
          <Button variant="outline" size="sm" className="mt-auto">
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState("events");
  
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
              <h1 className="text-4xl font-bold mb-4">Community Health</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect with health events, volunteers, and initiatives in your community
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Tabs defaultValue="events" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="events" className="text-base py-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    Health Events
                  </TabsTrigger>
                  <TabsTrigger value="volunteers" className="text-base py-3">
                    <HeartHandshake className="h-4 w-4 mr-2" />
                    Healthcare Volunteers
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="events" className="mt-0">
                  <div className="glass-panel rounded-xl p-6 md:p-8 mb-8">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold">Upcoming Health Events</h2>
                      <Button variant="outline">
                        View Calendar
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="volunteers" className="mt-0">
                  <div className="glass-panel rounded-xl p-6 md:p-8 mb-8">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold">Healthcare Volunteers</h2>
                      <Button variant="outline">
                        Become a Volunteer
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockVolunteers.map((volunteer) => (
                      <VolunteerCard key={volunteer.id} volunteer={volunteer} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
