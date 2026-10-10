import React from 'react'

function StudentsList() {

    const students = ['Ahmad', 'Ali', 'Husna', 'Abdullah', 'Sarah', 'Zainab', 'Raghad', 'Sayed Hamed']

    return (
        <div>StudentsList:

            <ul>
                {students.map((student) => (
                    <li key={student}>
                        {student}
                    </li>

                ))}
            </ul>

        </div>
    )
}

export default StudentsList