import React, {useState} from 'react'
import './Test.css'

export default function Test(){
    const [formData, setFormData] = React.useState(
        {
            firstName : '', 
            lastName : '', 
            email : '', 
            comment :'',
            isFriendly:true
        })

    console.log(formData)

    function Changed(event){
        const {name, value, email, comment, checked, type} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault()
    }

    return(
        <form
        onSubmit={handleSubmit} 
        className='form2'
        >
            <input
                type = 'text'
                onChange={Changed}
                name = 'firstName'
                placeholder='first name'
                value={formData.firstName}
            />
            <input
                type = 'text'
                onChange={Changed}
                name = 'lastName'
                placeholder='last name'
                value={formData.lastName}
            />
            <input
                type = 'email'
                onChange={Changed}
                name = 'email'
                placeholder='your email'
                value={formData.email}
            />
            <textarea
                onChange={Changed}
                name = 'comment'
                value={formData.comment}
                placeholder = 'Comments'
            />
            <input
                type = 'checkbox'
                name = 'isFriendly'
                id = 'isFriendly'
                checked = {formData.isFriendly}
                onChange = {Changed}
            />
            <label htmlfor='isFriendly'>Are you friendly ?</label>
            <button>Submit</button>
        </form>
    )
}