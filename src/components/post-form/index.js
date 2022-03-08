import { useState } from 'react';
import axios from 'axios'
import './styles.css'

// Post Form Component -- passing functions from one component to another
const Postf = ({ fetchPosts, editForm, postToEdit, setEditForm }) => {

    // setting state for variables of columns of tables
    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [content, setContent] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            title: title,
            subtitle: subTitle,
            content: content
        }

        try {
            if (editForm) {

                const response = await axios.put(`https://newsletter-appp.herokuapp.com/api/v1/newsletter/posts/${postToEdit.id}`, newPost)
                console.log(response)

                if (response.status === 200) {
                    setTitle('')
                    setSubTitle('')
                    setContent('')
                    setEditForm(false)
                }

            } else {
                const response = await axios.post(`https://newsletter-appp.herokuapp.com/api/v1/newsletter/addpost`, newPost)

                if (response.status === 200) {
                    setTitle('')
                    setSubTitle('')
                    setContent('')
                }
            }

            fetchPosts()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container mt-4 mb-3">
            <form className='mb-3' onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="InputTitle" className="form-label">Title</label>
                    <input
                        type="text"
                        name='title'
                        className="form-control"
                        id="InputTitle"
                        placeholder={postToEdit.title}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                </div>

                <div className="mb-3">
                    <label htmlFor="InputSubtitle" className="form-label">Subtitle</label>
                    <input type="text"
                        name='subtitle'
                        className="form-control"
                        id="InputSubtitle"
                        placeholder={postToEdit.subtitle}
                        value={subTitle}
                        onChange={e => setSubTitle(e.target.value)}

                    />

                </div>

                <div className="mb-3">
                    <label htmlFor="InputContent1" className="form-label">Content</label>
                    <textarea type="text"
                        name='content'
                        className="form-control"
                        id="InputContent1"
                        placeholder={postToEdit.content}
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                </div>
                <div id='button-div2'>
                    <button type="submit" className="btn btn-primary">{editForm ? "Post" : "Add"}</button>
                </div>
            </form>
        </div>
    );
}

export default Postf;
