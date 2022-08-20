import React from 'react';

interface IProps {
  text?: string
}

export const Header:React.FC<IProps> = (props) => {

  const headerStyles:React.CSSProperties = {
    margin: '0',
    padding: '0 2.5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
  }

  return (
    <header style={headerStyles}>
      <div>
      <h1>{props.text}</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI'
} 
