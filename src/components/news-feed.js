import React from 'react';
import Post from './post';

let e = React.createElement;

export default class NewsFeed extends React.Comment {
  render () {
    return e('div',
    {class: 'container'},
    e(Post, {}, null),
    e(Post, {}, null),
    e(Post, {}, null),
    );
  }
}