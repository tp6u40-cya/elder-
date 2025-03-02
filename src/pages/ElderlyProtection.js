import React from 'react';
import { Typography, Box, Container } from '@mui/material';
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

const ElderlyProtection = () => {
  const carouselImages = [
    `${process.env.PUBLIC_URL}/images/services/protection/A_community_event_focused_on_elderly_safety_and_pr.jpg`,
    `${process.env.PUBLIC_URL}/images/services/protection/A_community_outreach_event_focused_on_elderly_safe.jpg`,
    `${process.env.PUBLIC_URL}/images/services/protection/A_public_health_initiative_focused_on_senior_safet.jpg`,
    `${process.env.PUBLIC_URL}/images/services/protection/A_senior_protection_campaign_promoting_safety_and_.jpg`,
    `${process.env.PUBLIC_URL}/images/services/protection/A_senior_safety_awareness_event_promoting_elderly_.jpg`,
    `${process.env.PUBLIC_URL}/images/services/protection/A_senior_safety_awareness_program_where_elderly_in.jpg`,
    `${process.env.PUBLIC_URL}/images/services/protection/A_senior_safety_training_event_where_elderly_indiv.jpg`,
    `${process.env.PUBLIC_URL}/images/services/protection/An_elderly_care_and_safety_workshop,_where_seniors.jpg`,
    `${process.env.PUBLIC_URL}/images/services/protection/An_elderly_care_safety_seminar_where_professionals.jpg`,
    `${process.env.PUBLIC_URL}/images/services/protection/An_elderly_safety_program_event_aimed_at_promoting.jpg`
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
                  <img src={carouselImages[index * 2]} alt={`老人防護服務圖片 ${index * 2 + 1}`} />
                  {carouselImages[index * 2 + 1] && (
                    <img src={carouselImages[index * 2 + 1]} alt={`老人防護服務圖片 ${index * 2 + 2}`} />
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
              老人防護
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ 
              color: '#fff',
              lineHeight: 1.8,
              textAlign: 'justify'
            }}>
              老人基金會自81年起設置防護組，防制保護受虐老人。設立老人保護委員會，由五十八位立委和十七位學者擔任榮譽顧問，成立全省八處連絡處，與中央警察大學犯罪防治研究所合作「和諧專案」，以一萬五仟位勤區員警，運用戶口查察時機和平時對轄區瞭解，主動提報疑似受虐老人個案，每年均有二仟餘件。在媒體報導下，老人受虐逐漸受到重視，85年老人福利法修訂時，增加保護措施專章，以縣、市單位建立老人保護體系。中國人以敬老悌為傳統，對於子女無論身體、精神或經濟等方式的虐待，內心至為傷痛，常常自家人無法融和的事，基金會以第三者立場居中協調，卻出意料表的順利，主要在於大家仍然認為孝順父母是正確的事。
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

export default ElderlyProtection;