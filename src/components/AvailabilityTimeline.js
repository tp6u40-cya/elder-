import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '20px 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '15px',
    top: 0,
    bottom: 0,
    width: '2px',
    background: 'rgba(255,255,255,0.1)',
  }
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingLeft: '40px',
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '11px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  }
}));

const AvailabilityTimeline = ({ dates }) => {
  return (
    <TimelineContainer>
      {dates.map((date, index) => (
        <TimelineItem key={index}>
          <CircleIcon 
            sx={{ 
              color: date.status === 'free' ? '#4caf50' : '#ff9800',
              position: 'absolute',
              left: '6px',
              fontSize: '20px'
            }} 
          />
          <Box>
            <Typography sx={{ fontWeight: 'bold' }}>
              {date.date}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              {date.status === 'free' ? '可預約' : `預約者：${date.user}`}
            </Typography>
          </Box>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default AvailabilityTimeline;