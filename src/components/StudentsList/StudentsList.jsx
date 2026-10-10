import React from 'react'

function StudentsList() {

    const students = ['Ahmad', 'Ali', 'Husna', 'Abdullah', 'Sarah', 'Zainab', 'Raghad', 'Sayed Hamed']

    return (
        <div>Students List:

            <ul>

                {students.filter((student)=> student !== 'Sayed Hamed').map((student) => (
                    <li key={student}>
                        {student}
                    </li>

                ))}

            </ul>

        </div>
    )
}

export default StudentsList