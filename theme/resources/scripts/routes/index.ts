import common from './common'
import single from './single'
import taxonomy from './taxonomy'
import singlePortfolio from './single-portfolio'

export default {
  // All pages
  common,
  singleDev: single,
  singleProductivity: single,
  singleGadget: single,
  singleGamer: single,
  singlePortfolio,
  taxDevCategory: taxonomy,
  taxDevTag: taxonomy,
  taxBlogCategory: taxonomy,
  taxDevSeries: taxonomy,
}
