import React from 'react';

import ArticleFooter from './ArticleFooter.js';
import ArticleHeader from './ArticleHeader.js';
import Votebar from './Votebar.js';

const ArticleCard = (props) => {
  const { data } = props;
  return (
    <section className="article-card">
      <Votebar votes={data.votes} articleId={data.article_id} />
      <ArticleHeader data={data} />
      <ArticleFooter commentCount={data.comment_count} />
    </section>
  );
};

export default ArticleCard;
