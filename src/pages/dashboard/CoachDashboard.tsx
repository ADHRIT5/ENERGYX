"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Calendar, Star, User, TrendingUp, Bell, Settings, LogOut, Dumbbell } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function CoachDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isAvailable, setIsAvailable] = useState(true)
  const navigate = useNavigate()

  const upcomingSessions = [
    {
      id: 1,
      client: "John Doe",
      type: "Weight Lifting",
      date: "2024-01-15",
      time: "10:00 AM",
      duration: "45 min",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      client: "Sarah Smith",
      type: "Yoga",
      date: "2024-01-15",
      time: "02:00 PM",
      duration: "60 min",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      client: "Mike Johnson",
      type: "Cardio",
      date: "2024-01-16",
      time: "09:00 AM",
      duration: "30 min",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const recentFeedback = [
    {
      id: 1,
      client: "Emma Wilson",
      rating: 5,
      feedback: "Amazing trainer! Really helped me improve my form and technique.",
      date: "2024-01-10",
      type: "Weight Lifting",
    },
    {
      id: 2,
      client: "David Chen",
      rating: 5,
      feedback: "Great energy and motivation. Best yoga instructor I've had!",
      date: "2024-01-08",
      type: "Yoga",
    },
    {
      id: 3,
      client: "Lisa Rodriguez",
      rating: 4,
      feedback: "Good session, would like more variety in exercises next time.",
      date: "2024-01-06",
      type: "Cardio",
    },
  ]

  const weeklyStats = {
    totalSessions: 18,
    newClients: 3,
    avgRating: 4.8,
    earnings: 1250,
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
              <Dumbbell className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold">EnergyX</h1>
            </div>
            <Badge variant="secondary">Coach Dashboard</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Available</span>
              <Switch checked={isAvailable} onCheckedChange={setIsAvailable} />
            </div>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back, Sarah!</h2>
          <p className="text-gray-600 dark:text-gray-300">
            You have 3 sessions scheduled for today. Keep inspiring your clients!
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">This Week</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{weeklyStats.totalSessions}</div>
                  <p className="text-xs text-muted-foreground">Sessions completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">New Clients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{weeklyStats.newClients}</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{weeklyStats.avgRating}</div>
                  <p className="text-xs text-muted-foreground">⭐ Excellent feedback</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${weeklyStats.earnings}</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Today's Sessions
                </CardTitle>
                <CardDescription>Your scheduled client sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={session.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {session.client
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{session.client}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{session.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{session.time}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{session.duration}</p>
                      </div>
                      <Button size="sm">Start Session</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Feedback */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-5 w-5" />
                  Recent Feedback
                </CardTitle>
                <CardDescription>What your clients are saying</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFeedback.slice(0, 2).map((feedback) => (
                    <div key={feedback.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{feedback.client}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {feedback.type} • {feedback.date}
                          </p>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < feedback.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{feedback.feedback}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Session Management</CardTitle>
                <CardDescription>Manage your upcoming and past sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={session.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {session.client
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{session.client}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {session.type} • {session.date} at {session.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Client Feedback</CardTitle>
                <CardDescription>Reviews and ratings from your clients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFeedback.map((feedback) => (
                    <div key={feedback.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{feedback.client}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {feedback.type} • {feedback.date}
                          </p>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < feedback.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{feedback.feedback}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Performance Analytics
                </CardTitle>
                <CardDescription>Track your coaching performance and growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Detailed insights into your session trends, client satisfaction, and earnings
                  </p>
                  <Button>View Full Analytics</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Coach Profile
                </CardTitle>
                <CardDescription>Manage your professional profile and availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Profile Management</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Update your bio, specialties, availability, and certification details
                  </p>
                  <Button>Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
