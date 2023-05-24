import React from "react";

const pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; 
        i <= Math.ceil(totalPosts / postsPerPage);
        i++) {
            pageNumbers.push(i)
        }
    
    return (
        <nav className="w-screen flex justify-center">
                <ul className="list-style-none flex">
                    {pageNumbers.map(number => (
                        <li key={number} className="relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 dark:hover:bg-neutral-700 dark:hover:text-white">
                            <a onClick={() => paginate(number)} href="!#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
        </nav>
    )
}

export default pagination;