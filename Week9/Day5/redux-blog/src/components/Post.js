import React from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../redux/actions';
import '../App.css';

class Post extends React.Component {

  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }

  render(){
    const {post} = this.props;
    return (
            <div>
                {
                  post ? (
                    <div className='user-post'>
                        <h4 className='title'>{post.title}</h4>
                        <p className='text-two'>{post.body}</p>
                        <button className='delete' onClick={this.handleClick}>DELETE POST</button>
                    </div>
                ) : (
                    <h4>Loading</h4>
                )
              }
            </div>
        )
  }
}

const mapStateToProps = (state, ownProps) => {
  let post_id = ownProps.match.params.post_id
  return{
    post: state.posts.find(post=> post.id === post_id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
