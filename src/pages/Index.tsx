import { useEffect } from "react";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import ReviewsSection from "../components/ReviewsSection";
import GuidesSection from "../components/GuidesSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Widget Tracker Code
    (function(w: any, i: string, d: Document, g: string, e: any, t: any) {
      w["WidgetTrackerObject"] = g;
      (w[g] = w[g] || function() {
        (w[g].q = w[g].q || []).push(arguments);
      }), (w[g].ds = 1 * new Date().getTime());
      e = "script";
      t = d.createElement(e);
      e = d.getElementsByTagName(e)[0];
      t.async = true;
      t.src = i;
      e.parentNode?.insertBefore(t, e);
    })(window, "https://widgetbe.com/agent", document, "widgetTracker", "", "");
    
    (window as any).widgetTracker("create", "WT-NSXCSRHG");
    (window as any).widgetTracker("send", "pageview");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutSection />
        <ReviewsSection />
        <GuidesSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
