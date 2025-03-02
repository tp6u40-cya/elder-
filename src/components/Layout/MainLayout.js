import React from 'react';  // 添加這行
import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SecurityIcon from '@mui/icons-material/Security';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import SupportIcon from '@mui/icons-material/Support';
import PeopleIcon from '@mui/icons-material/People';
import ContactsIcon from '@mui/icons-material/Contacts';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import { useState } from 'react';

const drawerWidth = 240;

// 修改導航項目配置
const menuItems = [
  { text: '關於本會', icon: <InfoIcon />, path: '/about' },
  { text: '老人助養', icon: <VolunteerActivismIcon />, path: '/elderly-support' },
  { text: '老人防護', icon: <SecurityIcon />, path: '/elderly-protection' },
  { text: '老人協尋', icon: <SearchIcon />, path: '/elderly-search' },
  { text: '老人救援', icon: <HelpIcon />, path: '/elderly-rescue' },
  { text: '老人服務', icon: <SupportIcon />, path: '/elderly-service' },
  { text: '社會志工', icon: <PeopleIcon />, path: '/volunteer' },
  { text: '聯絡本會', icon: <ContactsIcon />, path: '/contact' },
  { text: '社會捐款', icon: <MonetizationOnIcon />, path: '/donation' },
  { 
    text: '財務報表', 
    icon: <DescriptionIcon />, 
    onClick: () => window.open(`${process.env.PUBLIC_URL}/documents/financial_statements.pdf`, '_blank')
  }
];

// 優化主內容區域樣式
// 修改 Main 組件樣式
const Main = styled('main')(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: open ? drawerWidth : 0,
  width: `calc(100% - ${open ? drawerWidth : 0}px)`,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

// 添加 AppBar 樣式組件
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  // 保持原有的過渡效果設定
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: '100%',
  marginLeft: 0,
  // 增加 header 的高度
  height: '100px',  // 調整：增加 header 高度
  display: 'flex',
  justifyContent: 'center'
}));

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <Box sx={{ display: 'flex' }}>
      <StyledAppBar 
        position="fixed" 
        sx={{ 
          bgcolor: '#111418',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          boxShadow: 'none',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >
        <Toolbar sx={{ 
          justifyContent: 'space-between',
          minHeight: '80px',  // 調整：確保 Toolbar 高度與 AppBar 一致
          padding: '0 24px'   // 調整：增加左右內邊距
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              onClick={() => setOpen(!open)}
              edge="start"
              sx={{ 
                mr: 2,
                color: 'var(--primary)'
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography 
              variant="h6" 
              noWrap 
              component="div"
              onClick={() => navigate('/dashboard')}
              sx={{ 
                fontWeight: 'bold',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              台北市老人基金會
            </Typography>
          </Box>
          
          
        </Toolbar>
      </StyledAppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#1a1f25',
            color: '#fff',
            borderRight: '1px solid rgba(255,255,255,0.1)',
            marginTop: '100px'
          },
        }}
      >
        <List sx={{ p: 2 }}>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text}
              onClick={() => item.onClick ? item.onClick() : navigate(item.path)}
              sx={{
                mb: 1,
                borderRadius: '8px',
                backgroundColor: location.pathname === item.path ? 'rgba(120, 255, 205, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(120, 255, 205, 0.05)'
                },
                padding: '12px'
              }}
            >
              <ListItemIcon sx={{ 
                color: location.pathname === item.path ? 'var(--primary)' : 'rgba(255,255,255,0.7)',
                minWidth: '45px',
                '& .MuiSvgIcon-root': {
                  fontSize: '1.5rem'
                }
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{
                  '& .MuiListItemText-primary': {
                    color: location.pathname === item.path ? 'var(--primary)' : '#fff',
                    fontSize: '1.1rem'
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Main open={open}>
        <Toolbar />
        {React.cloneElement(children, { open })}
      </Main>
    </Box>
  );
};

export default MainLayout;