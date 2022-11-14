import { useLocation, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Project from './pages/Project';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
import Login from './admin/pages/Login';
import Protected from './admin/pages/Protected';
import Dashboard from './admin/pages/Dashboard';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { pathname } = useLocation();

  return (
    <div className='App'>
      {pathname !== '/dashboard' && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Service />} />
        <Route path='project' element={<Project />} />
        <Route path='ourTeam' element={<OurTeam />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route
          path='dashboard'
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {pathname !== '/dashboard' && <Footer />}
      <ToastContainer />
    </div>
  );
}

export default App;
