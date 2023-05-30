import Link from "next/link";

async function fetchRepoContents(name) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(`https://api.github.com/repos/nathanaeltchamba/${name}/contents`, {
        next: {
            revalidate: 60
        }
    }); 
    const contents = await response.json();
    return contents;
}

const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((content) => content.type === 'dir');

    return (
        <>
            <h3>Directories</h3>
            <ul className="no-bullet">
                {dirs.map((dir) => (
                    <li key={dir.path}>
                        <Link className="no-underline" href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};


export default RepoDirs