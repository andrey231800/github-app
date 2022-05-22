import React, {FC, useEffect, useState} from 'react';
import {UserRepos} from "../types/types";
import ReactPaginate from "react-paginate";
import RepoList from "./RepoList";

import '../styles/Pagination.scss'
import '../styles/Arrow.scss'

interface PaginationListProps {
    repos: UserRepos[]
}

const PaginationList: FC<PaginationListProps> = ({repos}) => {
    const [currentItems, setCurrentItems] = useState<UserRepos[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(repos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(repos.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, repos]);

    useEffect(() => {
        currentPages()
    }, [])

    const handlePageClick = (event:any) => {
        const newOffset = (event.selected * itemsPerPage) % repos.length;
        setItemOffset(newOffset);
    };

    let activeElement = document.querySelector('.active')?.textContent
    let elem = activeElement ? +activeElement : null;

    const currentPages = () => {

        if(!elem && !activeElement){
            activeElement = '1'
            elem = 1
        }
        let max = elem && elem * 4;
        let min = max && (max - 3);
        switch(currentItems.length){
            case 4:
                return { min, max };
                break;
            case 3:
                max = max && max - 1
                return {min, max}
                break
            case 2:
                max = max && (max - 2);
                return {min, max}
            case 1:
                max = max && (max -3)
                return {min, max}
            default:
                return {min, max}
        }
    }

    const {min, max} = currentPages();

    return (
        <>
            <RepoList repos={currentItems}/>
                <div className="pagination-containter">
                    <p className="currentRepos">
                        {currentItems.length === 1 ?
                            `${max} of ${repos.length} items`
                            :
                            `${min}-${max} of ${repos.length} items`
                        }
                    </p>
                    <ReactPaginate
                        breakLabel={<a href="">...</a>}
                        nextLabel={<div className="arrow right"></div>}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel={<div className="arrow prev"></div>}
                        containerClassName="pagination"
                        pageLinkClassName="page-num"
                        previousLinkClassName="page-num"
                        nextLinkClassName="page-num"
                        activeLinkClassName="active"
                    />
                </div>
        </>
    );
};

export default PaginationList;