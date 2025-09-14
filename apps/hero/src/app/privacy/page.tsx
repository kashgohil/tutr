import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Shield, Lock, Eye, Database, Calendar } from "lucide-react"
import Link from "next/link"
import { ScrollHeader } from "@/components/scroll-header"
import { ParticleBackground } from "@/components/particle-background"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />

      <ScrollHeader />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Privacy
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Privacy{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information when you use PathWise.
            </p>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              Last updated: March 1, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    1. Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us, such as when you create an account, use our
                    services, or contact us for support.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Personal Information:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Name, email address, and contact information</li>
                      <li>Account credentials and profile information</li>
                      <li>Payment and billing information</li>
                      <li>Learning preferences and goals</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Usage Information:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Learning progress and performance data</li>
                      <li>Course completion and assessment results</li>
                      <li>Time spent on lessons and activities</li>
                      <li>Device and browser information</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    2. How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We use the information we collect to provide, maintain, and improve our services. Specifically, we
                    use your information to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Create and manage your account</li>
                    <li>Provide personalized learning experiences</li>
                    <li>Track your progress and generate analytics</li>
                    <li>Process payments and manage subscriptions</li>
                    <li>Send you important updates and notifications</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Improve our AI algorithms and content recommendations</li>
                    <li>Ensure security and prevent fraud</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>3. Information Sharing and Disclosure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                    consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>
                      <strong>Service Providers:</strong> We may share information with trusted third-party service
                      providers who assist us in operating our platform
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose information when required by law or to
                      protect our rights and safety
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> Information may be transferred in connection with a merger,
                      acquisition, or sale of assets
                    </li>
                    <li>
                      <strong>Consent:</strong> We may share information with your explicit consent for specific
                      purposes
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    4. Data Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Security Measures Include:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security audits and vulnerability assessments</li>
                      <li>Access controls and authentication requirements</li>
                      <li>Employee training on data protection practices</li>
                      <li>Incident response and breach notification procedures</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>5. Data Retention</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We retain your personal information for as long as necessary to provide our services and fulfill the
                    purposes outlined in this privacy policy. When you delete your account, we will delete or anonymize
                    your personal information within 30 days.
                  </p>
                  <p className="text-muted-foreground">
                    Some information may be retained for longer periods when required by law or for legitimate business
                    purposes, such as fraud prevention and security.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>6. Your Rights and Choices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    You have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>
                      <strong>Access:</strong> You can request access to the personal information we hold about you
                    </li>
                    <li>
                      <strong>Correction:</strong> You can update or correct your personal information through your
                      account settings
                    </li>
                    <li>
                      <strong>Deletion:</strong> You can request deletion of your personal information, subject to
                      certain exceptions
                    </li>
                    <li>
                      <strong>Portability:</strong> You can request a copy of your data in a structured,
                      machine-readable format
                    </li>
                    <li>
                      <strong>Opt-out:</strong> You can opt out of marketing communications at any time
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>7. Cookies and Tracking Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We use cookies and similar tracking technologies to enhance your experience on our platform. These
                    technologies help us:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze usage patterns and improve our services</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Ensure security and prevent fraud</li>
                  </ul>
                  <p className="text-muted-foreground">
                    You can control cookie settings through your browser preferences, though some features may not
                    function properly if cookies are disabled.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>8. Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our service is not intended for children under the age of 13. We do not knowingly collect personal
                    information from children under 13. If you are a parent or guardian and believe your child has
                    provided us with personal information, please contact us immediately.
                  </p>
                  <p className="text-muted-foreground">
                    For users between 13 and 18, we recommend parental guidance and supervision when using our platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>9. International Data Transfers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Your information may be transferred to and processed in countries other than your own. We ensure
                    that such transfers comply with applicable data protection laws and implement appropriate safeguards
                    to protect your information.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>10. Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We may update this privacy policy from time to time. We will notify you of any material changes by
                    posting the new privacy policy on this page and updating the "Last updated" date.
                  </p>
                  <p className="text-muted-foreground">
                    We encourage you to review this privacy policy periodically to stay informed about how we protect
                    your information.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>11. Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Email: privacy@pathwise.com</p>
                    <p>Address: 123 Learning Street, San Francisco, CA 94105</p>
                    <p>Phone: +1 (555) 123-4567</p>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
                    <span className="text-xl font-bold">Tutr</span>
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
              <p className="text-muted-foreground text-sm">&copy; 2024 Tutr. All rights reserved.</p>
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
