import toast from "react-hot-toast";
import { useState, useEffect, useCallback } from "react";
import { GITHUB_API_KEY, URL_GITHUB_USERS } from "../config/env.config";
import { ProfileInfo, Repos, Search, SortRepos, Spinner } from "../components";

export const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setloading] = useState(false);
  const [sortType, setSortType] = useState("forks");

  const getUserProfileAndRepos = useCallback(
    async (username = "rody-huancas") => {
      setloading(true);
      try {
        const userRes = await fetch(`${URL_GITHUB_USERS}/${username}`, {
          headers: {
            authorization: `token ${GITHUB_API_KEY}`,
          },
        });

        if (!userRes.ok) {
          if (userRes.status === 404) {
            throw new Error("Usuario no encontrado");
          } else {
            throw new Error("Error al obtener el perfil del usuario");
          }
        }

        const userProfile = await userRes.json();
        setUserProfile(userProfile);

        const repoRes = await fetch(userProfile.repos_url);
        if (!repoRes.ok) {
          throw new Error("Error al obtener los repositorios del usuario");
        }

        const repos = await repoRes.json();
        repos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
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
    setSortType("recent");
  };

  const onSort = (sortType) => {
    if (sortType === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortType === "stars") {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (sortType === "forks") {
      repos.sort((a, b) => b.forks_count - a.forks_count);
    }
    setSortType(sortType);
    setRepos([...repos]);
  };

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />

      {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}

      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && <ProfileInfo userProfile={userProfile} />}

        {!loading && <Repos repos={repos} />}

        {loading && <Spinner />}
      </div>
    </div>
  );
};
