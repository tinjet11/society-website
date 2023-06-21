"use client";

import Image from 'next/image'
import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { useRouter } from 'next/navigation'



const NavHorizontal = () => {

  const router = useRouter();

  function handleClick(path: string, popupState: any) {
    router.push(path);
    popupState.close();
  }

  

  return (

    
    <div className='flex flex-row p-3 lg:hidden block bg-[#4A4772] sticky top-0 z-20'>
      <Image
        src={'/nav/logo.svg'}
        alt={'CSS logo'}
        width={50}
        height={50}
        className='object-contain'
      />
      <div className="nav_right_item">
        <div className='flex flex-row items-center gap-1 '>

          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button variant="contained" {...bindTrigger(popupState)}>
                  Menu
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={() => handleClick('/about-us', popupState)}>About Us</MenuItem>
                  <MenuItem onClick={() => handleClick('/events', popupState)}>Events</MenuItem>
                  <MenuItem onClick={() => handleClick('/blog', popupState)}>Blog</MenuItem>
                  <MenuItem onClick={() => handleClick('/resources', popupState)}>Resource</MenuItem>
                  <MenuItem onClick={() => handleClick('/contact-us', popupState)}>Contact Us</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>

        </div>
      </div>

    </div>
  )
}

export default NavHorizontal