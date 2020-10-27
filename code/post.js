import PropTypes from 'prop-types';
import Moment from 'moment';
import React from 'react';


/**
 * The post component
 */
const Post = ({ _pages, _ID, _body }) => {
  const publishDate = Moment( _pages[ _ID ].date );

  return (
    <div className="post">

      <header className="post-header">
        <h1 className="post-title">{ _pages[ _ID ].title ? _pages[ _ID ].title : 'Example title' }</h1>
        <p className="post-meta">{ publishDate.format('MMM DD, YYYY') }</p>
      </header>

      <article className="post-main">
        { _body }
      </article>

    </div>
  );
};

Post.propTypes = {
  /**
   * _body: (text)(5)
   */
  _body: PropTypes.node.isRequired,
};

Post.defaultProps = {};

export default Post;