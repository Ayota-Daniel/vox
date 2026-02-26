import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MainCards from './components/MainCards';
import FeaturedSchools from './components/FeaturedSchools';
import SuccessStories from './components/SuccessStories';
import NewsAndPartners from './components/NewsAndPartners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MainCards />
        <FeaturedSchools />
        <SuccessStories />
        <NewsAndPartners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
