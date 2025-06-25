"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Dumbbell, Eye, EyeOff } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)
  const defaultRole = searchParams.get("role") || "user"
  const [activeTab, setActiveTab] = useState(defaultRole)

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions")
      return
    }

    setIsLoading(true)

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false)
      if (activeTab === "user") {
        navigate("/dashboard/user")
      } else {
        navigate("/dashboard/coach")
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Dumbbell className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold">EnergyX</h1>
          </div>
          <CardTitle>Create Your Account</CardTitle>
          <CardDescription>Join EnergyX and start your fitness transformation today</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="user">Member</TabsTrigger>
              <TabsTrigger value="coach">Coach</TabsTrigger>
            </TabsList>

            <TabsContent value="user" className="space-y-4 mt-6">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="user-first-name">First Name</Label>
                    <Input id="user-first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-last-name">Last Name</Label>
                    <Input id="user-last-name" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user-email">Email</Label>
                  <Input id="user-email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="user-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms-user"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  />
                  <Label htmlFor="terms-user" className="text-sm">
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={() => navigate("/terms")}
                      className="text-blue-600 hover:underline bg-transparent border-none cursor-pointer"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      onClick={() => navigate("/privacy")}
                      className="text-blue-600 hover:underline bg-transparent border-none cursor-pointer"
                    >
                      Privacy Policy
                    </button>
                  </Label>
                </div>
                <Button type="submit" className="w-full" disabled={isLoading || !agreedToTerms}>
                  {isLoading ? "Creating Account..." : "Create Member Account"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="coach" className="space-y-4 mt-6">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="coach-first-name">First Name</Label>
                    <Input id="coach-first-name" placeholder="Jane" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coach-last-name">Last Name</Label>
                    <Input id="coach-last-name" placeholder="Smith" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coach-email">Email</Label>
                  <Input id="coach-email" type="email" placeholder="jane@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coach-certification">Certification ID</Label>
                  <Input id="coach-certification" placeholder="Your certification number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coach-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="coach-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms-coach"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  />
                  <Label htmlFor="terms-coach" className="text-sm">
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={() => navigate("/terms")}
                      className="text-blue-600 hover:underline bg-transparent border-none cursor-pointer"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      onClick={() => navigate("/privacy")}
                      className="text-blue-600 hover:underline bg-transparent border-none cursor-pointer"
                    >
                      Privacy Policy
                    </button>
                  </Label>
                </div>
                <Button type="submit" className="w-full" disabled={isLoading || !agreedToTerms}>
                  {isLoading ? "Creating Account..." : "Create Coach Account"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/auth/login")}
              className="text-blue-600 hover:underline bg-transparent border-none cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
