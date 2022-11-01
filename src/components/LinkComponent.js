import React from 'react'

const LinkComponent = ({link, id, content}) => {
    return (
        <a id={id} className='w-full p-4 text-center bg-gray-200 rounded-lg block my-6' href={link} target="_blank" rel="noreferrer">{content}</a>
    )
}

export default LinkComponent