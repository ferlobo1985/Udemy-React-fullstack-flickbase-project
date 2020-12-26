import React, { useEffect } from 'react';
import AdminLayout from '../../../hoc/adminLayout';
import PaginationComponent from './paginate';

import {
    Modal,
    Button,
    ButtonToolbar,
    ButtonGroup,
    InputGroup,
    FormControl
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useDispatch,useSelector } from 'react-redux';
import { changeStatusArticle } from '../../../store/actions/article_actions';
import { getPaginateArticles } from '../../../store/actions/article_actions';

const Articles = (props) => {
    const articles = useSelector(state=>state.articles);
    const dispatch = useDispatch();
    let arts = articles.adminArticles;

    const editArtsAction = (id) => {
        props.history.push(`/dashboard/articles/edit/${id}`)
    }

    useEffect(()=>{
        dispatch(getPaginateArticles())
    },[dispatch])

    const handleStatusChange = (status,_id) => {
        let newStatus = status === 'draft' ? 'public':'draft';
        dispatch(changeStatusArticle(newStatus,_id))
    }

    const goToPrevPage = (page) => {
        dispatch(getPaginateArticles(page))
    }

    const goToNextPage = (page) => {
        dispatch(getPaginateArticles(page))
    }

    return(
        <AdminLayout section="Articles">
            <div className="articles_table">
                <ButtonToolbar className="mb-3">
                    <ButtonGroup className="mr-2">
                        <LinkContainer to="/dashboard/articles/add">
                            <Button variant="secondary">Add article</Button>
                        </LinkContainer>
                    </ButtonGroup>
                    <form onSubmit={()=> alert('search')}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="text"
                                placeholder="Example"

                            />
                        </InputGroup>
                    </form>
                </ButtonToolbar>


                <PaginationComponent
                    arts={arts}
                    prev={(page)=> goToPrevPage(page)}
                    next={(page)=> goToNextPage(page)}
                    handleStatusChange={(status,id)=>handleStatusChange(status,id)}
                    editArtsAction={(id)=> editArtsAction(id)}
                />


            </div>
        </AdminLayout>
    )
}

export default Articles;