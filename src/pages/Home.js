import { useEffect, useState } from 'react';  
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { BaseContainer } from '../styles/globalStyles';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const AnimatedContent = styled(Box)({
  textAlign: 'center',
  animation: `${fadeIn} 1s ease-out`,
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  zIndex: 2,
  willChange: 'transform',
  backfaceVisibility: 'hidden'
});
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const HomeContainer = styled(BaseContainer)({
  width: '100%',
  height: '100vh',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#4a535c',  
  position: 'relative',
  overflow: 'hidden',
  maxWidth: 'none !important'
});
const GlowEffect = styled(Box)({
  position: 'absolute',
  width: '150px',
  height: '150px',
  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
  borderRadius: '50%',
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none',
  zIndex: 1
});
const PageTransition = styled(Box)(({ isLeaving }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: '#111418',  
  transform: isLeaving ? 'translateY(0)' : 'translateY(100%)',
  transition: 'transform 1.2s ease-in-out',
  zIndex: 1000
}));
const Home = () => {
  const navigate = useNavigate();
  const [isLeaving, setIsLeaving] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeaving(true);
      setTimeout(() => {
        navigate('/dashboard'); 
      }, 1200);
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <HomeContainer onMouseMove={handleMouseMove}>
      <GlowEffect
        sx={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />
      
      <AnimatedContent>
        <Typography 
          variant="h2" 
          sx={{ 
            color: '#fff',
            fontWeight: 'bold',
            mb: 2,
            textShadow: '0 0 10px rgba(255,255,255,0.3)'
          }}
        >
          台北市老人基金會
        </Typography>
        <Typography 
          variant="h4" 
          sx={{ 
            color: 'rgba(255,255,255,0.7)',
            textShadow: '0 0 8px rgba(255,255,255,0.2)'
          }}
        >
          關懷長者 溫暖社會
        </Typography>
      </AnimatedContent>

      <PageTransition isLeaving={isLeaving} />
    </HomeContainer>
  );
};

export default Home;