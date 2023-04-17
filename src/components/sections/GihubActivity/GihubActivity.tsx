import { useEffect } from "react";

export function GihubActivity() {
  useEffect(() => {
    fetchGithubDataAndStats();
  }, []);

  const fetchGithubStats = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/balthazarely`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGithubData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/balthazarely/events`
      );
      const data = await response.json();
      const pushData = data.map((data: any) => {
        const date = new Date(data.created_at);
        const localTime = date.toLocaleString();
        return {
          type: data.type,
          commitMsg: data.payload.commits[0].message,
          url: data.payload.commits[0].url,
          time: localTime,
          repo: data.repo.name,
          repoUrl: data.repo.url,
        };
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGithubDataAndStats = async () => {
    try {
      const [stats, data] = await Promise.all([
        fetchGithubStats(),
        fetchGithubData(),
      ]);
      console.log(stats);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
