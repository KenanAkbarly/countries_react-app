// import React from 'react'

import React, { useEffect, useState } from 'react'
import Switch from '@mui/material/Switch';
import DarkMode from '@mui/icons-material/DarkMode';
import '../components/Navbar.css'

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
);
const toggleTheme = () => {
    if (theme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
};
useEffect(() => {
  // document.getElementById('cardBottom').className = theme
    localStorage.setItem('theme', theme);
    document.body.className = theme;
    // document.cardBottom.className = theme
    // document.getElementById('btn').className = theme
}, [theme]);
  return (
    <div className='navbar'>
      <div className='navbar_left'>
        <h2>Where in the world?</h2>
      </div>
      <div className='navbar_right'>
      {/* <Switch onClick={toggleTheme}
      slotProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children: <DarkMode />,
        },
      }}
      sx={{
        '--Switch-thumb-size': '28px',
      }}
    /> */}
    <p onClick={toggleTheme}><i class="fa-solid fa-moon"></i> Dark mode</p>
      </div>
    </div>
  )
}

export default Navbar
