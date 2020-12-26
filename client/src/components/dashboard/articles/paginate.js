import React from 'react';
import { Table, Pagination } from 'react-bootstrap';
import Moment from 'react-moment';
import Loading from '../../../utils/loader';


const PaginationComponent = ({arts}) => {

    return(
        <>
            { arts && arts.docs ?
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Created</th>
                                <th>Tittle</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            { arts.docs.map((item)=>(
                                <tr key={item._id}>
                                    <td><Moment to={item.date}></Moment></td>
                                    <td>{item.title}</td>
                                    <td>{item.score}</td>
                                </tr>
                            )) }
                        </tbody>
                    </Table>
                    <Pagination>
                        {arts.hasPrevPage ?
                            <>
                                <Pagination.Prev onClick={()=> alert('prev')}/> 
                                <Pagination.Item onClick={()=> alert('prev 2')}>
                                    {arts.prevPage}
                                </Pagination.Item>
                            </>
                            :null
                        }
                        <Pagination.Item active>{arts.page}</Pagination.Item>
                        {arts.hasNextPage ?
                            <>
                                
                                <Pagination.Item onClick={()=> alert('next 2')}>
                                    {arts.nextPage}
                                </Pagination.Item>
                                <Pagination.Next onClick={()=> alert('next')}/> 
                            </>
                            :null
                        }
                    </Pagination>
                </>
                :
                <Loading/>
            }
        </>
    )
}

export default PaginationComponent;