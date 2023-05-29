import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye, FaClock } from "react-icons/fa";

async function fetchRepo(name) {
    const response = await fetch(`https://api.github.com/repos/nathanaeltchamba/${name}`, {
        next: {
            revalidate: 60
        }
    });
    const repo = await response.json();
    return repo;
}

const Repo = async ({ name }) => {
    const repo = await fetchRepo(name);

  return (
    <>
        <h2>{ repo.name }</h2>
        <p>{ repo.description }</p>
        <div className="card-stats">
            <div className="card-stat">
                <FaClock/>
                  <span>
                    pushed at {new Date(repo.created_at).toLocaleTimeString()}
                  </span>
            </div>
        </div>
    </>
  )
}

export default Repo