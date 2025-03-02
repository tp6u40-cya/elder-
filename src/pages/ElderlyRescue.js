import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import MainLayout from '../components/Layout/MainLayout';
import { ScrollContainer } from '../styles/globalStyles';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../components/Layout/Footer';

const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)'
  }
}));

const HeroBanner = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(6),
  width: '100%',
  height: '70vh',
  minHeight: '600px',
  maxHeight: '800px',
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

const CarouselContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(4),
  '& .carousel': {
    height: '100%'
  },
  '& .carousel .slide': {
    height: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    padding: theme.spacing(2)
  },
  '& .carousel .slide img': {
    width: 'calc(50% - 24px)',
    height: '90%',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
  },
  '& .carousel .control-dots': {
    bottom: '20px',
    zIndex: 2
  },
  '& .carousel .control-dot': {
    background: '#fff',
    opacity: 0.7,
    width: '12px',
    height: '12px',
    margin: '0 8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    '&.selected': {
      background: theme.palette.primary.main,
      opacity: 1
    }
  },
  '& .carousel .control-arrow': {
    fontSize: '24px',
    background: 'rgba(255, 255, 255, 0.15)',
    opacity: 0.8,
    width: '50px',
    height: '50px',
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.25)',
      opacity: 1
    },
    '&:before': {
      content: "''",
      width: '15px',
      height: '15px',
      borderWidth: '3px 3px 0 0',
      borderStyle: 'solid',
      borderColor: '#fff',
      transform: 'rotate(45deg)',
      margin: '0 8px',
      position: 'absolute'
    },
    '&.control-prev:before': {
      transform: 'rotate(-135deg)',
      marginLeft: '12px'
    },
    '&.control-next:before': {
      transform: 'rotate(45deg)',
      marginRight: '12px'
    }
  }
}));

const FadeInBox = styled(Box)( ({
  animation: 'fadeIn 2s ease-in-out',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  }
}));

const ElderlyRescue = () => {
  const carouselImages = [
    `${process.env.PUBLIC_URL}/images/services/rescue/elderly_rescue_1.jpg`,
    `${process.env.PUBLIC_URL}/images/services/rescue/elderly_rescue_2.jpg`,
    `${process.env.PUBLIC_URL}/images/services/rescue/elderly_rescue_3.jpg`,
    `${process.env.PUBLIC_URL}/images/services/rescue/elderly_rescue_4.jpg`,
    `${process.env.PUBLIC_URL}/images/services/rescue/elderly_rescue_5.jpg`,
    `${process.env.PUBLIC_URL}/images/services/rescue/elderly_rescue_6.jpg`
  ];

  return (
    <MainLayout>
      <ScrollContainer>
        <HeroBanner>
          <CarouselContainer>
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              transitionTime={500}
              dynamicHeight={false}
              centerMode={false}
              centerSlidePercentage={100}
            >
              {Array.from({ length: Math.ceil(carouselImages.length / 2) }, (_, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                  <img src={carouselImages[index * 2]} alt={`老人救援服務圖片 ${index * 2 + 1}`} />
                  {carouselImages[index * 2 + 1] && (
                    <img src={carouselImages[index * 2 + 1]} alt={`老人救援服務圖片 ${index * 2 + 2}`} />
                  )}
                </div>
              ))}
            </Carousel>
          </CarouselContainer>
        </HeroBanner>

        <Container maxWidth="lg" sx={{ mb: 8, mt: 12 }}>          
          <FadeInBox sx={{ py: 4 }}>            
            <Typography variant="h4" component="h1" gutterBottom sx={{ 
              color: 'var(--primary)',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 6
            }}>
              老人救援
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ 
              color: '#fff',
              lineHeight: 1.8,
              textAlign: 'justify'
            }}>
              老人基金會自79年起設置救援組，廿四小時全年無休的協助需要緊急協助的老人；81年規劃製作「生命關懷、愛心連線」系統，連線及監控獨居老人緊急通報；83年配合無線電計程車聯誼會中七千輛駕駛成立救援大隊，並訓練五佰位救援隊員，機動救援散居各地獨居老人；86年成立「中途之家」安置受虐、迷途老人；88年921地震第二天趕赴災區，搜尋各處老人，並安置於中部地區各養護機構，設立災區各地服務中心，服務五年；89年協助台灣各地設置獨居老人緊急通報連線。
            </Typography>
            
            <Typography variant="body1" sx={{ 
              color: '#fff',
              lineHeight: 1.8,
              textAlign: 'justify'
            }}>
              基金會感謝各地勤務指揮中心和各地醫療機構熱心配合、也為曾經受救援、協助的老人，向救援隊員致上最高謝意。
            </Typography>
          </FadeInBox>
        </Container>
        <Box sx={{ mt: 8 }}>
          <Footer />
        </Box>
      </ScrollContainer>
    </MainLayout>
  );
};

export default ElderlyRescue;