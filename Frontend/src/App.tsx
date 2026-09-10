import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";
import NotFound from "./pages/NotFound";
import PublicLayout from "./components/PublicLayout";
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
  <Routes>

    <Route element={<PublicLayout />}>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard/admin" element={<AdminDashboard />} />
    <Route path="*" element={<NotFound />} />

  </Routes>
</BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
