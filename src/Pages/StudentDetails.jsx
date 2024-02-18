
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getStudentDataAPI } from '../services/allAPI';
import { Link } from 'react-router-dom';

function StudentDetails() {
    const [sdata, setSData] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(sdata);

    const getStudentData = async () => {
        try {
            const result = await getStudentDataAPI();
            console.log("api res of details: ",result);
            if (result.status === 200) {
                setSData(result.data);
            } else {
                console.log(result);
                // Handle error response from API
            }
        } catch (error) {
            console.error('Error fetching student data:', error);
            // Handle error in fetching data
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getStudentData();
    }, []);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sdata.length > 0 ? (
                                sdata.map((details, index) => (
                                    <tr key={index}>
                                        <td>{details.firstname}</td>
                                        <td>{details?.lastname}</td>
                                        <td>{details?.adress}</td>
                                        <td>{details?.email}</td>
                                        <td>{details?.mobile}</td>
                                        <td>{details?.dob}</td>
                                        <td>{details?.gender}</td>
                                        <td>{details?.course}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No Data</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    <Link to="/">
                        <button className="btn btn-info rounded-pill ms-5 mt-3">Back</button>
                    </Link>
                </>
            )}
        </>
    );
}

export default StudentDetails;
