import React from 'react'
import { Container } from 'react-bootstrap'
import { useHistory } from 'react-router'
import useAuth from '../../hooks/useAuth'

const Dashboard = () => {
    const history = useHistory()
    const {logOut} = useAuth()
    return (
        <div className="py-5">
            <Container>
                <div className="d-flex justify-content-between">
                    <button onClick={() => history.push('/pay')} className="btn btn-white shadow p-4 fw-bold fs-4">
                        Pay
                    </button>
                    <button onClick={() => history.push('/myorders')} className="btn btn-white shadow p-4 fw-bold fs-4">
                        My Orders
                    </button>
                    <button onClick={() => history.push('/createreview')} className="btn btn-white shadow p-4 fw-bold fs-4">
                        Give Review
                    </button>
                    <button onClick={logOut} className="btn btn-white shadow p-4 fw-bold fs-4">
                        Logout
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default Dashboard
