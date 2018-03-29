import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h2>Uh oh, looks like you got lost somewhere!</h2>
        <p><Link to="/">Back to the Dashboard!</Link></p>
    </div>
);

export default NotFoundPage;