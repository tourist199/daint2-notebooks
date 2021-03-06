import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Paper = ({ children, className, ...other }) => (
  <div className={cssModules`root ${className}`} {...other}>
    {children}
  </div>
)

Paper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Paper
