import React from 'react'
import './DocApplyTable.scss'
const DocApplyTable = () => {
  return (
    <main className='table'>
        <section className='table_header'>
            <h1 className=' font-semibold text-2xl'>Doctor,s Applycations</h1>
        </section>
        <section className='table_body'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Address</th>
                        <th>Specialization</th>
                        <th>Experience</th>
                        <th>Fess</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>923478</td>
                        <td>saymon</td>
                        <td>034583048</td>
                        <td>saymon@gmail.com</td>
                        <td>jor er doctor</td>
                        <td>5years</td>
                        <td>www.balsal.com</td>
                        <td>5years</td>
                        <td>50$</td>
                        <td>Pending</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
  )
}

export default DocApplyTable