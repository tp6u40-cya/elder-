import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#0f1318',
  borderTop: '1px solid rgba(255,255,255,0.1)',
  padding: theme.spacing(6, 0),
  marginTop: theme.spacing(8),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(120, 255, 206, 0.16) 0%, rgba(0,0,0,0) 100%)',
    pointerEvents: 'none'
  }
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.9rem',
  lineHeight: 1.8,
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'var(--primary)',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 2, textAlign: 'center' }}>
              聯絡資訊
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <FooterText>電話：(02)2533-3333</FooterText>
              <FooterText>傳真：(02)2533-9999</FooterText>
              <FooterText>郵政劃撥：19181717</FooterText>
              <FooterText>地址：104台北市中山區敬業一路128巷41號2樓之2</FooterText>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 2, textAlign: 'center' }}>
              服務時間
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <FooterText>週一至週五</FooterText>
              <FooterText>上午9:00-12:00</FooterText>
              <FooterText>下午1:30-5:30</FooterText>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 2, textAlign: 'center' }}>
              快速連結
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <FooterLink to="/donation" style={{ color: 'var(--primary)' }}>社會捐款</FooterLink>
              <FooterLink to="/about" style={{ color: 'var(--primary)' }}>關於本會</FooterLink>
              <FooterLink to="/contact" style={{ color: 'var(--primary)' }}>聯絡我們</FooterLink>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6, textAlign: 'center' }}>
        <FooterText>76.7.20北市社四字第33240號</FooterText>
          <FooterText>
            © 財團法人台北市老人基金會 版權所有
          </FooterText>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;