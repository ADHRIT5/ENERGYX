import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/auth/LoginPage"
import SignupPage from "./pages/auth/SignupPage"
import UserDashboard from "./pages/dashboard/UserDashboard"
import CoachDashboard from "./pages/dashboard/CoachDashboard"
import CoachesPage from "./pages/CoachesPage"
import BookSessionPage from "./pages/BookSessionPage"
import "./App.css"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="energyx-ui-theme">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignupPage />} />
            <Route path="/dashboard/user" element={<UserDashboard />} />
            <Route path="/dashboard/coach" element={<CoachDashboard />} />
            <Route path="/coaches" element={<CoachesPage />} />
            <Route path="/book/:coachId" element={<BookSessionPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
