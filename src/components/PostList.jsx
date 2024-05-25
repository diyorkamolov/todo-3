import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/features/crud/curdThunk'

function PostList({ setCurrentId }) {
    const dispatch = useDispatch()
    const { posts, status, error } = useSelector((state) => state.posts)

    useEffect(() => {
        if (status === 'idle')
            dispatch(fetchPosts());
    }, [dispatch])

    if (status === 'loading') return <div>Loading...</div>
    if (error) return <div>Error {error}</div>
    if (posts.length === 0) return <div>No posts available</div>

    return (
        <div>
            <h2>Posts</h2>
            {posts.map((post) => (
                <div key={post.id} style={cardStyle}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList
