import './App.css'
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import Cityscape from './components/Cityscape';
import StatsSection from './components/StatsSection';
import InvestmentGridSection from './components/InvestmentGridSection';
import InvestmentAdvantageSection from './components/InvestmentAdvantageSection';
import PropertyListingSection from './components/PropertyListingSection';
import InvestmentProcessSection from './components/InvestmentProcessSection';
import TestimonialCarousel from './components/TestimonialCarousel';


function App() {
  return (
    <div className="flex flex-col min-h-screen space-y-8 md:space-y-12 lg:space-y-16">
      {/* Fixed NavBar at top */}
      <NavBar />
      
      {/* Main Content Section with Cityscape */}
      <MainSection />

      <Cityscape />

      {/* Stats Section */}
      <StatsSection />

       {/* Add InvestmentGridSection last for testing */}
       <InvestmentGridSection />

      {/* Add InvestmentAdvantageSection last for testing */}
       <InvestmentAdvantageSection />

       <PropertyListingSection />

       <InvestmentProcessSection />

       <TestimonialCarousel />
    </div>
  );
}

export default App;
