import React from 'react';
import {useDispatch} from 'react-redux'
import {commentStore} from '../reducers/commentStore'
import styled from 'styled-components'

const Box = styled.div`
  background-color: unset;
  border-color: indigo;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: 20px;
  }
`

export const Comment = ({ comment }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
  dispatch(commentStore.actions.removingComment(comment));
}
	return (
    <Box className="card mb-4">
      <div className="card-body">
        <p className="card-title">{comment.message}</p>
        <button onClick={handleClick} className="btn btn-danger">Remove</button>
      </div>
    </Box>

	);
};