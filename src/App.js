import Home from './modules/home/pages/Home';
import MainLayout from './modules/layout/pages/MainLayout';

const { BrowserRouter, Routes, Route } = require('react-router-dom');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
