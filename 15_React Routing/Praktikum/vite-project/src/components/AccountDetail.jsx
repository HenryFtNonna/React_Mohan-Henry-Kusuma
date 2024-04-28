// AccountDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const AccountDetail = () => {
    const { id } = useParams();

    if (!id) {
        return <div>Data not found</div>;
    }


    return (
        <div>
            <h2>Product Detail</h2>
            <p>ID: {id}</p>
        </div>
    );
};

export default AccountDetail;
