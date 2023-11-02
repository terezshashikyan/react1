import { FC } from 'react';
import { TLoadMoreTodosButton } from '../../types';

import './style.scss';

const LoadMoreTodosButton:FC<TLoadMoreTodosButton> = ({handleLoadMore}) => (
    <button className="loadMoreTodosButton" onClick = {()=>handleLoadMore()}>
        Load More
    </button>
)

export default LoadMoreTodosButton;