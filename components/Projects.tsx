import axios from "axios";
import { useEffect, useState } from "react";
import { Repo } from "../types/Project";
export default function Projects() {
  const [projects, setProjects] = useState<Repo[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/TeamEvie/repos")
      .then((res) => {
        const filteredRepos = res.data.filter(
          (repo: Repo) => repo.name !== ".github"
        );

        setProjects(filteredRepos);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  while (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blurple drop-shadow-2xl" />
      </div>
    );
  }
  return (
    <div className="md:grid grid-cols-2 gap-4">
      {projects ? (
        projects.map((project) => (
          <section className="px-2 mb-8 md:px-0" key={project.id}>
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
              <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                  <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                      <span className="block text-indigo-600 xl:inline">
                        {project.name}
                      </span>
                    </h1>
                    <p className="mx-auto text-base dark:text-gray-400 text-black sm:max-w-md lg:text-xl md:max-w-3xl">
                      {project.description}
                    </p>
                    <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                      <a
                        href={project.html_url}
                        className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                      >
                        GitHub
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 ml-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
