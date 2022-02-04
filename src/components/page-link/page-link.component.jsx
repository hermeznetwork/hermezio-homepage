import React from 'react'
import { Link } from 'gatsby'

export default function PageLink ({ route, className }) {
  if (route.type === 'internal') {
    return route.render !== undefined
      ? route.render({ className })
      : (
        <Link to={route.to} className={className}>
          {route.renderLabel ? route.renderLabel() : route.label}
        </Link>
      )
  } else {
    return (
      <a
        href={route.to}
        target='_blank'
        rel='noopener noreferrer'
        className={className}
      >
        {route.renderLabel ? route.renderLabel() : route.label}
      </a>
    )
  }
}
