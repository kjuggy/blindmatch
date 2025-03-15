import React, { useState } from 'react';

const BlindDateHomepage = () => {
  const [email, setEmail] = useState('');
  
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest! We'll send updates to ${email}`);
    setEmail('');
  };

  // Google Form redirect
  const handleSignUpClick = () => {
    window.open('https://forms.google.com/yourformlink', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-purple-600">BlindDate</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="text-gray-600 hover:text-purple-600">How It Works</a>
          <a href="#faq" className="text-gray-600 hover:text-purple-600">FAQ</a>
          <a href="#contact" className="text-gray-600 hover:text-purple-600">Contact</a>
        </div>
        <button 
          onClick={handleSignUpClick}
          className="px-4 py-2 rounded bg-purple-600 text-white font-medium hover:bg-purple-700"
        >
          Sign Up Now
        </button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Find Your Perfect Match <span className="text-purple-600">In Person</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience the magic of meeting someone special face-to-face. We arrange meaningful blind dates based on your preferences, handling all the details so you can focus on making a connection.
            </p>
            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 font-medium px-4 py-2 rounded-full">
                🎉 Now in Beta - Completely Free!
              </span>
            </div>
            <button 
              onClick={handleSignUpClick}
              className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              Join the Waitlist
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-xl overflow-hidden">
              <img src="/blindmatchlogo.png" alt="blind match slogan" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How BlindDate Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fill Out Our Form</h3>
              <p className="text-gray-600">Tell us about yourself and what you're looking for in a match.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">We Find Your Match</h3>
              <p className="text-gray-600">Our team carefully selects potential matches based on your preferences.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Meet In Person</h3>
              <p className="text-gray-600">We arrange everything for your blind date at a nice venue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Be Among the First</h2>
            <p className="text-xl mb-8 text-gray-600">
              We're launching soon and looking for our first batch of daters. Join now to be matched with other early adopters!
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Early Access Benefits</h3>
              <ul className="text-left mb-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Completely free during our beta period</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Priority matching with other members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Help shape our service with your feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Special perks for early adopters when we launch officially</span>
                </li>
              </ul>
              <button 
                onClick={handleSignUpClick}
                className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors w-full md:w-auto"
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Updates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Stay Updated</h2>
            <p className="text-lg mb-8 text-gray-600">
              Not ready to sign up yet? Leave your email and we'll keep you posted on our launch.
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Updates
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How do you ensure my safety?</h3>
              <p className="text-gray-600">We verify all members and meet them in person. Our team is always nearby during your date to ensure everything goes smoothly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Is it really free?</h3>
              <p className="text-gray-600">Yes! During our beta period, all matches and dates are completely free. We'll introduce paid tiers in the future, but early members will receive special benefits.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How do you choose the venues?</h3>
              <p className="text-gray-600">We partner with select restaurants and cafes that provide a comfortable atmosphere for first dates. We consider your preferences when choosing the venue.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How long does it take to get matched?</h3>
              <p className="text-gray-600">We aim to match you within 1-2 weeks of signing up. This timeframe may vary based on your preferences and our current member base.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join BlindDate today and experience the magic of meaningful connections.</p>
          <button 
            onClick={handleSignUpClick}
            className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
          >
            Join Now - It's Free!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BlindDate</h3>
              <p className="text-gray-400">Creating meaningful connections through carefully curated blind dates.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@blinddate.com</li>
                <li>1-800-BLIND-DATE</li>
                <li>123 Match Street, Suite 100</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BlindDate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlindDateHomepage;