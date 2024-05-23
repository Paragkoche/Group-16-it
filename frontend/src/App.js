import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/upload" element={<FileUpload />} />
            <Route path="/files" element={<FileList />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
