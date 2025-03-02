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

const FadeInBox = styled(Box)(({ theme }) => ({
  animation: 'fadeIn 1s ease-in-out',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  }
}));

const ElderlySearch = () => {
  const carouselImages = [
    `${process.env.PUBLIC_URL}/images/services/search/elderly_search_1.jpg`,
    `${process.env.PUBLIC_URL}/images/services/search/elderly_search_2.jpg`,
    `${process.env.PUBLIC_URL}/images/services/search/elderly_search_3.jpg`,
    `${process.env.PUBLIC_URL}/images/services/search/elderly_search_4.jpg`,
    `${process.env.PUBLIC_URL}/images/services/search/elderly_search_5.jpg`,
    
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
                    <img src={carouselImages[index * 2 + 1]} alt={` ${index * 2 + 2}`} />
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
              老人協尋
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ 
              color: '#fff',
              lineHeight: 1.8,
              textAlign: 'justify'
            }}>
              老人基金會自87年起設置協尋組，萬分感謝中國電視、聯合報、警廣電台、東森電視義務免費報導老人走失個案，使得成功促成約二仟位老人回家團圓，其中走失最長老人為廿四年。
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ 
              color: '#fff',
              lineHeight: 1.8,
              textAlign: 'justify'
            }}>
              當確定老人個案時，家屬緊張期待的心情和相見時歡樂情景，每逢令基金會工作人員感到充實和滿足。由於大家常視老人健忘為正常現象，可是當老人在外時，記憶中最重要的姓名、電話、地址卻從記憶中消失，加上台灣的後送作業，這位老人可能就在世上消失，其實大部份的老人是在某個單位收容，家屬四處尋找沒有結果，生要見人、死要見屍，總無法如願，心中焦急、徬徨、自責，可想而知，建議家中的老人衣服上寫上電話號碼。
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

export default ElderlySearch;