"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Star, User, Search, Heart, Bell, Settings, LogOut, Dumbbell } from "lucide-react"
import Link from "next/link"

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const upcomingSessions = [
    {
      id: 1,
      coach: "Sarah Johnson",
      type: "Yoga",
      date: "2024-01-15",
      time: "09:00 AM",
      duration: "60 min",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      coach: "Mike Chen",
      type: "Weight Lifting",
      date: "2024-01-16",
      time: "02:00 PM",
      duration: "45 min",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const recentSessions = [
    {
      id: 1,
      coach: "Emma Wilson",
      type: "Cardio",
      date: "2024-01-10",
      rating: 5,
      feedback: "Amazing session! Emma really pushed me to my limits.",
    },
    {
      id: 2,
      coach: "David Rodriguez",
      type: "Zumba",
      date: "2024-01-08",
      rating: 4,
      feedback: "Fun and energetic class. Great music selection!",
    },
  ]

  const favoriteCoaches = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Yoga & Meditation",
      rating: 4.9,
      sessions: 12,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Mike Chen",
      specialty: "Strength Training",
      rating: 4.8,
      sessions: 8,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold">EnergyX</h1>
            </div>
            <Badge variant="secondary">Member Dashboard</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back, John!</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Ready for your next workout? Let's keep the momentum going!
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="coaches">Find Coaches</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">This Week</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">2 upcoming</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Favorite Coaches</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">Active connections</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Avg Rating Given</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8</div>
                  <p className="text-xs text-muted-foreground">⭐ Great feedback</p>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Sessions
                </CardTitle>
                <CardDescription>Your scheduled workouts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={session.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {session.coach
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{session.coach}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{session.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{session.date}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {session.time} • {session.duration}
                        </p>
                      </div>
                      <Button size="sm">Join Session</Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/user/book">
                    <Button className="w-full">Book New Session</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Session History</CardTitle>
                <CardDescription>Your completed workouts and feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSessions.map((session) => (
                    <div key={session.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{session.coach}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {session.type} • {session.date}
                          </p>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < session.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{session.feedback}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="coaches" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="mr-2 h-5 w-5" />
                  Find Coaches
                </CardTitle>
                <CardDescription>Discover and book sessions with certified trainers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Coach Search Coming Soon</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Advanced filtering by availability, exercise type, and ratings
                  </p>
                  <Button>Explore Coaches</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Favorite Coaches
                </CardTitle>
                <CardDescription>Your preferred trainers for quick booking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {favoriteCoaches.map((coach) => (
                    <div key={coach.id} className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-4 mb-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={coach.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {coach.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{coach.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{coach.specialty}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            {coach.rating}
                          </span>
                          <span>{coach.sessions} sessions</span>
                        </div>
                        <Button size="sm">Book Session</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Profile Settings
                </CardTitle>
                <CardDescription>Manage your account information and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Profile Management</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Update your personal information, fitness goals, and preferences
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
