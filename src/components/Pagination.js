import React from 'react';

const Pagination = props => {
    const { handleClick, numberOfPages } = props;
    const pageNumbers = [];

    function createPageNumbers(num) {
        for (let i = 1; i <= num; i++) {
            pageNumbers.push(
                <button
                    className="pagination__number"
                    key={i}
                    value={i}
                    onClick={handleClick}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers
    }

    return (
        <div className="questionnaire__pagination pagination">
            {createPageNumbers(numberOfPages)}
        </div>
    );
};

export default Pagination;