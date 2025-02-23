import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid,
  Chip,
  Button,
  Paper,
  Divider,
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar  
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import MainLayout from '../components/Layout/MainLayout';
import { ScrollContainer } from '../styles/globalStyles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BuildIcon from '@mui/icons-material/Build';
import { mockInstruments } from './InstrumentList';  // 移動到這裡
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isSameOrBefore);
dayjs.extend(isBetween);
// 模擬預約記錄數據
// 修改模擬預約記錄數據結構
const mockReservations = {
  1: [
    { 
      startDate: '2025-03-12',
      endDate: '2025-03-15',
      status: 'reserved',
      user: '王小明',
      description: '用於實驗研究'
    },
    { 
      startDate: '2025-03-20',
      endDate: '2025-03-22',
      status: 'reserved',
      user: '李小華',
      description: '專題使用'
    }
  ],
  2: [
    { 
      startDate: '2025-02-13',
      endDate: '2025-02-16',
      status: 'reserved',
      user: '陳大文',
      description: '課程使用'
    }
  ]
};

// 修改時間軸項目的顯示
const DetailContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  '& img': {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '16px'
  }
}));

const StatusTimeline = styled(Box)(({ theme }) => ({
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
// 移動 getStatusColor 函數到這裡
const getStatusColor = (status) => {
  switch (status) {
    case '可預約':
      return '#4caf50';
    case '維護中':
      return '#ff9800';
    case '使用中':
      return '#f44336';
    default:
      return '#757575';
  }
};
// 移動 TimelineItem 組件到這裡
const TimelineItem = ({ reservation }) => {
  if (!reservation) return null;
  return (
    <Box sx={{ 
      position: 'relative',
      paddingLeft: '40px',
      marginBottom: '20px'
    }}>
      <Box sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          left: '11px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
        }
      }}>
        <Typography sx={{ fontWeight: 'bold', mb: 0.5 }}>
          {reservation.startDate} 至 {reservation.endDate}
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
          預約者：{reservation.user}
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
          用途：{reservation.description}
        </Typography>
      </Box>
    </Box>
  );
};
// 移動 ReservationDialog 組件到這裡
// 修改 ReservationDialog 組件
const ReservationDialog = ({ open, onClose, onSubmit, existingReservations }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [description, setDescription] = useState('');
  const [error, setError] = useState({ date: false, description: false });
  // 檢查日期是否已被預約
  const isDateReserved = (date) => {
    return existingReservations.some(reservation => {
      const start = dayjs(reservation.startDate);
      const end = dayjs(reservation.endDate);
      return date.isBetween(start, end, 'day', '[]');
    });
  };
  // Update the hasDateConflict function in ReservationDialog
  const hasDateConflict = (start, end) => {
    if (!start || !end) return false;
    const startDate = dayjs(start);
    const endDate = dayjs(end);
    for (let d = startDate; d.isSameOrBefore(endDate); d = d.add(1, 'day')) {
      if (isDateReserved(d)) {
        return true;
      }
    }
    return false;
  };
  const handleClose = () => {
    setDateRange([null, null]);
    setDescription('');
    setError({ date: false, description: false });
    onClose();
  };
  const handleSubmit = () => {
    const newError = {
      date: !dateRange[0] || !dateRange[1],
      description: !description.trim()
    };
  // 檢查日期衝突
  if (dateRange[0] && dateRange[1] && hasDateConflict(dateRange[0], dateRange[1])) {
    setError({ ...newError, date: true });
    return;
  }
  // Add missing closing brace and semicolon
    setError(newError);
    if (!newError.date && !newError.description) {
      onSubmit({
        startDate: dateRange[0],
        endDate: dateRange[1],
        description: description
      });
      handleClose();
    }  // Add missing closing brace and semicolon
  };  // Add missing closing brace and semicolon

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>預約儀器</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="開始日期"
              value={dateRange[0]}
              onChange={(newValue) => {
                setDateRange([newValue, dateRange[1]]);
                setError({ ...error, date: false });
              }}
              minDate={dayjs()}
              shouldDisableDate={isDateReserved}
              sx={{ width: '100%', mb: 2 }}
            />
            <DatePicker
              label="結束日期"
              value={dateRange[1]}
              onChange={(newValue) => {
                setDateRange([dateRange[0], newValue]);
                setError({ ...error, date: false });
              }}
              minDate={dateRange[0] || dayjs()}
              shouldDisableDate={isDateReserved}
              sx={{ width: '100%', mb: 2 }}
            />
          </LocalizationProvider>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="使用說明"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setError({ ...error, description: false });
            }}
            error={error.description}
            helperText={error.description ? '請填寫使用說明' : ''}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button onClick={handleSubmit} variant="contained">確認預約</Button>
      </DialogActions>
    </Dialog>
  );
}; // Add semicolon here

