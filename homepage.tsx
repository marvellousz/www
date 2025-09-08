"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, Users, Code, Zap, Shield, Heart, Lightbulb, Globe, Wrench, Heart as HeartIcon, Search, MessageCircle, Menu, X, Palette, Map } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Footer } from "@/components/ui/footer"
import Image from "next/image"
import { RandomRipple } from "@/components/ui/random-ripple"


export default function Component() {
  const [navVisible, setNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [isManualNavigation, setIsManualNavigation] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 200) {
        setNavVisible(true)
      } else if (currentScrollY > lastScrollY + 5) {
        setNavVisible(false)
      } else if (currentScrollY < lastScrollY - 5) {
        setNavVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    // Track active section
    const sections = ['home', 'about', 'contribute', 'community']
    
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Check for hash in URL on page load
    const checkHashOnLoad = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && sections.includes(hash)) {
        setActiveSection(hash)
        // Scroll to section after a short delay to ensure proper positioning
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            const offsetTop = element.offsetTop - 100
            window.scrollTo(0, offsetTop)
          }
        }, 100)
      }
    }

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          controlNavbar()
          // Only update active section if not in manual navigation mode
          if (!isManualNavigation) {
            updateActiveSection()
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    checkHashOnLoad() // Check hash on initial load
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Set manual navigation flag and active section
      setIsManualNavigation(true)
      setActiveSection(sectionId)
      
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      
      // Re-enable auto tracking after a longer delay
      setTimeout(() => {
        setIsManualNavigation(false)
      }, 3000) // Wait 3 seconds for smooth scroll and user interaction
    }
  }

  const NavLink = ({ href, children, sectionId, onClick }: { href?: string; children: React.ReactNode; sectionId: string; onClick?: () => void }) => (
    <button 
      onClick={() => {
        scrollToSection(sectionId)
        if (onClick) onClick()
      }}
      className={`text-white/90 hover:text-white hover:bg-white/15 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm cursor-pointer ${
        activeSection === sectionId ? 'bg-white/20 text-white' : ''
      }`}
    >
      {children}
    </button>
  )

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden smooth-scroll" style={{
      background: `
        radial-gradient(circle at 10% 10%, rgba(8, 8, 32, 0.8) 0%, transparent 35%),
        radial-gradient(circle at 90% 90%, rgba(45, 15, 75, 0.6) 0%, transparent 45%),
        radial-gradient(circle at 50% 50%, rgba(25, 8, 45, 0.5) 0%, transparent 55%),
        linear-gradient(135deg, 
          rgba(5, 5, 20, 1) 0%,
          rgba(15, 8, 35, 0.95) 15%,
          rgba(25, 12, 50, 0.9) 30%,
          rgba(35, 15, 65, 0.85) 45%,
          rgba(25, 12, 50, 0.9) 60%,
          rgba(15, 8, 35, 0.95) 75%,
          rgba(5, 5, 20, 1) 100%
        )
      `,
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite'
    }}>
      
      {/* Random Ripple Effect */}
      <RandomRipple color="rgba(139, 92, 246, 0.1)" size={500} duration={3000} interval={4000} maxRipples={2} />
      
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .section-transition {
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(255,255,255,0.02) 50%, 
            transparent 100%
          );
        }
        
        /* Enhanced smooth scrolling for all scrollable elements */
        .smooth-scroll {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for Firefox and Firefox-based browsers */
        html {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
          overflow: -moz-scrollbars-none;  /* Old Firefox */
        }
        
        body {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
          overflow: -moz-scrollbars-none;  /* Old Firefox */
        }
        
        /* Additional Firefox support */
        * {
          scrollbar-width: none;  /* Firefox */
          -ms-overflow-style: none;  /* IE and Edge */
        }
        
        /* Ensure all containers hide scrollbars */
        .smooth-scroll {
          scrollbar-width: none;  /* Firefox */
          -ms-overflow-style: none;  /* IE and Edge */
          overflow: -moz-scrollbars-none;  /* Old Firefox */
        }
      `}</style>

      {/* Desktop Navigation */}
      <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:flex items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-3 shadow-xl shadow-black/20 transition-all duration-500 ease-out ${navVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <NavLink sectionId="home">The Loop</NavLink>
        <NavLink sectionId="about">Origins</NavLink>
        <NavLink sectionId="contribute">Forge</NavLink>
        <NavLink sectionId="community">Circle</NavLink>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
        <div className={`absolute top-0 right-0 w-64 h-full bg-white/10 backdrop-blur-2xl border-l border-white/20 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex flex-col space-y-4">
            <NavLink sectionId="home" onClick={() => setMobileMenuOpen(false)}>The Loop</NavLink>
            <NavLink sectionId="about" onClick={() => setMobileMenuOpen(false)}>Origins</NavLink>
            <NavLink sectionId="contribute" onClick={() => setMobileMenuOpen(false)}>Forge</NavLink>
            <NavLink sectionId="community" onClick={() => setMobileMenuOpen(false)}>Circle</NavLink>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col relative">
        <div className="container mx-auto px-4 lg:px-6 flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between pt-8 pb-4">
            <div className="flex items-center">
              <Image 
                src="/marvlock-logo.png" 
                alt="Marvlock Logo" 
                width={60} 
                height={60} 
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 flex items-center pt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
              {/* Left Side - Text Content */}
              <div className="text-left space-y-8">
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent" style={{fontFamily: 'Orbitron, monospace', fontWeight: '700'}}>
                    The </span>
                    <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent" style={{fontFamily: 'Orbitron, monospace', fontWeight: '700'}}>
                    Loop </span>
                    <span className="bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent" style={{fontFamily: 'Orbitron, monospace', fontWeight: '700'}}>
                      is forming
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-purple-200 leading-relaxed max-w-2xl">
                  For those who build, design, and decode your place is here.
                  </p>
                </div>
                
                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    className="bg-transparent border border-white/20 text-purple-200 hover:bg-white/5 hover:border-white/30 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-light rounded-lg opacity-70 hover:opacity-100 cursor-pointer"
                    onClick={() => scrollToSection('about')}
                  >
                    The Scrolls
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                  <Button 
                    className="bg-transparent border border-white/20 text-purple-200 hover:bg-white/5 hover:border-white/30 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-light rounded-lg opacity-70 hover:opacity-100"
                    asChild
                  >
                    <a href="https://github.com/marvlock" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      The Forge
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Right Side - 3D Logo */}
              <div className="flex justify-center lg:justify-end items-center">
                <div className="relative">
                  <Image 
                    src="/marvlock-logo-3d.png" 
                    alt="Marvlock 3D Logo" 
                    width={500} 
                    height={500} 
                    className="drop-shadow-2xl animate-float w-64 h-64 lg:w-[500px] lg:h-[500px]"
                  />
                  {/* Glow effect behind the logo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-purple-500/20 rounded-full blur-3xl scale-110 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Smooth transition gradient */}
        <div className="h-32 section-transition"></div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent" style={{fontFamily: 'Orbitron, monospace', fontWeight: '700'}}>
              Philosophy
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-12">
              <p className="text-2xl lg:text-3xl text-purple-200 leading-relaxed font-light">
                We build stuff that don't shout. They shimmer quietly in the background.
              </p>
              
              <p className="text-xl lg:text-2xl text-purple-300 leading-relaxed font-light">
                Presence over noise. Signal over chaos. Open, but intentional.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 section-transition"></div>
      </section>



      {/* The Path Section */}
      <section id="contribute" className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent" style={{fontFamily: 'Orbitron, monospace', fontWeight: '700'}}>
            The Path
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "Discover",
                desc: "find signals hidden in the noise",
                icon: "Search",
              },
              {
                title: "Connect",
                desc: "meet others who walk the same path",
                icon: "MessageCircle",
              },
              {
                title: "Shape",
                desc: "leave your mark in the loop",
                icon: "GitFork",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-violet-400/30 group-hover:to-purple-500/30 transition-all duration-300">
                  {item.icon === "Search" && <Search className="w-8 h-8 text-violet-400" />}
                  {item.icon === "MessageCircle" && <MessageCircle className="w-8 h-8 text-violet-400" />}
                  {item.icon === "GitFork" && <GitFork className="w-8 h-8 text-violet-400" />}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-purple-200 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 section-transition"></div>
      </section>

      {/* The Circle Awaits Section */}
      <section id="community" className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-6xl text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent" style={{fontFamily: 'Orbitron, monospace', fontWeight: '700'}}>
            Roles in the Loop
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                title: "The Builder",
                desc: "shape what others depend on.",
                icon: "Wrench",
              },
              {
                title: "The Dreamer",
                desc: "design what others feel.",
                icon: "Palette",
              },
              {
                title: "The Mapper",
                desc: "decode patterns and signals.",
                icon: "Map",
              },
              {
                title: "The Connector",
                desc: "expand the circle quietly.",
                icon: "Users",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-violet-400/30 group-hover:to-purple-500/30 transition-all duration-300">
                  {item.icon === "Wrench" && <Wrench className="w-6 h-6 text-violet-400" />}
                  {item.icon === "Palette" && <Palette className="w-6 h-6 text-violet-400" />}
                  {item.icon === "Map" && <Map className="w-6 h-6 text-violet-400" />}
                  {item.icon === "Users" && <Users className="w-6 h-6 text-violet-400" />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-purple-200 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 section-transition"></div>
      </section>

      {/* Knock Gently Button */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <Button 
            className="bg-transparent border border-white/20 text-purple-200 hover:bg-white/5 hover:border-white/30 transition-all duration-300 px-8 py-3 text-sm font-light"
            asChild
          >
            <a href="mailto:marvlock.dev@gmail.com?subject=Application" target="_blank" rel="noopener noreferrer">
              Knock gently
            </a>
          </Button>
        </div>
      </section>

      {/* The Gathering Section */}
      <section id="gathering" className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent" style={{fontFamily: 'Orbitron, monospace', fontWeight: '700'}}>
            The Gathering
          </h2>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Find others who notice what you notice.
          </p>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12">
            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0 cursor-pointer" asChild>
                <a href="https://discord.gg/CS5mVEsjre" target="_blank" rel="noopener noreferrer">
                  Step Inside
                </a>
              </Button>
              <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border border-white/30 cursor-pointer" asChild>
                <a href="https://x.com/ProjectMarvlock" target="_blank" rel="noopener noreferrer">
                  Follow The Loop
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 section-transition"></div>
      </section>

      <Footer />
    </div>
  )
}