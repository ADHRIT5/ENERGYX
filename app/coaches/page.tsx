"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, MapPin, Clock, Dumbbell, Heart } from "lucide-react"
import Link from "next/link"

export default function CoachesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedGender, setSelectedGender] = useState("all")
  const [selectedTime, setSelectedTime] = useState("all")

  const coaches = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Yoga & Meditation",
      bio: "Certified yoga instructor with 8+ years of experience in Hatha and Vinyasa yoga.",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 75,
      location: "Downtown Studio",
      gender: "female",
      types: ["yoga", "meditation"],
      availability: ["morning", "afternoon"],
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    {
      id: 2,
      name: "Mike Chen",
      specialty: "Strength Training",
      bio: "Former competitive powerlifter specializing in strength and muscle building programs.",
      rating: 4.8,
      reviews: 89,
      hourlyRate: 85,
      location: "Iron Gym",
      gender: "male",
      types: ["weight-lifting", "strength"],
      availability: ["afternoon", "evening"],
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    {
      id: 3,
      name: "Emma Wilson",
      specialty: "Cardio & HIIT",
      bio: "High-energy trainer focused on cardiovascular fitness and fat burning workouts.",
      rating: 4.7,
      reviews: 156,
      hourlyRate: 70,
      location: "FitZone Center",
      gender: "female",
      types: ["cardio", "hiit"],
      availability: ["morning", "evening"],
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    {
      id: 4,
      name: "David Rodriguez",
      specialty: "Zumba & Dance",
      bio: "Professional dancer and certified Zumba instructor bringing fun to fitness.",
      rating: 4.6,
      reviews: 203,
      hourlyRate: 65,
      location: "Dance Studio Plus",
      gender: "male",
      types: ["zumba", "dance"],
      availability: ["afternoon", "evening"],
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    {
      id: 5,
      name: "Lisa Park",
      specialty: "Pilates & Core",
      bio: "Pilates expert helping clients build core strength and improve posture.",
      rating: 4.8,
      reviews: 94,
      hourlyRate: 80,
      location: "Wellness Center",
      gender: "female",
      types: ["pilates", "core"],
      availability: ["morning", "afternoon"],
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    {
      id: 6,
      name: "James Thompson",
      specialty: "CrossFit & Functional",
      bio: "CrossFit Level 2 trainer focused on functional movement and athletic performance.",
      rating: 4.9,
      reviews: 78,
      hourlyRate: 90,
      location: "CrossFit Box",
      gender: "male",
      types: ["crossfit", "functional"],
      availability: ["morning", "evening"],
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
  ]

  const exerciseTypes = [
    { value: "all", label: "All Types" },
    { value: "yoga", label: "Yoga" },
    { value: "weight-lifting", label: "Weight Lifting" },
    { value: "cardio", label: "Cardio" },
    { value: "zumba", label: "Zumba" },
    { value: "pilates", label: "Pilates" },
    { value: "crossfit", label: "CrossFit" },
  ]

  const timeSlots = [
    { value: "all", label: "Any Time" },
    { value: "morning", label: "Morning (6AM-12PM)" },
    { value: "afternoon", label: "Afternoon (12PM-6PM)" },
    { value: "evening", label: "Evening (6PM-10PM)" },
  ]

  const filteredCoaches = coaches.filter((coach) => {
    const matchesSearch =
      coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "all" || coach.types.includes(selectedType)
    const matchesGender = selectedGender === "all" || coach.gender === selectedGender
    const matchesTime = selectedTime === "all" || coach.availability.includes(selectedTime)

    return matchesSearch && matchesType && matchesGender && matchesTime
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold">EnergyX</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Find Your Perfect Coach</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Discover certified trainers and book personalized fitness sessions
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Search & Filter Coaches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <Input
                  placeholder="Search by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Exercise Type</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {exerciseTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Gender</label>
                <Select value={selectedGender} onValueChange={setSelectedGender}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Gender</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Availability</label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot.value} value={slot.value}>
                        {slot.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredCoaches.length} of {coaches.length} coaches
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoaches.map((coach) => (
            <Card key={coach.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={coach.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {coach.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-lg">{coach.name}</CardTitle>
                      {coach.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="font-medium text-blue-600">{coach.specialty}</CardDescription>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        {coach.rating} ({coach.reviews})
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {coach.location}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{coach.bio}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold">${coach.hourlyRate}/hour</div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4 mr-1" />
                    Available {coach.availability.join(", ")}
                  </div>
                </div>
                <div className="flex space-x-2 mb-4">
                  {coach.types.map((type) => (
                    <Badge key={type} variant="outline" className="text-xs">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Link href={`/coaches/${coach.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </Link>
                  <Link href={`/book/${coach.id}`} className="flex-1">
                    <Button className="w-full">Book Session</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCoaches.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No coaches found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Try adjusting your search criteria or filters</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedType("all")
                  setSelectedGender("all")
                  setSelectedTime("all")
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
