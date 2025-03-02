import React from 'react';
import {  Card, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import MainLayout from '../components/Layout/MainLayout';
import { ScrollContainer } from '../styles/globalStyles';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../components/Layout/Footer';



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

const FadeInBox = styled(Box)(  ({
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

const ElderlySupport = () => {
  const carouselImages = [
    `${process.env.PUBLIC_URL}/images/services/support/A_charitable_foundation_hosting_an_elderly_care_ev.jpg`,
    `${process.env.PUBLIC_URL}/images/services/support/A_charitable_foundation_organizing_an_elderly_spon.jpg`,
    `${process.env.PUBLIC_URL}/images/services/support/A_charitable_organization_hosting_an_elderly_suppo.jpg`,
    `${process.env.PUBLIC_URL}/images/services/support/A_charity_event_focused_on_elderly_sponsorship_and.jpg`,
    `${process.env.PUBLIC_URL}/images/services/support/A_heartwarming_elderly_sponsorship_event_organized.jpg`,
    `${process.env.PUBLIC_URL}/images/services/support/A_non-profit_organization_conducting_an_elderly_as.jpg`,
    `${process.env.PUBLIC_URL}/images/services/support/An_elderly_care_sponsorship_event_organized_by_a_n.jpg`,
    `${process.env.PUBLIC_URL}/images/services/support/An_elderly_sponsorship_event_organized_by_a_charit.jpg`,
    `${process.env.PUBLIC_URL}/images/services/support/An_elderly_sponsorship_program_event_in_a_communit.jpg`,
    `${process.env.PUBLIC_URL}/images/services/support/An_elderly_support_event_organized_by_a_charity_gr.jpg`
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
                  <img src={carouselImages[index * 2]} alt={` ${index * 2 + 1}`} />
                  {carouselImages[index * 2 + 1] && (
                    <img src={carouselImages[index * 2 + 1]} alt={`${index * 2 + 2}`} />
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
              老人助養
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ 
              color: '#fff',
              lineHeight: 1.8,
              textAlign: 'justify'
            }}>
              老人基金會自77年起，對散居各地的貧困無依老人展開關懷協助，二十餘年來協助個案累積逾數萬位，部分個案協助期約二十年。
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ 
              color: '#fff',
              lineHeight: 1.8,
              textAlign: 'justify'
            }}>
              由於近期來社會福利制度已臻健全，低收入老人獲得政府生活補助，但仍有三種老人成為社會福利制度邊緣人：
            </Typography>
            
            <Box sx={{ pl: 3, mb: 4 }}>
              <Typography variant="body1" paragraph sx={{ color: '#fff' }}>
                一：居住地點非戶籍所在地，無法獲得補助。
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#fff' }}>
                二：已獲得補助，但不足以支付實際生活需求。
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#fff' }}>
                三：子女未盡撫養義務，卻造成老人無法申請補助。
              </Typography>
            </Box>
            
            <Typography variant="body1" sx={{ 
              color: '#fff',
              lineHeight: 1.8,
              textAlign: 'justify'
            }}>
              由於助養工作係本會設立初衷，且許多老人多年來一直由本會照顧中，故助養組將堅定持續這項充滿愛心與感動的工作。
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

export default ElderlySupport;