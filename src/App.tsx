
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Consultations from "./pages/Consultations";
import Resources from "./pages/Resources";
import Education from "./pages/Education";
import Community from "./pages/Community";
import Emergency from "./pages/Emergency";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Add framer-motion for smooth page transitions
const queryClient = new QueryClient();

const App = () => {
  // Smooth page transitions
  useEffect(() => {
    // Preload fonts and critical resources
    document.body.classList.add("font-sans");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/consultations" element={<Consultations />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/education" element={<Education />} />
              <Route path="/community" element={<Community />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
