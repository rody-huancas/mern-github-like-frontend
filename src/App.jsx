import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Sidebar } from "./components";
import { Toaster } from "react-hot-toast";
import { ExplorePage, HomePage, LikesPage, LoginPage, SignUpPage } from "./pages";

const App = () => {
  return (
    <div className="flex text-white">
      <Sidebar />

      <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/likes" element={<LikesPage />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
};

export default App;
