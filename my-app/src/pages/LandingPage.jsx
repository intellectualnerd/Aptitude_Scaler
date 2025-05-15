import React from "react";

const LandingPage = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <i className="fas fa-brain text-purple-500 text-2xl mr-2"></i>
              <span className="text-xl font-bold text-gray-900">
                Job Aptitude Scaler
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 mylinks">
              <a
                href="#features"
                className="text-gray-700 hover:text-purple-600 text-sm font-medium transition duration-200"
                style={{ marginLeft: "20px" }}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-purple-600 text-sm font-medium transition duration-200 mylinkleft"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-purple-600 text-sm font-medium transition duration-200"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-purple-600 text-sm font-medium transition duration-200"
              >
                Pricing
              </a>
            </div>

            {/* Login / Signup */}
            <div className="flex items-center ml-4">
              <button className="glow bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 shadow-md">
                Login / Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-6">
                Master Your Aptitude Skills <br />
                and{" "}
                <span className="underline decoration-wavy">
                  Outperform
                </span>{" "}
                the Competition
              </h1>
              <p className="mt-3 max-w-3xl text-xl text-indigo-100">
                Sharpen your numerical, verbal, logical reasoning and
                programming skills through challenges and personalized practice.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  href="#"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-bold text-center transition duration-300 transform hover:scale-105"
                >
                  Start Free Trial <i className="fas fa-arrow-right ml-2"></i>
                </button>
                <button
                  href="#features"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-md text-lg font-bold text-center transition duration-300 transform hover:scale-105"
                >
                  Explore Features
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="People competing"
                className="rounded-xl shadow-2xl border-8 border-white transform rotate-3"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full mr-3">
                    <i className="fas fa-trophy text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Active Users</p>
                    <p className="font-bold text-gray-900">50,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Power Up Your Aptitude Skills
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Comprehensive training across all key aptitude areas with
              competitive features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fa-calculator",
                title: "Numerical Ability",
                desc: "Master quantitative analysis, data interpretation, and math problem-solving.",
              },
              {
                icon: "fa-comment-dots",
                title: "Verbal Ability",
                desc: "Improve comprehension, grammar, and reasoning with adaptive learning.",
              },
              {
                icon: "fa-project-diagram",
                title: "Logical Reasoning",
                desc: "Boost analytical skills with pattern recognition and logical puzzles.",
              },
              {
                icon: "fa-code",
                title: "Programming",
                desc: "Solve coding challenges in various languages and improve algorithmic thinking.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="transition transform hover:-translate-y-1 hover:shadow-xl bg-white p-8 rounded-xl border border-gray-100"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <i className={`fas ${f.icon} text-purple-600 text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform makes aptitude training fun, competitive, and
                result-oriented with:
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: "fa-user-friends",
                    title: "1v1 Competitions",
                    desc: "Challenge friends or random players in aptitude duels.",
                  },
                  {
                    icon: "fa-trophy",
                    title: "Tournaments",
                    desc: "Climb the leaderboard in weekly and monthly contests.",
                  },
                  {
                    icon: "fa-trophy",
                    title: "Practice Levels",
                    desc: "Progressive difficulty levels with instant feedback to systematically improve your weak areas.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* You can add an image or illustration in the remaining 7 columns if needed */}

            <div className="mt-12 lg:mt-0 lg:col-span-7">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-6 bg-gray-900 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-300">
                        Job Aptitude Scaler
                      </p>
                      <p className="text-xl font-bold">
                        Live Tournament Dashboard
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-primary-500 rounded text-xs font-bold">
                        LIVE
                      </span>
                      <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                        32 participants
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <i className="fas fa-user text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Numerical Reasoning Tournament
                      </h3>
                      <p className="text-gray-600">Time remaining: 12:45</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <span className="font-bold text-gray-900 mr-3">1.</span>
                        <span>You</span>
                      </div>
                      <span className="font-bold text-primary-600">
                        850 pts
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3">
                      <div className="flex items-center">
                        <span className="font-bold text-gray-900 mr-3">2.</span>
                        <span>CompetitorX</span>
                      </div>
                      <span className="font-bold text-gray-900">790 pts</span>
                    </div>

                    <div className="flex items-center justify-between p-3">
                      <div className="flex items-center">
                        <span className="font-bold text-gray-900 mr-3">3.</span>
                        <span>AptitudeMaster</span>
                      </div>
                      <span className="font-bold text-gray-900">720 pts</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">
                        Question 5/10
                      </span>
                      <span className="text-sm font-medium text-primary-600">
                        Next question in 0:45
                      </span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-primary-600 h-2.5 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Leaderboard Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                Connect, Compete & Climb the Leaderboard
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Job Aptitude Scaler isn't just about skills - it's about
                community. Make friends, challenge peers, and track your
                progress across all aptitude areas.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <i className="fas fa-user " />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Build Your Network
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Connect with like-minded professionals, form study groups,
                      and challenge friends to private matches.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <i className="fas fa-medal " />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Comprehensive Leaderboards
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Track your ranking across numerical, verbal, logical and
                      programming skills. See how you stack up globally and
                      among peers.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <i className="fas fa-chart-pie" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Detailed Analytics
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Personalized dashboards show your strengths, weaknesses,
                      and progress over time with actionable insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Global Leaderboard
                </h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                    All Skills
                  </button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm font-medium">
                    Numerical
                  </button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm font-medium">
                    Verbal
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {/* Top Rank */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-50 to-white rounded-lg border border-primary-100">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mr-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">AptitudeMaster</p>
                      <p className="text-sm text-gray-600">Rating: 985</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary-600">Top 0.1%</p>
                    <p className="text-sm text-gray-600">Wins: 87%</p>
                  </div>
                </div>

                {/* Other Ranks */}
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <span className="text-gray-600 font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">LogicPro</p>
                      <p className="text-sm text-gray-600">Rating: 945</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">Top 0.5%</p>
                    <p className="text-sm text-gray-600">Wins: 82%</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <span className="text-amber-600 font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">NumberNinja</p>
                      <p className="text-sm text-gray-600">Rating: 915</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">Top 1%</p>
                    <p className="text-sm text-gray-600">Wins: 78%</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="mt-8 w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 font-medium"
              >
                View Full Leaderboard <i className="fas fa-arrow-right ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Success Stories From Our Users
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Join thousands who have boosted their aptitude skills and landed dream jobs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah K.',
                title: 'Software Engineer at TechCo',
                quote:
                  'Job Aptitude Scaler completely transformed my numerical reasoning skills. After 3 months of regular practice and tournaments, I aced my job interview\'s quantitative section that had previously been my weakness.',
                stars: 5,
              },
              {
                name: 'Raj P.',
                title: 'Management Consultant at BigFour',
                quote:
                  'The 1v1 competitions simulate real pressure situations perfectly. My logical reasoning speed improved by 40% after two months, helping me secure a consulting role I\'d been aiming for.',
                stars: 5,
              },
              {
                name: 'Emily T.',
                title: 'Data Analyst at FinanceCorp',
                quote:
                  'I love how the platform breaks down my performance across all aptitude areas. The programming challenges especially helped me think more algorithmically, which was crucial for my technical interviews.',
                stars: 4.5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <i className="fas fa-user text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                  {testimonial.stars % 1 !== 0 && (
                    <i className="fas fa-star-half-alt text-yellow-400"></i>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-500">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to boost your aptitude skills?</span>
            <span className="block text-primary-200">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transform hover:scale-105 transition duration-300"
              >
                Get started <i className="fas fa-arrow-right ml-2" />
              </button>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <button
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transform hover:scale-105 transition duration-300"
              >
                Live demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Product',
                links: ['Features', 'Pricing', 'Tournaments', 'Leaderboard'],
              },
              {
                title: 'Resources',
                links: ['Blog', 'Guides', 'Webinars', 'Support'],
              },
              {
                title: 'Company',
                links: ['About', 'Careers', 'Privacy', 'Terms'],
              },
              {
                title: 'Connect',
                links: ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-600 hover:text-primary-500">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between">
            <p className="text-gray-500 text-sm">
              &copy; 2023 Job Aptitude Scaler. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 mylinks">
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
