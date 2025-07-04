import React from 'react'

const SubTableItem = ({ email, date, mongoId, deleteEmail }) => {

    const emailDate = new Date(date)

    return (
        <tr className='border-b text-left bg-white'>
            <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                {email ? email : "no email"}
            </th>
            <td className='px-6 py-4 hidden sm:block'>{emailDate.toDateString()}</td>
            <td className='px-6 py-4 ' onClick={() => deleteEmail(mongoId)}>x</td>
        </tr>
    )
}

export default SubTableItem