import { useState } from "react";

const usePaginate = () => {

    const [itemsPerPage, setItemsPerPage] = useState(10);

    let startIndex = 0;
    let endIndex = itemsPerPage;

    const getPagesCount = (items) => {
        
        const pagesCount = [];
        const totalPages = items.length / itemsPerPage;

        for (let i = 0; i < totalPages; i++) {
            pagesCount.push(i + 1);
        }

        return pagesCount;
    }

    const paginate = (curPageNumber, items) => {
        endIndex = curPageNumber * itemsPerPage;
        startIndex = endIndex - itemsPerPage;
        
        const curItems = items.slice(startIndex, endIndex);
        return curItems;
    }

    return {
        paginate,
        getPagesCount,
    }
}

export default usePaginate;