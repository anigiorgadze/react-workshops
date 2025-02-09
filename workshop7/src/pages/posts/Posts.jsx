import React, { useState } from 'react'
import useCustomHooks from '../../hooks/useCustomHooks'
import Card from '../../components/Card'
import Delate from '../../components/Delate'

const Posts = () => {
    const [page, setPage] = useState(1)
    const [data, setData, error, isLoading] = useCustomHooks(`https://jsonplaceholder.typicode.com/posts`, page)

    const [postToDelete, setPostToDelete] = useState(null);

    const nextPage = () => setPage((prev) => prev + 1);
    const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));


    const handleDeletePost = (postId) => {
        const updatedPosts = data.filter((post) => post.id !== postId);
        setData(updatedPosts);
        setPostToDelete(null);
        console.log('Post Deleted:', postId);
    };

    const handleCancelDelete = () => {
        setPostToDelete(null);
    };


    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='main-div'>
            {isLoading && <p>loading...</p>}
            <div className='card-container'>
                {data.map((post) => <Card key={post.id} props={post} onDelete={(id) => setPostToDelete(id)} />)}
            </div>

            {postToDelete && (
                <Delate
                    postId={postToDelete}
                    onConfirm={handleDeletePost}
                    onCancel={handleCancelDelete}
                />
            )}

            <div className='page-div'>
                <button className='prev-btn' onClick={prevPage} disabled={page === 1}>Prev</button>
                <span>  {page} </span>
                <button className='next-btn' onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}

export default Posts