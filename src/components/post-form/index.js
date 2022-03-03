import { useState } from 'react';
import axios from 'axios'

// Post Form Component
const Postf = ({ fetchPosts, editForm, postToEdit }) => {

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

                const response = await axios.put(`http://localhost:8081/api/v1/newsletter/posts/${postToEdit.id}`, newPost)
                console.log(response)
            } else {
                const response = await axios.post(`http://localhost:8081/api/v1/newsletter/addpost`, newPost)

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
        <div>
            <form onSubmit={handleSubmit}>

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

                <button type="submit" className="btn btn-primary">{editForm ? "Editing" : "Add"}</button>
            </form>
        </div>
    );
}

export default Postf;
