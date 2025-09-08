import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shift from "./pages/Shift";
import NotFound from "./pages/NotFound";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StyleGuide from "./pages/StyleGuide";
import "./App.css";
import VistaFramework from "./pages/VistaFramework";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GoogleAnalytics />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shift/*" element={<Shift />} />
          <Route
            path="/shift/communication-style-guide"
            element={<StyleGuide />}
          />
          <Route path="/shift/vista-framework" element={<VistaFramework />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
