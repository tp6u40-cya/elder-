import React from 'react';  // 添加這行
import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ScienceIcon from '@mui/icons-material/Science';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

const drawerWidth = 240;

// 修改導航項目配置
const menuItems = [
  { text: '儀器總覽', icon: <ScienceIcon />, path: '/instruments' },  // 修改這裡
  { text: '預約管理', icon: <EventNoteIcon />, path: '/reservations' },
  { text: '個人資料', icon: <PersonIcon />, path: '/profile' }
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
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: '100%',
  marginLeft: 0,
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
        {/* AppBar 內容保持不變 */}
        <Toolbar sx={{ justifyContent: 'space-between' }}>
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
              sx={{ fontWeight: 'bold' }}
            >
              輔仁大學貴重儀器預約系統
            </Typography>
          </Box>
          
          <Avatar 
            sx={{ 
              bgcolor: 'var(--primary)',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/profile')}
          >
            U
          </Avatar>
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
            borderRight: '1px solid rgba(255,255,255,0.1)'
          },
        }}
      >
        <Toolbar />
        <List sx={{ p: 2 }}>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={{
                mb: 1,
                borderRadius: '8px',
                backgroundColor: location.pathname === item.path ? 'rgba(120, 255, 205, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(120, 255, 205, 0.05)'
                }
              }}
            >
              <ListItemIcon sx={{ 
                color: location.pathname === item.path ? 'var(--primary)' : 'rgba(255,255,255,0.7)',
                minWidth: '40px'
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{
                  '& .MuiListItemText-primary': {
                    color: location.pathname === item.path ? 'var(--primary)' : '#fff'
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