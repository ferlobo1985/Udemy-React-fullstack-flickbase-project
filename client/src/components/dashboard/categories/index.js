import React, { useEffect } from 'react';
import AdminLayout from '../../../hoc/adminLayout';
import AddCategories from './addCategory'
import { useDispatch, useSelector } from 'react-redux'


import { Table, Row, Col } from 'react-bootstrap';


const Categories = () => {

    return(
        <AdminLayout section="Categories">
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name of category</td>
                            </tr>
                            <tr>
                                <td>Name of category</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <AddCategories/>
                </Col>
            </Row>
        </AdminLayout>
    )
}

export default Categories;