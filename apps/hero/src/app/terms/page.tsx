import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Scale, FileText, Calendar } from "lucide-react"
import Link from "next/link"
import { ScrollHeader } from "@/components/scroll-header"
import { ParticleBackground } from "@/components/particle-background"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />

      <ScrollHeader />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              <Scale className="w-4 h-4 mr-2" />
              Legal
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Terms of{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Please read these terms carefully before using PathWise. By accessing our service, you agree to be bound
              by these terms.
            </p>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              Last updated: March 1, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    1. Acceptance of Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    By accessing and using PathWise ("the Service"), you accept and agree to be bound by the terms and
                    provision of this agreement. If you do not agree to abide by the above, please do not use this
                    service.
                  </p>
                  <p className="text-muted-foreground">
                    These Terms of Service ("Terms") govern your use of our website located at pathwise.com (the
                    "Service") operated by PathWise Inc. ("us", "we", or "our").
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>2. Description of Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    PathWise is an AI-powered learning platform that provides personalized educational content and
                    learning paths. Our service includes:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>AI-generated learning paths and curricula</li>
                    <li>Interactive lessons and exercises</li>
                    <li>Progress tracking and analytics</li>
                    <li>Community features and discussion forums</li>
                    <li>Assessment and certification tools</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>3. User Accounts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    To access certain features of the Service, you must register for an account. When you create an
                    account, you must provide information that is accurate, complete, and current at all times.
                  </p>
                  <p className="text-muted-foreground">
                    You are responsible for safeguarding the password and for maintaining the confidentiality of your
                    account. You agree not to disclose your password to any third party and to take sole responsibility
                    for activities that occur under your account.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>4. Acceptable Use</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree
                    not to use the Service:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>In any way that violates applicable federal, state, local, or international law</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                    <li>To collect or track personal information of other users</li>
                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>5. Intellectual Property Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The Service and its original content, features, and functionality are and will remain the exclusive
                    property of PathWise Inc. and its licensors. The Service is protected by copyright, trademark, and
                    other laws.
                  </p>
                  <p className="text-muted-foreground">
                    You retain ownership of any content you submit, post, or display on or through the Service ("User
                    Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license
                    to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such
                    content.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>6. Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of
                    the Service, to understand our practices.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/privacy">View Privacy Policy</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>7. Subscription and Payment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Some parts of the Service are billed on a subscription basis. You will be billed in advance on a
                    recurring and periodic basis. Billing cycles are set on a monthly or annual basis, depending on the
                    type of subscription plan you select.
                  </p>
                  <p className="text-muted-foreground">
                    A valid payment method is required to process the payment for your subscription. You shall provide
                    accurate and complete billing information including full name, address, state, zip code, telephone
                    number, and valid payment method information.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>8. Cancellation and Refunds</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    You may cancel your subscription at any time through your account settings or by contacting our
                    support team. Upon cancellation, you will continue to have access to the Service until the end of
                    your current billing period.
                  </p>
                  <p className="text-muted-foreground">
                    We offer a 30-day money-back guarantee for new subscribers. If you are not satisfied with the
                    Service within the first 30 days, you may request a full refund.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>9. Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    In no event shall PathWise Inc., nor its directors, employees, partners, agents, suppliers, or
                    affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                    including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                    resulting from your use of the Service.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>10. Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                    revision is material, we will try to provide at least 30 days notice prior to any new terms taking
                    effect.
                  </p>
                  <p className="text-muted-foreground">
                    By continuing to access or use our Service after those revisions become effective, you agree to be
                    bound by the revised terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>11. Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Email: legal@pathwise.com</p>
                    <p>Address: 123 Learning Street, San Francisco, CA 94105</p>
                    <p>Phone: +1 (555) 123-4567</p>
                  </div>
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
