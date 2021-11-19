import React from 'react'
import { Container } from 'react-bootstrap'
import { useHistory } from 'react-router'

const AdminDashboard = ({isAdmin}) => {
    const history = useHistory()
    return (
        <div className="py-5">
            <Container>
                <div className="d-flex justify-content-between">
                    <button onClick={() => history.push('/manageorder')} className="btn btn-white shadow p-4 fw-bold fs-4">
                        Manage All Orders
                    </button>
                    <button onClick={() => history.push('/createproducts')} className="btn btn-white shadow p-4 fw-bold fs-4">
                        Add A Product
                    </button>
                    <button onClick={() => history.push('/manageproducts')} className="btn btn-white shadow p-4 fw-bold fs-4">
                        Manage Products
                    </button>
                    <button onClick={() => history.push('/makeadmin')} className="btn btn-white shadow p-4 fw-bold fs-4">
                        Make Admin
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default AdminDashboard
