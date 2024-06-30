import { useState } from "react";
import { ProfileInfo, Repos, Search, SortRepos, Spinner } from "../components";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useCallback } from "react";

export const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setloading] = useState(false);
  const [sortType, setSortType] = useState("forks");

  const getUserProfileAndRepos = useCallback(async () => {
    setloading(true);
    try {
      const userRes = await fetch("https://api.github.com/users/rody-huancas");
      const userProfile = await userRes.json();
      setUserProfile(userProfile);

      const repoRes = await fetch(userProfile.repos_url);
      const repos = await repoRes.json();
      setRepos(repos);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  }, []);

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  return (
    <div className="m-4">
      <Search />
      <SortRepos />
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        { userProfile && <ProfileInfo userProfile={userProfile} /> }
        
        { repos.length > 0 && !loading && <Repos repos={repos} /> }

        { loading && <Spinner /> }
      </div>
    </div>
  );
};
