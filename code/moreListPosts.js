import PropTypes from 'prop-types';
import React from 'react';


/**
 * The listing posts component
 */
const MoreListPosts = ({ title, _pages, _relativeURL, _ID }) => (
  <div>
    <b>{ title || 'More Posts' }</b>
    <ul className="news">
      {
        Object.keys( _pages )
          .sort( ( a, b ) => new Date( _pages[ b ].date ) - new Date( _pages[ a ].date ) )
          .filter( page => _pages[ page ]._url.startsWith('/posts/') )
          .filter( page => _ID !== page )
          .map( ( page, i ) =>
            <li key={ i }>
              <a href={ `${_relativeURL( _pages[ page ]._url, _ID)}` }>{ _pages[ page ].title }</a>
            </li>
          )
      }
    </ul>
  </div>
);

MoreListPosts.propTypes = {
  /**
   * title: "News 'n' Updates"
   */
  title: PropTypes.string,
};

MoreListPosts.defaultProps = {};

export default MoreListPosts;