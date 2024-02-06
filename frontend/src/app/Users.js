'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import styles from "./page.module.css";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/users/');
                console.log(res.data);
                setUsers(res.data.users);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const userList = users.map((user) => (
        <UserCard key={user.id} id={user.id} username={user.username} email={user.email} />
    ));

    return (
        <div className={styles.grid}>
            {userList}
        </div>
    );
}
