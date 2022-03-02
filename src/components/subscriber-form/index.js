import React from 'react';
import { useState } from 'react';
import axios from 'axios'

const SubscriberF = () => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputTitle" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="exampleInputTitle1" aria-describedby="TitleHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputSubtitle1" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="exampleInputSubtitle1" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleEmail1" className="form-label">Email</label>
                    <input type="text" className="form-control" id="exampleEmail1" />
                </div>
                
                <button type="submit" className="btn btn-primary">Add Subscriber</button>
            </form>

        </div>
    );
}

export default SubscriberF;
