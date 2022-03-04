import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Postf from '../../components/post-form/index'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [editForm, setEditForm] = useState(false)
    const [postToEdit, setPostToEdit] = useState({})

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/v1/newsletter/allposts')
            setPosts(response.data)

        } catch (err) {
            console.log(err)
        }
    }

    const deletePosts = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8081/api/v1/newsletter/posts/${id}`)
            console.log(response)
            fetchPosts()
        } catch (err) {
            console.log(err)
        }
    }

    const handleEdit = (posts) => {
        setEditForm(true)
        setPostToEdit(posts)
    }

    return (
        <>
            <Postf
                fetchPosts={fetchPosts}
                editForm={editForm}
                setEditForm={setEditForm}
                postToEdit={postToEdit}
            />

            <div>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Subtitle</th>
                            <th scope="col">Content</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map(posts => {
                                return (
                                    <tr key={posts.id}>
                                        <th scope="row">{posts.id}</th>
                                        <td data-label="Title">{posts.title}</td>
                                        <td data-label="Subtitle">{posts.subtitle}</td>
                                        <td data-label="Content">{posts.content}</td>
                                        <td data-label="Edit">
                                            <i className="bi bi-trash" onClick={() => deletePosts(posts.id)}></i>
                                            <i className="bi bi-pen" onClick={() => handleEdit(posts)}></i>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Posts;
