
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Home, Users, BookOpen, MapPin, MessageSquare, AlertCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/consultations", label: "Consultations", icon: MessageSquare },
    { href: "/resources", label: "Resources", icon: MapPin },
    { href: "/education", label: "Education", icon: BookOpen },
    { href: "/community", label: "Community", icon: Users },
    { href: "/emergency", label: "Emergency", icon: AlertCircle },
  ];

  return (
    <header className="fixed top-0 w-full z-50 px-4 md:px-6 py-3 glass-panel shadow-subtle">
      <div className="container flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight animate-fade-in"
        >
          <span className="text-carehub-600">Care</span>
          <span className="text-carehub-800">Hub</span>
        </Link>

        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              className="z-20"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            {isOpen && (
              <div className="fixed inset-0 bg-background/80 backdrop-blur-sm animate-fade-in z-10">
                <nav className="fixed top-16 inset-x-0 h-[calc(100vh-4rem)] p-6 pt-10 flex flex-col items-center gap-8 animate-slide-up">
                  {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = location.pathname === link.href;
                    
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={cn(
                          "flex items-center gap-2 text-lg font-medium transition-all duration-200",
                          isActive 
                            ? "text-carehub-600" 
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-1">
            {links.map((link, index) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.href;
              
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md flex items-center gap-2 font-medium transition-all duration-200 animate-fade-in",
                    isActive 
                      ? "text-carehub-600 bg-carehub-50 dark:bg-carehub-950/30" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  )}
                  style={{ 
                    animationDelay: `${(index + 1) * 50}ms`,
                    animationFillMode: 'backwards'
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