const InstrumentDetail = () => {
  const [openReservation, setOpenReservation] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleReservation = (reservationData) => {
    const newReservation = {
      startDate: dayjs(reservationData.startDate).format('YYYY-MM-DD'),
      endDate: dayjs(reservationData.endDate).format('YYYY-MM-DD'),
      status: 'reserved',
      user: '當前用戶',
      description: reservationData.description
    };
    
    if (!mockReservations[id]) {
      mockReservations[id] = [];
    }
    mockReservations[id].push(newReservation);
    
    setReservationSuccess(true);
    setTimeout(() => {
      setReservationSuccess(false);
    }, 3000);
  };
  
  const instrument = mockInstruments.find(item => item.id === parseInt(id));
  const reservations = mockReservations[id] || [];
  if (!instrument) {
    return (
      <MainLayout>
        <Box sx={{ p: 3 }}>
          <Typography>儀器不存在</Typography>
        </Box>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <ScrollContainer>
        <DetailContainer>
          {/* 頂部導航 */}
          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button 
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/instruments')}
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                '&:hover': { color: '#fff' }
              }}
            >
              返回列表
            </Button>
          </Box>

          <Grid container spacing={4}>
            {/* 左側區域 */}
            <Grid item xs={12} md={7}>
              <img src={instrument.image} alt={instrument.name} />
              <Box sx={{ mt: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {instrument.name}
                </Typography>
                <Chip 
                  label={instrument.status}
                  sx={{ 
                    backgroundColor: getStatusColor(instrument.status),
                    color: '#fff',
                    mb: 2
                  }}
                />
                <Typography sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  mb: 3,
                  lineHeight: 1.8 
                }}>
                  {instrument.description}
                </Typography>

                {/* 基本信息卡片 */}
                <Paper sx={{ 
                  p: 3, 
                  bgcolor: '#1a1f25',
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    基本資訊
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <BuildIcon sx={{ color: 'rgba(255,255,255,0.7)' }} />
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                          型號：{instrument.model}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <LocationOnIcon sx={{ color: 'rgba(255,255,255,0.7)' }} />
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                          位置：{instrument.location}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </Grid>

            {/* 右側區域 */}
            <Grid item xs={12} md={5}>
              <Paper sx={{ /* ... */ }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <CalendarTodayIcon sx={{ color: 'var(--primary)' }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    預約狀態
                  </Typography>
                </Box>

                <StatusTimeline>
                  {Array.isArray(reservations) && reservations.map((reservation, index) => (
                    reservation && <TimelineItem key={index} reservation={reservation} />
                  ))}
                </StatusTimeline>

                <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

                {/* 修改預約按鈕，添加 onClick 事件 */}
                <Button 
                  variant="contained"
                  fullWidth
                  onClick={() => setOpenReservation(true)}
                  sx={{
                    backgroundColor: '#A9B7AA',
                    '&:hover': {
                      backgroundColor: '#8A9B8B'
                    }
                  }}
                >
                  預約使用
                </Button>
              </Paper>
            </Grid>
          </Grid>
          {/* ... 其他代碼保持不變 ... */}
          
          {/* 添加預約對話框組件 */}
          <ReservationDialog
            open={openReservation}
            onClose={() => setOpenReservation(false)}
            onSubmit={handleReservation}
            existingReservations={reservations}
          />

          {/* 添加成功提示 */}
          <Snackbar
            open={reservationSuccess}
            autoHideDuration={3000}
            onClose={() => setReservationSuccess(false)}
            message="預約成功！"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          />
        </DetailContainer>
      </ScrollContainer>
    </MainLayout>
  );
}; // Add semicolon here
export default InstrumentDetail; // Keep only one export statement