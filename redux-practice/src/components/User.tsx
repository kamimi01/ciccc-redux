import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { incrementAge } from '../features/userSlice';

const User: React.FC = () => {
    const { firstname, lastname, age } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    return (
        <div className="p-4">
            <h2>User Information</h2>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Age: {age}</p>
            <button
                onClick={() => dispatch(incrementAge())}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Increment Age
            </button>
        </div>
    );
};

export default User;
