import styles from "./page.module.css";

export default function UserCard({id, username, email}){
    return (
        <span className={styles.card}>
            <h2 className={styles.card}>Username: {username}</h2>
            <p className={styles.card}>ID: {id}</p>
            <p className={styles.card}>Email: {email}</p>
        </span>
    )
}