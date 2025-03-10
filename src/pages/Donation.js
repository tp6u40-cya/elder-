import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Chart } from 'react-google-charts';
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

const generateDonationData = () => {
  const donationData = [
    { id: 1, name: '王小明', amount: 15000, date: '2024-01-15' },
    { id: 2, name: '仁愛醫療集團', amount: 50000, date: '2024-01-10' },
    { id: 3, name: '陳美玲', amount: 8000, date: '2024-01-05' },
    { id: 4, name: '永續發展基金會', amount: 100000, date: '2024-01-01' },
    { id: 5, name: '張大華', amount: 20000, date: '2023-12-28' },
    { id: 6, name: '誠信企業股份有限公司', amount: 80000, date: '2023-12-25' },
    { id: 7, name: '李志明', amount: 12000, date: '2023-12-20' },
    { id: 8, name: '慈善文教基金會', amount: 60000, date: '2023-12-15' },
    { id: 9, name: '吳美珠', amount: 5000, date: '2023-12-10' },
    { id: 10, name: '大愛科技有限公司', amount: 30000, date: '2023-12-05' },
    { id: 11, name: '林建國', amount: 25000, date: '2023-12-01' },
    { id: 12, name: '和平醫療財團', amount: 150000, date: '2023-11-28' },
    { id: 13, name: '黃小芳', amount: 10000, date: '2023-11-25' },
    { id: 14, name: '福祉關懷協會', amount: 45000, date: '2023-11-20' },
    { id: 15, name: '謝明德', amount: 18000, date: '2023-11-15' },
    { id: 16, name: '博愛慈善基金會', amount: 120000, date: '2023-11-10' },
    { id: 17, name: '劉家豪', amount: 7000, date: '2023-11-05' },
    { id: 18, name: '信實工業股份有限公司', amount: 90000, date: '2023-11-01' },
    { id: 19, name: '周淑華', amount: 13000, date: '2023-10-28' },
    { id: 20, name: '仁心醫療基金會', amount: 200000, date: '2023-10-25' },
    { id: 21, name: '楊志豪', amount: 16000, date: '2023-10-20' },
    { id: 22, name: '永續關懷協會', amount: 70000, date: '2023-10-15' },
    { id: 23, name: '蔡美玲', amount: 9000, date: '2023-10-10' },
    { id: 24, name: '大同慈善基金會', amount: 180000, date: '2023-10-05' },
    { id: 25, name: '鄭建華', amount: 22000, date: '2023-10-01' }
  ];
  return donationData;
};

const Donation = () => {
  const navigate = useNavigate();
  const [displayAmount, setDisplayAmount] = useState(1);
  const totalAmount = generateDonationData().reduce((sum, item) => sum + item.amount, 0);

  useEffect(() => {
    const duration = 3000; // 3秒
    const startTime = performance.now();
    const startValue = 1;
    const endValue = totalAmount;

    const updateNumber = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // 使用 easeOutQuad 緩動函數讓動畫更自然
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeProgress);
      
      setDisplayAmount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    requestAnimationFrame(updateNumber);
  }, [totalAmount]);



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
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <Typography variant="h4" component="h1" sx={{
              color: 'var(--primary)',
              fontWeight: 'bold',
              marginBottom: 4
            }}>
              社會捐款
            </Typography>
          </Box>
        </HeroBanner>

        <Container maxWidth="lg" sx={{ mb: 8, mt: 12 }}>
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
            <Grid item xs={12} md={10}>
              <ContentCard>
                <Typography variant="h5" sx={{
                  color: 'var(--primary)',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: 2
                }}>
                  捐款資金使用分配
                </Typography>
                <Typography variant="h6" sx={{
                  color: '#fff',
                  textAlign: 'center',
                  marginBottom: 4
                }}>
                  目前總捐款金額：NT$ {displayAmount.toLocaleString()}
                </Typography>
                <Chart
                  width={'100%'}
                  height={'400px'}
                  chartType="PieChart"
                  loader={<div>Loading Chart...</div>}
                  data={(() => {
                    const totalAmount = generateDonationData().reduce((sum, item) => sum + item.amount, 0);
                    return [
                      ['用途', '金額'],
                      ['老人照護服務', totalAmount * 0.375], // 37.5%
                      ['急難救助', totalAmount * 0.233], // 23.3%
                      ['社區服務計畫', totalAmount * 0.167], // 16.7%
                      ['教育培訓', totalAmount * 0.125], // 12.5%
                      ['行政管理', totalAmount * 0.1], // 10%
                    ];
                  })()} 
                  options={{
                    backgroundColor: 'transparent',
                    legend: {
                      textStyle: { color: '#fff' },
                      position: 'bottom',
                      alignment: 'center'
                    },
                    tooltip: { 
                      trigger: 'focus',
                      showColorCode: true,
                      text: 'value',
                      textStyle: { color: '#000' },
                      format: 'NT$ #,###'
                    },
                    slices: {
                      0: { color: '#81D8D0' },
                      1: { color: '#E6C786' },
                      2: { color: '#97A5C0' },
                      3: { color: '#DEA592' },
                      4: { color: '#E2C6C4' }
                    },
                    chartArea: { width: '100%', height: '80%' }
                  }}
                />
              </ContentCard>
            </Grid>
          </Grid>

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
        <Box sx={{
           mt: 8, 
           width: "100%",       // 設定寬度 100%
             }}>
          <Footer />
        </Box>
      </ScrollContainer>
    </MainLayout>
  );
};

export default Donation;