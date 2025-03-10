import React, { useState, useEffect, useRef } from 'react';
import { Grid, Typography, Box, Container, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import MainLayout from '../components/Layout/MainLayout';
import { ScrollContainer } from '../styles/globalStyles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)'
    },
    '&:hover fieldset': {
      borderColor: 'rgba(120, 255, 205, 0.5)'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--primary)'
    }
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)'
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'var(--primary)'
  },
  '& .MuiInputBase-input': {
    color: '#fff'
  }
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '8px',
  color: '#fff',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.2)'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(120, 255, 205, 0.5)'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--primary)'
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '10px 24px',
  fontSize: '1rem',
  textTransform: 'none',
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

const Contact = () => {
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
    subject: '',
    content: '',
    preferredTime: '',
    captcha: ''
  });

  const [captchaCode, setCaptchaCode] = useState('');

  // 生成隨機驗證碼
  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
  };

  // 在組件載入時生成驗證碼
  useEffect(() => {
    generateCaptcha();
  }, []);

  const [errors, setErrors] = useState({});
  const [openResetDialog, setOpenResetDialog] = useState(false);
  const [openSubmitDialog, setOpenSubmitDialog] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = '請輸入姓名';
    if (!formData.phone) newErrors.phone = '請輸入電話';
    if (!formData.email) newErrors.email = '請輸入Email';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = '請輸入有效的Email格式';
    if (!formData.type) newErrors.type = '請選擇問題類型';
    if (!formData.subject) newErrors.subject = '請輸入主旨';
    if (!formData.content) newErrors.content = '請輸入問題內容';
    if (!formData.captcha) newErrors.captcha = '請輸入驗證碼';
    else if (formData.captcha.toUpperCase() !== captchaCode) newErrors.captcha = '驗證碼錯誤';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleReset = () => {
    setOpenResetDialog(true);
  };

  const confirmReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      type: '',
      subject: '',
      content: ''
    });
    setErrors({});
    setOpenResetDialog(false);
  };

  const handleRefresh = () => {
    generateCaptcha();
    drawCaptcha();
  };

  const drawCaptcha = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // 清除畫布
    ctx.clearRect(0, 0, width, height);

    // 設置隨機背景色
    const bgColor = `rgb(${Math.random() * 50}, ${Math.random() * 50}, ${Math.random() * 50})`;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    // 繪製背景干擾點
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 2;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      ctx.fill();
    }

    // 繪製干擾線
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.lineTo(Math.random() * width, Math.random() * height);
      ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      ctx.lineWidth = Math.random() * 2;
      ctx.stroke();
    }

    // 設置文字樣式
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // 逐個繪製字符，添加扭曲效果
    const chars = captchaCode.split('');
    const charWidth = width / (chars.length + 2);
    chars.forEach((char, i) => {
      const x = charWidth * (i + 1.5);
      const y = height / 2 + Math.random() * 8 - 4;
      const angle = (Math.random() - 0.5) * 0.4;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 60%)`;
      ctx.fillText(char, 0, 0);
      ctx.restore();
    });
  };

  useEffect(() => {
    drawCaptcha();
  }, [captchaCode]);

  const handleSubmit = () => {
    if (validateForm()) {
      setOpenSubmitDialog(true);
    }
  };

  const confirmSubmit = () => {
    // 處理表單提交邏輯
    console.log('Form submitted:', formData);
    setOpenSubmitDialog(false);
    setOpenSuccessDialog(true);
  };

  const handleSuccess = () => {
    setOpenSuccessDialog(false);
    // 重新載入頁面
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
            聯絡本會
          </Typography>

          <Box component="form" sx={{ maxWidth: 800, mx: 'auto' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  required
                  fullWidth
                  label="姓名"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  required
                  fullWidth
                  label="電話"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={!!errors.type}>
                  <InputLabel sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>問題類型 *</InputLabel>
                  <StyledSelect
                    required
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    label="問題類型"
                  >
                    <MenuItem value="general">一般諮詢</MenuItem>
                    <MenuItem value="service">服務相關</MenuItem>
                    <MenuItem value="donation">捐款相關</MenuItem>
                    <MenuItem value="other">其他</MenuItem>
                  </StyledSelect>
                  {errors.type && (
                    <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                      {errors.type}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  required
                  fullWidth
                  label="主旨"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={!!errors.subject}
                  helperText={errors.subject}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  required
                  fullWidth
                  label="問題內容"
                  name="content"
                  multiline
                  rows={4}
                  value={formData.content}
                  onChange={handleChange}
                  error={!!errors.content}
                  helperText={errors.content}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="方便回覆聯絡時間（選填）"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  placeholder="例如：平日下午2-5點"
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <StyledTextField
                  required
                  sx={{ flexGrow: 1 }}
                  label="驗證碼"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  error={!!errors.captcha}
                  helperText={errors.captcha}
                  placeholder="請輸入驗證碼"
                />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <canvas
                    ref={canvasRef}
                    width="180"
                    height="50"
                    style={{
                      cursor: 'pointer',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(26, 31, 37, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  />
                  <StyledButton
                    variant="outlined"
                    className="secondary"
                    onClick={handleRefresh}
                    sx={{
                      minWidth: 'auto',
                      padding: '8px',
                      borderRadius: '8px'
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/>
                    </svg>
                  </StyledButton>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
                <StyledButton
                  variant="outlined"
                  className="secondary"
                  onClick={handleReset}
                >
                  清除重填
                </StyledButton>
                <StyledButton
                  variant="contained"
                  className="primary"
                  onClick={handleSubmit}
                >
                  確認送出
                </StyledButton>
              </Grid>
            </Grid>
          </Box>

          {/* 清除重填確認對話框 */}
          <Dialog
            open={openResetDialog}
            onClose={() => setOpenResetDialog(false)}
            PaperProps={{
              style: {
                backgroundColor: '#1a1f25',
                color: '#fff',
                borderRadius: '16px',
                border: '1px solid var(--primary)'
              }
            }}
          >
            <DialogTitle>確認清除</DialogTitle>
            <DialogContent>
              <DialogContentText sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                確定要清除所有已填寫的內容嗎？
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenResetDialog(false)} sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                取消
              </Button>
              <Button onClick={confirmReset} sx={{ color: 'var(--primary)' }}>
                確認
              </Button>
            </DialogActions>
          </Dialog>

          {/* 提交確認對話框 */}
          <Dialog
            open={openSubmitDialog}
            onClose={() => setOpenSubmitDialog(false)}
            PaperProps={{
              style: {
                backgroundColor: '#1a1f25',
                color: '#fff',
                borderRadius: '16px',
                border: '1px solid var(--primary)'
              }
            }}
          >
            <DialogTitle>確認提交</DialogTitle>
            <DialogContent>
              <DialogContentText sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                確定要提交表單嗎？
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenSubmitDialog(false)} sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                取消
              </Button>
              <Button onClick={confirmSubmit} sx={{ color: 'var(--primary)' }}>
                確認
              </Button>
            </DialogActions>
          </Dialog>

          {/* 提交成功對話框 */}
          <Dialog
            open={openSuccessDialog}
            onClose={handleSuccess}
            PaperProps={{
              style: {
                backgroundColor: '#1a1f25',
                color: '#fff',
                borderRadius: '16px',
                border: '1px solid var(--primary)'
              }
            }}
          >
            <DialogTitle sx={{ textAlign: 'center', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <CheckCircleIcon sx={{ fontSize: 32, color: 'var(--primary)' }} />
              <Typography>提交成功！</Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText sx={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', mt: 1 }}>
                您的表單已成功送出，我們將儘快與您聯絡。感謝您的耐心等待！
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
              <Button
                onClick={handleSuccess}
                sx={{
                  color: '#fff',
                  backgroundColor: 'var(--primary)',
                  '&:hover': {
                    backgroundColor: 'rgba(120, 255, 205, 0.8)'
                  },
                  px: 4
                }}
              >
                確認
              </Button>
            </DialogActions>
          </Dialog>
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

export default Contact;