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

  const getUserProfileAndRepos = useCallback(
    async (username = "rody-huancas") => {
      setloading(true);
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userProfile = await userRes.json();
        setUserProfile(userProfile);

        const repoRes = await fetch(userProfile.repos_url);
        const repos = await repoRes.json();
        setRepos(repos);

        return { userProfile, repos };
      } catch (error) {
        toast.error(error.message);
      } finally {
        setloading(false);
      }
    },
    []
  );

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  const onSearch = async (e, username) => {
    e.preventDefault();

    setloading(true);
    setRepos([]);
    setUserProfile(null);

    const { userProfile, repos } = await getUserProfileAndRepos(username);

    setUserProfile(userProfile);
    setRepos(repos);
    setloading(false);
  };

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      <SortRepos />
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && <ProfileInfo userProfile={userProfile} />}

        {repos.length > 0 && !loading && <Repos repos={repos} />}

        {loading && <Spinner />}
      </div>
    </div>
  );
};
