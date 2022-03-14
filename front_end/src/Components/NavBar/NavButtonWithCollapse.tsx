import React, { useState } from 'react';
import { INavButton } from '../../types/InavBar';
import { NavLink } from 'react-router-dom';

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { StyledNavButton } from './NavButton';
import Box from '@mui/system/Box';


interface INavButtonProps {
    navButtonItem: INavButton
}

const ArrowRightFlag = <ChevronRightIcon sx={{position:'absolute', right:'24px', top:'15px'}}/>;
const ArrowDownFlag = <KeyboardArrowDownIcon sx={{position:'absolute', right:'24px', top:'15px'}}/>


const NavButtonWithCollapse: React.FC <INavButtonProps> = ({ navButtonItem }) => {
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [endIconData, setEndIconData] = useState({
      isClicked: false,
      flag: ArrowRightFlag
    })

  return (
      <Box sx={{width: '100%'}}>
        <StyledNavButton 
          sx={{position:'relative'}}  
          startIcon={<HomeIcon/>}
          endIcon={endIconData.flag}
          onClick={() => {
              setIsExpanded(!isExpanded)
              setEndIconData( prev => {
                  if (!prev.isClicked){
                      return {
                          isClicked: true,
                          flag: ArrowDownFlag
                      }
                  } else {
                      return {
                          isClicked: false,
                          flag: ArrowRightFlag
                      }
                  }
              })
            }}
        >
            {navButtonItem.title}
        </StyledNavButton>
        <Collapse in={isExpanded} unmountOnExit>
          <List>
            {navButtonItem.dropdownElementsList!.map( dropdownElementItem => {
                return(
                  <ListItem key={dropdownElementItem.dropdownElementName} sx={{padding:'0px'}}>
                    <StyledNavButton sx={{padding:'9px 24px 9px 40px', width:'216px'}}>
                      {dropdownElementItem.dropdownElementName}
                    </StyledNavButton>
                  </ListItem>
                )
            })}
          </List>
        </Collapse>
      </Box>
  );
};

export default NavButtonWithCollapse;