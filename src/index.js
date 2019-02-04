import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail author="Vinutha" message="cool post" />
            <CommentDetail author="Soriya" message="interesting read" />
            <CommentDetail author="Rashmee" message="I want to learn more" />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root')); 