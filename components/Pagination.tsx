import React, { useState } from "react";
import { useRouter } from 'next/router';
import Layout from "./Layout";

type Props = {
    page: number;
    pageCount: number;
  };

const Pagination: React.FC<Props> = (props) => {
    const { page, pageCount } = props;
    const [currentPage, setCurrentPage] = useState(page);
    const router = useRouter();

    return (
        <>
        <div className="pagination">
            <button
                key={'<<'}
                className={`pagination__item`}
                onClick={() => {
                    router.push(`/?page=${Math.max(currentPage - 5,1)}`);
                    setCurrentPage(Math.max(currentPage - 5,1));
                } }
            >
                {'<<'}
            </button>
            <button
                key={'<'}
                className={`pagination__item`}
                onClick={() => {
                    if (currentPage > 1) {
                        router.push(`/?page=${currentPage - 1}`);
                        setCurrentPage(currentPage - 1);
                    }
                } }
            >
                {'<'}
            </button>

            {Array.from({length: currentPage + 5 <= pageCount ? 5 : pageCount - currentPage + 1}, (_, i) => (
                <button
                    key={currentPage + i}
                    className={`pagination__item${i === 0 ? " pagination__item--active" : ""}`}
                    onClick={() => {
                        router.push(`/?page=${currentPage + i}`);
                        setCurrentPage(currentPage + i);
                    } }
                >
                    {currentPage + i}
                </button>
            ))}

            <button
                key={'>'}
                className={`pagination__item`}
                onClick={() => {
                    if (currentPage < pageCount) {
                        router.push(`/?page=${currentPage + 1}`);
                        setCurrentPage(currentPage + 1);
                    }
                } }
            >
                {'>'}
            </button>
            <button
                key={'>>'}
                className={`pagination__item`}
                onClick={() => {
                    router.push(`/?page=${Math.min(currentPage + 5,pageCount)}`);
                    setCurrentPage(Math.min(currentPage + 5,pageCount));
                } }
            >
                {'>>'}
            </button>
        </div><style jsx>{`

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .pagination__item {
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #ddd;
    color: #666;
    cursor: pointer;
    font-size: 15px;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
    margin: 0 4px;
  }

  .pagination__item:hover {
    background-color: #e1fbf2;
  }

  .pagination__item--active {
    background-color: #0070f3;
    color: #fff;
    `}</style> </>
  );
};

export default Pagination;