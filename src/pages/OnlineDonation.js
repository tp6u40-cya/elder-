import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { styled } from '@mui/material/styles';
import MainLayout from '../components/Layout/MainLayout';
import { ScrollContainer } from '../styles/globalStyles';
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

const ContentCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  border: '1px solid rgba(255, 255, 255, 0.1)'
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.23)'
    },
    '&:hover fieldset': {
      borderColor: 'var(--primary)'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--primary)'
    }
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)'
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '12px 24px',
  fontSize: '1rem',
  textTransform: 'none',
  marginTop: theme.spacing(2),
  backgroundColor: 'var(--primary)',
  color: '#000',
  '&:hover': {
    backgroundColor: 'rgba(120, 255, 205, 0.8)'
  }
}));

const BankInfo = styled(Typography)(({ theme }) => ({
  color: '#fff',
  marginBottom: theme.spacing(1)
}));

const OnlineDonation = () => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    amount: '',
    accountNumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'accountNumber') {
      // 只允許輸入數字，且限制最多5位
      const numericValue = value.replace(/[^0-9]/g, '');
      const limitedValue = numericValue.slice(0, 5);
      setFormData(prev => ({
        ...prev,
        [name]: limitedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenConfirm(true);
  };

  const handleConfirm = () => {
    setOpenConfirm(false);
    setOpenSuccess(true);
  };

  const handleSuccess = () => {
    setOpenSuccess(false);
    window.location.reload();
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
            網路捐款
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
              <ContentCard>
                <form onSubmit={handleSubmit}>
                  <Typography variant="h6" sx={{ color: 'var(--primary)', mb: 3 }}>
                    捐款人資料
                  </Typography>
                  
                  <StyledTextField
                    required
                    fullWidth
                    label="姓名或單位名稱"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  
                  <StyledTextField
                    required
                    fullWidth
                    label="聯絡電話"
                    variant="outlined"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  
                  <StyledTextField
                    required
                    fullWidth
                    label="聯絡地址"
                    variant="outlined"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  
                  <StyledTextField
                    required
                    fullWidth
                    label="捐款金額"
                    variant="outlined"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                  
                  <StyledTextField
                    required
                    fullWidth
                    label="匯款帳號後五碼"
                    variant="outlined"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    helperText="請填寫您的匯款帳號後五碼，限輸入5位數字"
                    inputProps={{
                      maxLength: 5,
                      pattern: '[0-9]*'
                    }}
                  />

                  <Typography variant="h6" sx={{ color: 'var(--primary)', mt: 4, mb: 3 }}>
                    受款銀行資料
                  </Typography>

                  <Box sx={{ 
                    backgroundColor: 'rgba(120, 255, 205, 0.1)', 
                    p: 3, 
                    borderRadius: 2,
                    border: '1px solid var(--primary)'
                  }}>
                    <BankInfo>受款戶名：財團法人台北市老人基金會</BankInfo>
                    <BankInfo>受款銀行：彰化商業銀行大直分行</BankInfo>
                    <BankInfo>受款地址：台北市中山區北安路589號</BankInfo>
                    <BankInfo>受款帳號：9738-01-453245-01</BankInfo>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <StyledButton type="submit" variant="contained">
                      確認送出
                    </StyledButton>
                  </Box>
                </form>
              </ContentCard>
            </Grid>
          </Grid>
        </Container>

        <Dialog
          open={openConfirm}
          onClose={() => setOpenConfirm(false)}
          aria-labelledby="confirm-dialog-title"
          aria-describedby="confirm-dialog-description"
        >
          <DialogTitle id="confirm-dialog-title">
            請確認捐款資料
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="confirm-dialog-description">
              請確認您填寫的捐款資料是否正確？
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenConfirm(false)} sx={{ color: 'var(--primary)' }}>
              返回修改
            </Button>
            <Button onClick={handleConfirm} variant="contained" sx={{ bgcolor: 'rgba(120, 255, 205, 0.8)', color: '#000', '&:hover': { bgcolor: 'rgba(120, 255, 206, 0.7)' } }}>
              確認無誤
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openSuccess}
          onClose={handleSuccess}
          aria-labelledby="success-dialog-title"
          aria-describedby="success-dialog-description"
        >
          <DialogTitle id="success-dialog-title">
            感謝您的捐款
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="success-dialog-description">
              您的捐款資料已成功送出，感謝您的愛心支持！
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSuccess} variant="contained" sx={{bgcolor: 'rgba(120, 255, 205, 0.8)', color: '#000', '&:hover': { bgcolor: 'rgba(120, 255, 206, 0.7)' } }}>
              確定
            </Button>
          </DialogActions>
        </Dialog>
        <Box sx={{ mt: 8 }}>
          <Footer />
        </Box>
      </ScrollContainer>
    </MainLayout>
  );
};

export default OnlineDonation;