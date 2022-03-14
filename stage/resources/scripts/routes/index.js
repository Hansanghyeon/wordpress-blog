import common from './common';
import singleDev from './single-dev';
import singleBlog from './single-blog';
import taxonomy from './taxonomy';
import history from './history';
import singlePortfolio from './single-portfolio';

export default {
  // All pages
  common,
  singleDev,
  singleBlog,
  singlePortfolio,
  taxDevCategory: taxonomy,
  taxDevTag: taxonomy,
  taxBlogCategory: taxonomy,
  taxDevSeries: taxonomy,
  history,
};
