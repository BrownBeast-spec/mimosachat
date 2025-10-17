import { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Index from "./pages/Index";
import Mobile from "./pages/Mobile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (ScrollSmoother.get()) ScrollSmoother.get().kill();

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2, 
      effects: true,
      normalizeScroll: true,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <Header />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/mobile" element={<Mobile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
