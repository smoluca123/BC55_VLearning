import Courses from './modules/coureses/pages/Courses';
import Home from './modules/home/pages/Home';
import MainLayout from './modules/layout/pages/MainLayout';
import { ThemeProvider } from '@material-tailwind/react';

const { BrowserRouter, Routes, Route } = require('react-router-dom');

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/courses" element={<Courses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
