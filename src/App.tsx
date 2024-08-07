import { Routes, Route } from 'react-router-dom';
import './globals.css';
import SigninForm from './auth/forms/SigninForm';
import Home from './_root/pages/Home';
import SignupForm from './auth/forms/SignupForm';
import AuthLayout from './auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from './components/ui/toaster';
import { AllUsers, CreatePost, EditPost, Explore, PostDetails, Profile, Saved, UpdateProfile } from './_root/pages';

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />}/>
          <Route path="/saved" element={<Saved />}/>
          <Route path="/all-users" element={<AllUsers />}/>
          <Route path="/create-post" element={<CreatePost />}/>
          <Route path="/update-post/:id" element={<EditPost />}/>
          <Route path="/posts/:id" element={<PostDetails />}/>
          <Route path="/profiles/:id" element={<Profile />}/>
          <Route path="/update-profile/:id" element={<UpdateProfile />}/>
        </Route>
      </Routes>

      <Toaster />
    </main>
  )
}

export default App
