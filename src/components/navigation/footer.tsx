import * as React from 'react'

// todo(bwills): get the version from npm package.json

const Header: React.FunctionComponent = () => (
  <footer className="text-center p-3 bg-dark text-light">
    <small>
      <div>Jacksonville Developers User Group 2019</div>
      <code>v1.0.0</code>
    </small>
  </footer>
)

export default Header
