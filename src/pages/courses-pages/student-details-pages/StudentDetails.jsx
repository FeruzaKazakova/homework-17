import React from 'react'
import { useParams } from 'react-router-dom';
import { Card } from '../../../components/Card';

const StudentDetails = () => {
    const params = useParams()
    const studId = params.id;
  return (
    <>
    <Card>
    <h3>Student Details page</h3>
    <div>Student Name {studId}</div>
    </Card>
    </>
  )
}

export default StudentDetails