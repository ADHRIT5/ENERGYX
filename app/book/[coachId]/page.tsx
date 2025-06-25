"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Clock, Dumbbell, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function BookSessionPage({ params }: { params: { coachId: string } }) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [sessionType, setSessionType] = useState("")
  const [notes, setNotes] = useState("")
  const [isBooking, setIsBooking] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)
  const router = useRouter()

  // Mock coach data - in real app, fetch based on coachId
  const coach = {
    id: 1,
    name: "Sarah Johnson",
    specialty: "Yoga & Meditation",
    bio: "Certified yoga instructor with 8+ years of experience in Hatha and Vinyasa yoga. I specialize in helping beginners build confidence and advanced practitioners deepen their practice.",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 75,
    location: "Downtown Studio",
    avatar: "/placeholder.svg?height=120&width=120",
    verified: true,
    sessionTypes: [
      { value: "yoga-beginner", label: "Beginner Yoga (60 min)", price: 75 },
      { value: "yoga-advanced", label: "Advanced Yoga (60 min)", price: 85 },
      { value: "meditation", label: "Meditation Session (45 min)", price: 65 },
      { value: "private-yoga", label: "Private Yoga (90 min)", price: 120 },
    ],
    availableTimes: ["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "03:30 PM", "05:00 PM", "06:30 PM"],
  }

  const selectedSessionType = coach.sessionTypes.find((type) => type.value === sessionType)

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !sessionType) {
      alert("Please fill in all required fields")
      return
    }

    setIsBooking(true)

    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false)
      setBookingComplete(true)
    }, 2000)
  }

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <CardTitle>Booking Confirmed!</CardTitle>
            <CardDescription>Your session with {coach.name} has been successfully booked</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="font-semibold">{selectedSessionType?.label}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {selectedDate?.toDateString()} at {selectedTime}
              </p>
              <p className="text-lg font-bold text-green-600">${selectedSessionType?.price}</p>
            </div>
            <div className="space-y-2">
              <Button className="w-full" onClick={() => router.push("/dashboard/user")}>
                Go to Dashboard
              </Button>
              <Button variant="outline" className="w-full" onClick={() => router.push("/coaches")}>
                Book Another Session
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/coaches" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Coaches</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold">EnergyX</h1>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coach Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={coach.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {coach.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <CardTitle>{coach.name}</CardTitle>
                      {coach.verified && <Badge variant="secondary">Verified</Badge>}
                    </div>
                    <CardDescription className="font-medium text-blue-600">{coach.specialty}</CardDescription>
                    <div className="flex items-center space-x-4 mt-2 text-sm">
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
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">{coach.bio}</p>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Book a Session</CardTitle>
                <CardDescription>Select your preferred date, time, and session type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Session Type Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Session Type *</label>
                  <Select value={sessionType} onValueChange={setSessionType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a session type" />
                    </SelectTrigger>
                    <SelectContent>
                      {coach.sessionTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex justify-between items-center w-full">
                            <span>{type.label}</span>
                            <span className="ml-4 font-semibold">${type.price}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Date *</label>
                  <div className="border rounded-lg p-4">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      className="rounded-md"
                    />
                  </div>
                </div>

                {/* Time Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Available Times *</label>
                  <div className="grid grid-cols-3 gap-2">
                    {coach.availableTimes.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className="justify-center"
                      >
                        <Clock className="h-4 w-4 mr-1" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Additional Notes (Optional)</label>
                  <Textarea
                    placeholder="Any specific goals, injuries, or preferences you'd like to share..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Booking Summary */}
                {selectedSessionType && selectedDate && selectedTime && (
                  <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Booking Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span>Session:</span>
                        <span className="font-medium">{selectedSessionType.label}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-medium">{selectedDate.toDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span className="font-medium">{coach.location}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span>${selectedSessionType.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Book Button */}
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleBooking}
                  disabled={!selectedDate || !selectedTime || !sessionType || isBooking}
                >
                  {isBooking ? "Booking Session..." : `Book Session - $${selectedSessionType?.price || 0}`}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By booking, you agree to our terms of service and cancellation policy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
