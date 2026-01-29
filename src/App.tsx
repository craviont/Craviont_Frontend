import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TopLoader } from "@/components/ui/top-loader";
import ScrollToTop from "@/components/ui/ScrollToTop";
import NotFound from "@/pages/not-found";
import GlobalBackToTop from "./components/ui/GlobalBackToTop";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
import AboutPage from "@/pages/About";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-conditions" component={TermsAndConditions} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <TopLoader />
        <Toaster />
        <Router />
        <GlobalBackToTop />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
