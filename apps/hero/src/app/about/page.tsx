import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Target, Heart, Globe, Users, Lightbulb } from "lucide-react"
import Link from "next/link"
import { ScrollHeader } from "@/components/scroll-header"
import { ParticleBackground } from "@/components/particle-background"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />

      <ScrollHeader />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              🌟 Our Story
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Democratizing{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                personalized learning
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
              We believe everyone deserves access to education that adapts to their unique learning style, pace, and
              goals. PathWise makes personalized learning accessible to learners worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                To revolutionize education by creating AI-powered learning experiences that adapt to each individual's
                unique needs, helping millions of learners achieve their personal and professional goals.
              </p>
              <p className="text-muted-foreground">
                We're building a world where learning is not one-size-fits-all, but rather a personalized journey that
                evolves with you, making education more effective, engaging, and accessible than ever before.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                A future where every person has access to personalized, adaptive learning that unlocks their full
                potential and creates opportunities for growth, regardless of their background or circumstances.
              </p>
              <p className="text-muted-foreground">
                We envision a global learning ecosystem where AI and human expertise combine to create educational
                experiences that are not just informative, but transformative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at PathWise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Learner-Centric</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every decision we make starts with the learner. We prioritize user experience, accessibility, and
                  outcomes above all else.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Inclusive Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quality education should be accessible to everyone, regardless of location, background, or economic
                  status.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We continuously push the boundaries of what's possible in education technology, always seeking better
                  ways to learn.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learning is better together. We foster connections between learners, educators, and experts worldwide.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We maintain the highest standards in everything we do, from product quality to customer support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe in open communication, clear pricing, and honest feedback about our platform and progress.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet our team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate educators, technologists, and innovators behind PathWise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/team-sarah-ceo.jpg" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">Sarah Chen</h3>
                <p className="text-sm text-muted-foreground mb-3">CEO & Co-Founder</p>
                <p className="text-sm text-muted-foreground">
                  Former education researcher at Stanford with 10+ years in EdTech. Passionate about making learning
                  accessible to all.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/team-marcus-cto.jpg" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">Marcus Johnson</h3>
                <p className="text-sm text-muted-foreground mb-3">CTO & Co-Founder</p>
                <p className="text-sm text-muted-foreground">
                  AI/ML expert with experience at Google and OpenAI. Leads our technical vision and product development.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/team-elena-design.jpg" />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">Elena Rodriguez</h3>
                <p className="text-sm text-muted-foreground mb-3">Head of Design</p>
                <p className="text-sm text-muted-foreground">
                  UX designer focused on creating intuitive, accessible learning experiences. Previously at Duolingo and
                  Khan Academy.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/team-david-education.jpg" />
                  <AvatarFallback>DK</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">David Kim</h3>
                <p className="text-sm text-muted-foreground mb-3">Head of Education</p>
                <p className="text-sm text-muted-foreground">
                  Former high school teacher and curriculum designer. Ensures our content meets the highest educational
                  standards.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/team-priya-engineering.jpg" />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">Priya Patel</h3>
                <p className="text-sm text-muted-foreground mb-3">Lead Engineer</p>
                <p className="text-sm text-muted-foreground">
                  Full-stack engineer with expertise in scalable systems. Builds the infrastructure that powers millions
                  of learning sessions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/team-alex-community.jpg" />
                  <AvatarFallback>AT</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">Alex Thompson</h3>
                <p className="text-sm text-muted-foreground mb-3">Community Manager</p>
                <p className="text-sm text-muted-foreground">
                  Builds and nurtures our global learning community. Connects learners and facilitates knowledge
                  sharing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join our mission</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform how the world learns? Start your personalized learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Start Learning Free
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Footer */}
      <footer className="relative z-10 mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="bg-background/80 backdrop-blur-md border rounded-2xl shadow-2xl supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold">PathWise</span>
                    <span className="text-xs text-muted-foreground -mt-1">Your Learning, Perfected</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Empowering learners worldwide with AI-powered personalized education.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-muted hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <span className="text-xs font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-muted hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <span className="text-xs font-bold">t</span>
                  </div>
                  <div className="w-8 h-8 bg-muted hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <span className="text-xs font-bold">in</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <Link
                      href="/features"
                      className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-foreground">Product</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <Link
                      href="/faq"
                      className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <Link
                      href="/terms"
                      className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">&copy; 2024 PathWise. All rights reserved.</p>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <span className="text-xs text-muted-foreground">Made with</span>
                <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">for learners</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
