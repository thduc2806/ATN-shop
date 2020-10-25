import React from 'react'

const InputField: React.FC<InputFieldProps> = ({title, placeholder, type, onChange}) => {
    return (
        <div className="input-field-container">
            <text className="input-field-title">{title}</text>
            <input className='input-field' placeholder={placeholder} type={type}/>
        </div>
    )
}

interface InputFieldProps {
    title: string;
    placeholder: string;
    type: string;
    onChange: string;
}

export default InputField;
