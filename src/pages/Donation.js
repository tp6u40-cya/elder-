import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import MainLayout from '../components/Layout/MainLayout';
import { ScrollContainer } from '../styles/globalStyles';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Layout/Footer';
const HeroBanner = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(6),
  width: '100%',
  height: '40vh',
  minHeight: '300px',
  maxHeight: '400px',
  overflow: 'hidden',
  borderRadius: theme.spacing(2),
  zIndex: 1,
  backgroundColor: '#1a1f25',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(120,255,205,0.08) 0%, rgba(0,0,0,0) 100%)',
    zIndex: 0
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle, rgba(120,255,205,0.03) 0%, rgba(0,0,0,0) 50%)',
    zIndex: 0
  }
}));

const FloatingCircles = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 1,
  '& span': {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0.7,
    '&:nth-of-type(1)': {
      width: '80px',
      height: '80px',
      background: '#81D8D0',
      left: '10%',
      top: '20%',
      animation: 'float 4s ease-in-out infinite'
    },
    '&:nth-of-type(2)': {
      width: '60px',
      height: '60px',
      background: '#E6C786',
      right: '20%',
      top: '30%',
      animation: 'float 3s ease-in-out infinite'
    },
    '&:nth-of-type(3)': {
      width: '40px',
      height: '40px',
      background: '#97A5C0',
      left: '30%',
      bottom: '20%',
      animation: 'float 5s ease-in-out infinite'
    }
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0)'
    },
    '50%': {
      transform: 'translateY(-20px)'
    }
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '12px 24px',
  fontSize: '1rem',
  textTransform: 'none',
  marginTop: theme.spacing(2),
  '&.primary': {
    backgroundColor: 'var(--primary)',
    color: '#000',
    '&:hover': {
      backgroundColor: 'rgba(120, 255, 205, 0.8)'
    }
  },
  '&.secondary': {
    borderColor: 'var(--primary)',
    color: 'var(--primary)',
    '&:hover': {
      backgroundColor: 'rgba(120, 255, 205, 0.1)'
    }
  }
}));

const ContentCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  border: '1px solid rgba(255, 255, 255, 0.1)'
}));

const DonationMethod = styled(Typography)(({ theme }) => ({
  color: 'var(--primary)',
  fontWeight: 'bold',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1)
}));

const DonationInfo = styled(Typography)(({ theme }) => ({
  color: '#fff',
  marginBottom: theme.spacing(1)
}));

const Donation = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    // 這裡添加下載表格的邏輯
    console.log('下載表格');
  };

  return (
    <MainLayout>
      <ScrollContainer>
        <HeroBanner>
          <FloatingCircles>
            <span></span>
            <span></span>
            <span></span>
          </FloatingCircles>
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
           
          </Box>
        </HeroBanner>

        <Container maxWidth="lg" sx={{ mb: 8, mt: 12 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{
            color: 'var(--primary)',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 6
          }}>
            社會捐款
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
              <ContentCard>
                <DonationMethod variant="h6">
                  信用卡、郵局之定期自動轉帳捐款
                </DonationMethod>
                <DonationInfo>
                  可立即下載捐款表格 
                  <a 
                    href="http://www.old.org.tw/old_htm/file/donate.pdf?3"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'var(--primary)', 
                      textDecoration: 'underline',
                      padding: '0 4px',
                      cursor: 'pointer'
                    }}
                  >
                    (下載表格)
                  </a> 
                  或來電 (02)2533-3333 索取
                </DonationInfo>

                <DonationMethod variant="h6">
                  郵政劃撥
                </DonationMethod>
                <DonationInfo>
                  逕至郵局將款項劃撥至本會愛心帳戶<br />
                  劃撥帳號：1918-1717<br />
                  戶名為：「老人基金會」
                </DonationInfo>

                <DonationMethod variant="h6">
                  劃線支票
                </DonationMethod>
                <DonationInfo>
                  支票抬頭為：「財團法人台北市老人基金會」，並請註明禁止背書轉讓
                </DonationInfo>

                <DonationMethod variant="h6">
                  現金袋
                </DonationMethod>
                <DonationInfo>
                  請寄114台北碧湖郵局1號信箱 (老人基金會收)
                </DonationInfo>

                <DonationMethod variant="h6">
                  網路捐款
                </DonationMethod>
                <DonationInfo>
                  板信商銀（大直分行）<br />
                  帳號：08445000020768<br />
                  戶名：財團法人台北市老人基金會
                </DonationInfo>

                <Typography sx={{ 
                  color: '#fff', 
                  marginTop: 4,
                  padding: 2,
                  backgroundColor: 'rgba(120, 255, 205, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid var(--primary)'
                }}>
                  捐款人在捐款後，均會收到由本會開立的正式收據，可於年底報稅時作抵扣稅額之用。
                </Typography>
              </ContentCard>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 4 }}>
                <StyledButton
                  variant="contained"
                  className="primary"
                  onClick={() => navigate('/donation-record')}
                >
                  捐款徵信
                </StyledButton>
                <StyledButton
                  variant="contained"
                  className="primary"
                  onClick={() => navigate('/online-donation')}
                >
                  網路捐款
                </StyledButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ mt: 8 }}>
          <Footer />
        </Box>
      </ScrollContainer>
    </MainLayout>
  );
};

export default Donation;