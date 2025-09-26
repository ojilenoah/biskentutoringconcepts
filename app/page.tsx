"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Phone,
  Mail,
  BookOpen,
  Users,
  Clock,
  GraduationCap,
  Heart,
  Brain,
  Hand,
  Calculator,
  Microscope,
  FileText,
  BookMarked,
  TrendingUp,
  Building,
  Lightbulb,
  Languages,
  Palette,
  Menu,
  X,
  Award,
  Star,
} from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [heroCardIndex, setHeroCardIndex] = useState(0)
  const [specialCardIndex, setSpecialCardIndex] = useState(0)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)

  const heroImages = [
    "/african-american-female-tutor-helping-teenagers-with-math.jpg",
    "/black-male-teacher-leading-group-study-session-teenagers.jpg",
    "/african-american-tutor-online-session-with-teenage-student.jpg",
    "/black-female-teacher-helping-teenager-with-science-homework.jpg",
  ]

  const specialImages = [
    "/caring-black-female-teacher-helping-adhd-student.jpg",
    "/african-american-male-tutor-one-on-one-with-teenager.jpg",
    "/black-female-teacher-using-hands-on-learning-methods.jpg",
    "/african-american-tutor-working-with-special-needs-student.jpg",
  ]

  useEffect(() => {
    setIsVisible(true)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const animateElements = document.querySelectorAll(
      ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale",
    )
    animateElements.forEach((el) => observerRef.current?.observe(el))

    const heroInterval = setInterval(() => {
      setHeroCardIndex((prev) => (prev + 1) % heroImages.length)
    }, 3000)

    const specialInterval = setInterval(() => {
      setSpecialCardIndex((prev) => (prev + 1) % specialImages.length)
    }, 3500)

    const handleWheel = (e: WheelEvent) => {
      if (testimonialRef.current) {
        e.preventDefault()
        testimonialRef.current.scrollLeft += e.deltaY
      }
    }

    const testimonialElement = testimonialRef.current
    if (testimonialElement) {
      testimonialElement.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      observerRef.current?.disconnect()
      clearInterval(heroInterval)
      clearInterval(specialInterval)
      if (testimonialElement) {
        testimonialElement.removeEventListener("wheel", handleWheel)
      }
    }
  }, [])

  const handleHeroCardClick = () => {
    setHeroCardIndex((prev) => (prev + 1) % heroImages.length)
  }

  const handleSpecialCardClick = () => {
    setSpecialCardIndex((prev) => (prev + 1) % specialImages.length)
  }

  const subjects = [
    { name: "Mathematics", icon: Calculator },
    { name: "Science", icon: Microscope },
    { name: "English", icon: FileText },
    { name: "Literature", icon: BookMarked },
    { name: "Economics", icon: TrendingUp },
    { name: "Government", icon: Building },
    { name: "Mental Ability", icon: Lightbulb },
    { name: "Language", icon: Languages },
    { name: "Crafts", icon: Palette },
  ]

  const services = [
    {
      icon: BookOpen,
      title: "Pre-school - Secondary Classes",
      description: "All subjects covered",
      details:
        "Comprehensive curriculum coverage from pre-school through secondary education. We provide structured learning programs tailored to each age group, ensuring strong foundational knowledge and progressive skill development across all core subjects including Mathematics, English, Science, and Social Studies.",
    },
    {
      icon: GraduationCap,
      title: "Exam Preparation",
      description: "SATs, SAT, IELTS, GCSE/IGCSE",
      details:
        "Specialized preparation for major standardized tests and international examinations. Our expert tutors provide targeted practice, test-taking strategies, and comprehensive review sessions to help students achieve their best possible scores on SATs, SAT, IELTS, GCSE, IGCSE, Common Entrance, BECE, WASSCE, and GCE examinations.",
    },
    {
      icon: Users,
      title: "Flexible Learning",
      description: "One-on-one & Group coaching",
      details:
        "Personalized learning experiences designed to meet individual student needs. Choose between intensive one-on-one sessions for focused attention or collaborative group coaching sessions that encourage peer learning and social interaction while maintaining high educational standards.",
    },
    {
      icon: Clock,
      title: "Online & Offline",
      description: "Choose your preferred mode",
      details:
        "Convenient learning options that fit your schedule and preferences. Our online classes use interactive platforms with real-time engagement, while offline classes provide traditional face-to-face instruction. Both modes maintain the same high-quality teaching standards and personalized attention.",
    },
  ]

  const testimonials = [
    {
      name: "Deborah Temisan Lawal",
      text: "Proud of the dedicated teachers here. Distance is no barrier to their commitment.",
      role: "Parent",
    },
    {
      name: "Dr Abimbola A Adegbuyi",
      text: "Thank you to the amazing teaching team for coaching my daughter to pass her British GCSE English Examination.",
      role: "Dr",
    },
    {
      name: "Precious Edem Ekpenyong",
      text: "Amazing job by the teaching team! If you register, you will surely get value for your money.",
      role: "Parent",
    },
    {
      name: "Parent (SATS Results)",
      text: "SATS was excellent. He did very well. Thank you to all the teachers for their hard work.",
      role: "Parent",
    },
    {
      name: "Dr Abimbola Adegbuyi",
      text: "The teachers go beyond and above. They are very committed to the success of their students.",
      role: "Dr",
    },
    {
      name: "Parent (UK)",
      text: "The teacher helped my daughter blend words and break them into syllables. Her writing is now eligible.",
      role: "Parent from UK",
    },
    {
      name: "Dr Bim",
      text: "My daughter passed her British GCSE mathematics. Thank you to the teaching team for their commitment.",
      role: "Dr",
    },
    {
      name: "Parent (Common Entrance)",
      text: "The results were good. Both children have been admitted! Thanks to the teaching team.",
      role: "Parent",
    },
  ]

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Subjects", href: "#subjects" },
    { name: "About", href: "#about" },
    { name: "Tutors", href: "#tutors" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  const tutors = [
    {
      name: "Adunni Okafor",
      image: "/professional-african-female-teacher-smiling.jpg",
      description: "Mathematics & Science specialist with 8+ years experience",
    },
    {
      name: "Kwame Asante",
      image: "/professional-african-male-teacher-with-books.jpg",
      description: "English Literature & Language expert, Cambridge certified",
    },
    {
      name: "Fatima Ibrahim",
      image: "/professional-african-female-teacher-in-classroom.jpg",
      description: "ADHD specialist and special needs education expert",
    },
    {
      name: "Chidi Okonkwo",
      image: "/placeholder-hgrhb.png",
      description: "Physics & Chemistry tutor, exam preparation specialist",
    },
    {
      name: "Amara Diallo",
      image: "/placeholder-zhw67.png",
      description: "Primary education specialist, child development expert",
    },
    {
      name: "Tunde Adebayo",
      image: "/professional-african-male-teacher-with-tablet.jpg",
      description: "Online learning specialist, technology integration expert",
    },
    {
      name: "Zara Musa",
      image: "/professional-african-female-teacher-with-whiteboar.jpg",
      description: "Economics & Government studies, WASSCE preparation",
    },
    {
      name: "Emeka Nwosu",
      image: "/professional-african-male-teacher-mentoring-studen.jpg",
      description: "Mathematics & Mental Ability, Common Entrance specialist",
    },
    {
      name: "Aisha Bello",
      image: "/placeholder-dtdox.png",
      description: "Early childhood education, pre-school learning expert",
    },
    {
      name: "Kofi Mensah",
      image: "/professional-african-male-teacher-in-modern-classr.jpg",
      description: "IELTS & SAT preparation, international examinations",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Certified Badge at Top */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        <div className="flex items-center justify-center gap-2">
          <Award className="h-4 w-4" />
          <span className="text-sm font-medium">Certified by TRCN • BSc Ed | M.Ed Qualified</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-bold text-lg">biskentutoringconcepts</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="nav-link">
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/234706256623"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg animate-pulse-glow transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 px-4"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="space-y-4">
                <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium animate-bounce-gentle">
                  ⭐ Certified Tutors
                </Badge>
                <h1 className="text-3xl lg:text-5xl font-bold text-balance leading-tight">
                  Are You Looking For{" "}
                  <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient">
                    A Tutor?
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  We will help your children succeed in class with experienced and qualified teachers
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.open("tel:+234706256623", "_self")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +234 706 256 623
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 py-3 bg-transparent hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open("mailto:teachingonlinewithbisilola@gmail.com", "_self")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                    >
                      <Star className="h-4 w-4 text-primary fill-current" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Trusted by 100+ families</p>
              </div>
            </div>

            <div className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="relative group cursor-pointer overflow-hidden" onClick={handleHeroCardClick}>
                <div className="card-stack">
                  {heroImages.map((image, index) => (
                    <div
                      key={index}
                      className={`card-item ${index === heroCardIndex ? "active" : ""} ${index === (heroCardIndex + 1) % heroImages.length ? "next" : ""} ${index === (heroCardIndex + 2) % heroImages.length ? "third" : ""} ${index === (heroCardIndex + 3) % heroImages.length ? "fourth" : ""}`}
                      style={{ "--index": index } as React.CSSProperties}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Students studying ${index + 1}`}
                        className="w-full h-64 rounded-2xl shadow-2xl object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tutoring services designed to help your child excel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 scroll-animate-scale cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedService(service)}
              >
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <p className="text-sm text-primary mt-2">Click for details</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-modal-overlay"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-card rounded-lg p-6 max-w-md w-full max-h-96 overflow-y-auto shadow-xl animate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <selectedService.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{selectedService.title}</h3>
              </div>
              <button onClick={() => setSelectedService(null)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-muted-foreground mb-4">{selectedService.description}</p>
            <p className="text-sm leading-relaxed">{selectedService.details}</p>
            <div className="mt-6 flex gap-3">
              <Button
                className="flex-1"
                onClick={() => {
                  setSelectedService(null)
                  window.open("tel:+234706256623", "_self")
                }}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => {
                  setSelectedService(null)
                  window.open("https://wa.me/234706256623", "_blank")
                }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Subjects Section */}
      <section id="subjects" className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Subjects We Teach</h2>
            <p className="text-xl text-muted-foreground">Comprehensive coverage across all academic areas</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer group scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <subject.icon className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold">{subject.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section id="about" className="py-12 px-4 bg-card overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate-left relative">
              <div className="relative group cursor-pointer overflow-hidden" onClick={handleSpecialCardClick}>
                <div className="card-stack-right">
                  {specialImages.map((image, index) => (
                    <div
                      key={index}
                      className={`card-item-right ${index === specialCardIndex ? "active" : ""} ${index === (specialCardIndex + 1) % specialImages.length ? "next" : ""} ${index === (specialCardIndex + 2) % specialImages.length ? "third" : ""} ${index === (specialCardIndex + 3) % specialImages.length ? "fourth" : ""}`}
                      style={{ "--index": index } as React.CSSProperties}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Special care ${index + 1}`}
                        className="w-full h-64 rounded-2xl shadow-lg object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 scroll-animate-right">
              <h2 className="text-3xl lg:text-4xl font-bold">Specialized Support for Every Child</h2>
              <p className="text-lg text-muted-foreground">
                We provide specialized support for children with <strong>ADHD and learning differences</strong>. Our
                qualified teachers use evidence-based approaches to create supportive learning environments tailored to
                each child's unique needs.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">
                    <strong>Cognitive development</strong> through structured learning
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">
                    <strong>Emotional support</strong> and confidence building
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Hand className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">
                    <strong>Practical skills</strong> and hands-on learning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tutors" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Meet the Tutors</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced and certified educators dedicated to your child's success
            </p>
          </div>

          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-3 min-w-max">
              {tutors.map((tutor, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-64 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 scroll-animate-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img
                      src={tutor.image || "/placeholder.svg"}
                      alt={tutor.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-bold text-lg mb-1">{tutor.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tutor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-12 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Parents Say</h2>
            <p className="text-xl text-muted-foreground">Real testimonials from satisfied parents</p>
          </div>

          <div className="testimonial-container-new relative">
            <div
              ref={testimonialRef}
              className="testimonial-scroll-new flex gap-6 animate-scroll-infinite hover:animation-play-state-paused"
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`first-${index}`}
                  className="testimonial-review-card flex-shrink-0 bg-white border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    {/* Review text */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 min-h-[60px]">"{testimonial.text}"</p>

                    {/* Reviewer info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm truncate">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`second-${index}`}
                  className="testimonial-review-card flex-shrink-0 bg-white border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    {/* Review text */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 min-h-[60px]">"{testimonial.text}"</p>

                    {/* Reviewer info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm truncate">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl scroll-animate">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Image Div - Reduced padding for larger image */}
            <div className="flex-shrink-0">
              <img
                src="/bisilola-profile.jpeg"
                alt="Bisilola Ajala - Professional Tutor"
                className="w-72 h-72 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl mx-auto"
              />
            </div>

            {/* Content Div - All text content beside the image */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Started?</h2>
                <h3 className="text-2xl lg:text-3xl font-bold">Bisilola Ajala</h3>
                <p className="text-lg lg:text-xl opacity-90">BSc Ed | M.Ed | TRCN Certified</p>
                <p className="opacity-80 text-base leading-relaxed">
                  Experienced educator dedicated to providing personalized learning experiences that help every child
                  reach their full potential through empathetic and effective teaching methods.
                </p>
                <p className="text-xl font-semibold opacity-90">Contact Bisilola Ajala today</p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+234706256623"
                    className="flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-primary hover:text-primary/90 p-4 rounded-lg transition-all duration-300 text-base flex-1 font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+234 706 256 623</span>
                  </a>
                  <a
                    href="https://wa.me/234706256623"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg transition-all duration-300 text-base flex-1 font-medium"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="mailto:teachingonlinewithbisilola@gmail.com"
                    className="flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-primary hover:text-primary/90 p-4 rounded-lg transition-all duration-300 flex-1 font-medium"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="truncate">teachingonlinewithbisilola@gmail.com</span>
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("teachingonlinewithbisilola@gmail.com")
                      alert("Email copied to clipboard!")
                    }}
                    className="bg-white/90 hover:bg-white text-primary hover:text-primary/90 p-4 rounded-lg transition-all duration-300"
                    title="Copy email"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-4">biskentutoringconcepts</h3>
          <p className="text-lg opacity-80 mb-6">by Certified Tutors</p>
          <p className="opacity-60">© 2025 biskentutoringconcepts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
