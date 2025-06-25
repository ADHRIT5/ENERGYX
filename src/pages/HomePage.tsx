"use client"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Users, Calendar, Star, TrendingUp, Shield } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">EnergyX</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/auth/login")}>
              Login
            </Button>
            <Button onClick={() => navigate("/auth/signup")}>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            Modern Gym Management Platform
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Transform Your Fitness Journey with <span className="text-blue-600">EnergyX</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with professional coaches, book personalized sessions, and track your progress in one comprehensive
            platform designed for modern fitness enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/auth/signup?role=user")} className="w-full sm:w-auto">
              <Users className="mr-2 h-5 w-5" />
              Join as Member
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/auth/signup?role=coach")}
              className="w-full sm:w-auto"
            >
              <Dumbbell className="mr-2 h-5 w-5" />
              Become a Coach
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why Choose EnergyX?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Calendar className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Smart Scheduling</CardTitle>
                <CardDescription>
                  Book sessions with coaches based on real-time availability and preferences
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Star className="h-10 w-10 text-yellow-500 mb-2" />
                <CardTitle>Feedback System</CardTitle>
                <CardDescription>Rate and review coaches to help others make informed decisions</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>Monitor your fitness journey with detailed analytics and insights</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Expert Coaches</CardTitle>
                <CardDescription>
                  Connect with certified trainers specializing in various fitness disciplines
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Secure Platform</CardTitle>
                <CardDescription>Your data is protected with enterprise-grade security measures</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Dumbbell className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Multi-Discipline</CardTitle>
                <CardDescription>
                  Yoga, Weight Lifting, Cardio, Zumba - find coaches for every workout type
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h3>
          <p className="text-xl mb-8 opacity-90">Join thousands of members and coaches already using EnergyX</p>
          <Button size="lg" variant="secondary" onClick={() => navigate("/auth/signup")}>
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Dumbbell className="h-6 w-6" />
            <span className="text-lg font-semibold">EnergyX</span>
          </div>
          <p className="text-gray-400">© 2024 EnergyX. All rights reserved. Empowering fitness journeys worldwide.</p>
        </div>
      </footer>
    </div>
  )
}
