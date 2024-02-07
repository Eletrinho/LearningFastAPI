'use client'
import axios from 'axios'
import { useState } from "react"

export default function Form() {
    const [infos, setInfos] = useState({
        'username': '',
        'email': '',
        'password': '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInfos(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(infos)
        try {
            axios.post('http://localhost:8000/users', infos)
        }
        catch (err) {
            console.log('Erro: ', err)
        }
        setInfos({
            'username': '',
            'email': '',
            'password': '',
        })
    }


    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username: </label>
                <input type="text" onChange={handleChange} className="form-control" name="username" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email: </label>
                <input type="email" onChange={handleChange} className="form-control" name="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password: </label>
                <input type="password" onChange={handleChange} className="form-control" name="password" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}