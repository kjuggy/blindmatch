import React, { useState, useEffect, createContext, useContext } from 'react';

// Create a theme context
const ThemeContext = createContext();

// Theme provider component
const ThemeProvider = ({ children }) => {
  // Check if user has a saved preference, otherwise default to light
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('BlindMatch-theme');
    return savedTheme || 'light';
  });

  // Update theme in localStorage and document body when it changes
  useEffect(() => {
    localStorage.setItem('BlindMatch-theme', theme);
    document.body.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use the theme context
const useTheme = () => useContext(ThemeContext);

// Theme toggle switch component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
};

// Main application component
const ImprovedBlindMatchHomepage = () => {
  const [email, setEmail] = useState('');
  const { theme } = useTheme();
  
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwDFcAFh7e_PetNsqLzeIPf9VBNWYsHqowsKWzMR4rSih0qvwQz_a-fwSrkYjjG2BvhTQ/exec", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      alert(`Thank you for your interest! We'll send updates to ${email}`);
      setEmail('');
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("Oops! Something went wrong. Please try again later.");
    }
  };

  // Google Form redirect
  const handleSignUpClick = () => {
    window.open('https://docs.google.com/forms/d/1BTAairqmFO3XxtSj2Nr5F-SFkMIoF0A345r9OJE4IcA/edit', '_blank');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-purple-900 text-white' : 'bg-gradient-to-b from-pink-100 to-purple-100 text-gray-800'}`}>
      {/* Navigation - With theme toggle */}
      <nav className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50`}>
        <div className="flex items-center">
          <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>BlindMatch</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#how-it-works" className={`${theme === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} font-medium`}>How It Works</a>
          <a href="#faq" className={`${theme === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} font-medium`}>FAQ</a>
          <a href="#contact" className={`${theme === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} font-medium`}>Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button 
            onClick={handleSignUpClick}
            className={`px-4 py-2 rounded ${theme === 'dark' ? 'bg-purple-500 hover:bg-purple-600' : 'bg-purple-600 hover:bg-purple-700'} text-white font-medium shadow-sm transition-colors`}
          >
            Sign Up Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Find Your Perfect Match <span className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>In Person</span>
            </h1>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Experience the magic of meeting someone special face-to-face. We arrange meaningful blind dates based on your preferences, handling all the details so you can focus on making a connection.
            </p>
            <div className="mb-6">
              <span className={`inline-block ${theme === 'dark' ? 'bg-green-900 text-green-100' : 'bg-green-100 text-green-800'} font-medium px-4 py-2 rounded-full shadow-sm`}>
                🎉 Now in Beta - Completely Free!
              </span>
            </div>
            <button 
              onClick={handleSignUpClick}
              className={`px-6 py-3 ${theme === 'dark' ? 'bg-purple-500 hover:bg-purple-600' : 'bg-purple-600 hover:bg-purple-700'} text-white font-medium rounded-lg transition-colors shadow-md`}
            >
              Join the Waitlist
            </button>
          </div>
          <div className="md:w-1/2">
          <div
            className="rounded-xl overflow-hidden p-6 shadow-lg"
            style={{ backgroundColor: theme === 'dark' ? '#0F4C81' : '#0F4C81' }}>
              <img 
                src="/blindmatchlogo.png"
                alt="blind match slogan" 
                className="w-full h-auto max-w-md mx-auto" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section id="how-it-works" className={theme === 'dark' ? 'py-16 bg-gray-800' : 'py-16 bg-white'}>
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>How BlindMatch Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`flex flex-col items-center text-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <div className={`w-16 h-16 ${theme === 'dark' ? 'bg-purple-900' : 'bg-purple-100'} rounded-full flex items-center justify-center mb-4 shadow-inner`}>
                <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-purple-300' : 'text-purple-600'}`}>1</span>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : ''}`}>Fill Out Our Form</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Tell us about yourself and what you're looking for in a match.</p>
            </div>
            <div className={`flex flex-col items-center text-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <div className={`w-16 h-16 ${theme === 'dark' ? 'bg-purple-900' : 'bg-purple-100'} rounded-full flex items-center justify-center mb-4 shadow-inner`}>
                <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-purple-300' : 'text-purple-600'}`}>2</span>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : ''}`}>We Find Your Match</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Our team carefully selects potential matches based on your preferences.</p>
            </div>
            <div className={`flex flex-col items-center text-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <div className={`w-16 h-16 ${theme === 'dark' ? 'bg-purple-900' : 'bg-purple-100'} rounded-full flex items-center justify-center mb-4 shadow-inner`}>
                <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-purple-300' : 'text-purple-600'}`}>3</span>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : ''}`}>Meet In Person</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>We arrange everything for your blind date at a nice venue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section className={theme === 'dark' ? 'py-16 bg-gray-900' : 'py-16 bg-purple-50'}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Be Among the First</h2>
            <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              We're launching soon and looking for our first batch of daters. Join now to be matched with other early adopters!
            </p>
            <div className={`${theme === 'dark' ? 'bg-gray-800 border-purple-900' : 'bg-white border-purple-100'} p-8 rounded-lg shadow-lg border`}>
              <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : ''}`}>Early Access Benefits</h3>
              <ul className="text-left mb-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span className={theme === 'dark' ? 'text-gray-300' : ''}>Completely free during our beta period</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span className={theme === 'dark' ? 'text-gray-300' : ''}>Priority matching with other members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span className={theme === 'dark' ? 'text-gray-300' : ''}>Help shape our service with your feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span className={theme === 'dark' ? 'text-gray-300' : ''}>Special perks for early adopters when we launch officially</span>
                </li>
              </ul>
              <button 
                onClick={handleSignUpClick}
                className={`px-6 py-3 ${theme === 'dark' ? 'bg-purple-500 hover:bg-purple-600' : 'bg-purple-600 hover:bg-purple-700'} text-white font-medium rounded-lg transition-colors shadow-md w-full md:w-auto`}
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Email Updates Section */}
      <section className={theme === 'dark' ? 'py-16 bg-gray-800' : 'py-16 bg-white'}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Stay Updated</h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Not ready to sign up yet? Leave your email and we'll keep you posted on our launch.
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={`px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-purple-600 flex-grow shadow-sm`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className={`px-6 py-3 ${theme === 'dark' ? 'bg-purple-500 hover:bg-purple-600' : 'bg-purple-600 hover:bg-purple-700'} text-white font-medium rounded-lg transition-colors shadow-md`}
              >
                Get Updates
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={theme === 'dark' ? 'py-16 bg-gray-900' : 'py-16 bg-purple-50'}>
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <h3 className={`font-semibold text-lg mb-2 ${theme === 'dark' ? 'text-white' : ''}`}>How do you ensure my safety?</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>We verify all members and meet them in person. Our team is always nearby during your date to ensure everything goes smoothly.</p>
            </div>
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <h3 className={`font-semibold text-lg mb-2 ${theme === 'dark' ? 'text-white' : ''}`}>Is it really free?</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Yes! During our beta period, all matches and dates are completely free. We'll introduce paid tiers in the future, but early members will receive special benefits.</p>
            </div>
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <h3 className={`font-semibold text-lg mb-2 ${theme === 'dark' ? 'text-white' : ''}`}>How do you choose the venues?</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>We partner with select restaurants and cafes that provide a comfortable atmosphere for first dates. We consider your preferences when choosing the venue.</p>
            </div>
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <h3 className={`font-semibold text-lg mb-2 ${theme === 'dark' ? 'text-white' : ''}`}>How long does it take to get matched?</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>We aim to match you within 1-2 weeks of signing up. This timeframe may vary based on your preferences and our current member base.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={theme === 'dark' ? 'py-16 bg-purple-900' : 'py-16 bg-purple-600'}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">Join BlindMatch today and experience the magic of meaningful connections.</p>
          <button 
            onClick={handleSignUpClick}
            className={`px-8 py-3 ${theme === 'dark' ? 'bg-gray-800 text-purple-300 hover:bg-gray-700' : 'bg-white text-purple-600 hover:bg-purple-50'} font-semibold rounded-lg transition-colors shadow-md`}
          >
            Join Now - It's Free!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'}>
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BlindMatch</h3>
              <p className="text-gray-400">Creating meaningful connections through carefully curated blind dates.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@BlindMatch.com</li>
                <li>1-800-BLIND-DATE</li>
                <li>123 Match Street, Suite 100</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://instagram.com/blindmatch" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="https://x.com/blindmatch" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="https://facebook.com/blindmatch" className="text-gray-400 hover:text-white">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BlindMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Wrap the main component with the ThemeProvider
const App = () => {
  return (
    <ThemeProvider>
      <ImprovedBlindMatchHomepage />
    </ThemeProvider>
  );
};

export default App;