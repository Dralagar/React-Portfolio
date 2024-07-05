import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Styles/App.css';

// Lazy loading components
const Home = lazy(() => import('./Components/Home'));
const Portfolio = lazy(() => import('./Components/Portfolio'));
const CV = lazy(() => import('./Components/CV'));
const Blog = lazy(() => import('./Components/Blog'));
const Contact = lazy(() => import('./Components/Contact'));
const NotFound = lazy(() => import('./Components/NotFound')); // Import the NotFound component

// Simple Protected Route example
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = true; // Replace with actual authentication logic
  return isAuthenticated ? element : <Navigate to="/" />;
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/CV" element={<ProtectedRoute element={<CV />} />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> {/* Use NotFound component for undefined paths */}
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
