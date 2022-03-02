import React from 'react';

const Postf = () => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Subtitle</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />

                    <div className="mb-3">
                        <label htmlFor="InputContent1" className="form-label">Content</label>
                        <textarea type="text" className="form-control" id="InputContent1" />
                    </div>

                </div>
                <button type="submit" className="btn btn-primary">Send Newsletter</button>
            </form>
        </div>
    );
}

export default Postf;
