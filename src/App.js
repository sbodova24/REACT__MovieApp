import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderView from './components/Header/HeaderView';
import HomeView from './views/HomeView';
import SignInView from './views/SignInView';
import SignUpView from './views/SignUpView';
import MoviesView from './views/MoviesView';
import GroupsView from './views/GroupsView';
import MovieDetails from './views/MovieDetailsView/MovieDetails';

export default function App() {

  return (
    <div className="App bg-dark text-white">
      <Router>
        <HeaderView />

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/sign-in" element={<SignInView />} />
          <Route path="/sign-up" element={<SignUpView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/groups" element={<GroupsView />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
  
}

