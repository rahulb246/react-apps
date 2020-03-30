import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    // components are reffered in jsx normally instead of using {} which are used for 
    // javascript variables
    //
    // component reuse example : approval card can show multiple types of children in it's content
    return (
        <div className="ui container components">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    are you sure you wanna do this ?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar = {Faker.image.avatar()} 
                    author="author2" 
                    timeAgo="today at 11am" 
                    content="blog post 2"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar = {Faker.image.avatar()} 
                    author="author3" 
                    timeAgo="today at 3pm" 
                    content="blog post 3"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
