import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BaseContainer, BaseTextField, BaseButton, BaseBox } from '../styles/globalStyles';
import { useNavigate } from 'react-router-dom';  // 添加這行
// 添加 Alert 相關組件導入
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert } from '@mui/material';
// Logo 組件
const Logo = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
    <svg viewBox="0 0 48 48" fill="none" width="16" height="16">
      <path
        d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
        fill="currentColor"
      />
    </svg>
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
      輔仁大學
    </Typography>
  </Box>
);
// ... 其他樣式組件 ...

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#1a1f25',
    color: '#fff',
    borderRadius: '1.5em',
    border: '.15em solid var(--primary)',
    backdropFilter: 'blur(4px)',
    boxShadow: 'inset 1px 1px 6px rgba(255,255,255,0.3), 2px 2px 15px rgba(0,0,0,0.5)',
    padding: theme.spacing(2)
  }
}));
// 自定義樣式組件
const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#111418',
  color: '#fff',
  padding: theme.spacing(4)
}));

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '512px',
  margin: '0 auto',
  padding: theme.spacing(3),
}));
// Add this with other styled components
// 修改 LoginBox 組件
const LoginBox = styled(BaseBox)(({ theme }) => ({
  maxWidth: '512px',
  margin: '0 auto',
  position: 'relative'  // 添加這行
}));
// 登入頁特有的容器樣式
const LoginContainer = styled(BaseContainer)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  position: 'relative',  // 添加這行
  minHeight: '100vh'     // 添加這行
}));

const LoginTextField = styled(BaseTextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: '56px',
    backgroundColor: '#293038',
    borderRadius: '12px',
    color: '#fff',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    }
  }
}));

const LoginButton = styled(BaseButton)(({ theme }) => ({
  height: '48px',
  padding: '12px',
  '&.outlined': {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(120, 255, 205, 0.1)'
    }
  }
}));
// 修改 BackgroundCircles 組件
const BackgroundCircles = styled(Box)(({ theme }) => ({
  position: 'absolute',  // 改回 absolute
  width: '100%',
  height: '100%',
  zIndex: 0,
  '& span': {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0,    // 移除 filter: 'blur(2px)'
    '&:nth-of-type(1)': {  // 蒂芬妮藍圓圈
      width: '180px',
      height: '180px',
      background: '#81D8D0',  // 修改顏色
      left: '-80px',
      top: '50px',
      animation: 'am2 ease-out 1s forwards, float 3s ease-in-out infinite alternate'
    },
    '&:nth-of-type(2)': {  //金黃色圓圈
      width: '100px',
      height: '100px',
      background: '#E6C786',  // 修改顏色
      right: '-10px',
      top: '80px',
      animation: 'am2 ease-out 1s 0.2s forwards, float 4s ease-in-out infinite alternate-reverse'
    },
    '&:nth-of-type(3)': {  // 灰藍色圓圈
      width: '220px',
      height: '220px',
      background: '#97A5C0',  // 修改顏色
      right: '-100px',
      bottom: '50px',
      animation: 'am2 ease-out 1s 0.4s forwards, float 3.5s ease-in-out infinite alternate'
    }
  },
  '@keyframes float': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(-20px)' }
  },
  '@keyframes am2': {
    '0%': { 
      transform: 'scale(0) rotateZ(60deg)',
      opacity: 0
    },
    '100%': { 
      transform: 'scale(1) rotateZ(0)',
      opacity: 0.7
    }
  }
}));
// FormContainer 保持不變，因為它的 blur 效果會自動作用於下層元素
const BackgroundAnimation = styled(Box)({
  '.bg': {
    animation: 'am2 ease-out 1s'
  },
  '.glass': {
    animation: 'am3 ease-out 1s 0.2s backwards'
  },
  '@keyframes am1': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(-30px)' }
  },
  '@keyframes am2': {
    '0%': { transform: 'scale(0, 0) rotateZ(60deg)' },
    '100%': { transform: 'scale(1, 1) rotateZ(0)' }
  },
  '@keyframes am3': {
    '0%': { 
      transform: 'translateY(8px)',
      opacity: 0
    },
    '100%': { 
      transform: 'translateY(0)',
      opacity: 1
    }
  }
});

// FormContainer 添加玻璃效果和動畫
const FormContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(5),
  border: '.15em solid var(--primary)',
  borderRadius: '1.5em',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(4px)',
  boxShadow: 'inset 1px 1px 6px rgba(255, 255, 255, 0.3), 2px 2px 15px rgba(0, 0, 0, 0.5)',
  marginBottom: theme.spacing(3),
  zIndex: 1,
  animation: 'am3 ease-out 1s 0.2s backwards',
  '& form': {
    marginTop: theme.spacing(4)
  }
}));

// 在 Login 組件中使用
// 添加測試用戶數據
const TEST_USER = {
  ldapAccount: "410012409",
  password: "123456"
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ldapAccount: '',
    password: '',
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = (isAccessible) => {
    // 首先驗證帳號密碼
    if (formData.ldapAccount === TEST_USER.ldapAccount && 
        formData.password === TEST_USER.password) {
      if (isAccessible) {
        // 無障礙版本登入
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userAccount', formData.ldapAccount);
        navigate('/instruments');
      } else {
        // 一般版本登入，顯示確認對話框
        const confirmLogin = window.confirm('確定登入一般版本，若您為視障生請選擇「登入無障礙版」？');
        if (confirmLogin) {
          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('userAccount', formData.ldapAccount);
          navigate('/instruments');
        }
      }
    } else {
      alert('帳號或密碼錯誤');
    }
  };

  const handleConfirm = () => {
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('userAccount', formData.ldapAccount);
    setOpenDialog(false);
    navigate('/dashboard');
  };

  return (
    <BackgroundAnimation>
      <LoginContainer>
        <LoginBox>
          <BackgroundCircles className="bg">
            <span></span>
            <span></span>
            <span></span>
          </BackgroundCircles>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            mb: 2 
          }}>
            <Button 
              sx={{ 
                color: 'var(--primary)',
                fontSize: '0.9em'
              }}
            >
              中文 | ENGLISH
            </Button>
          </Box>

          <FormContainer>
            <Typography variant="h4" sx={{ 
              fontSize: '24px',
              fontWeight: 'bold',
              mb: 3,
              textAlign: 'center'
            }}>
              輔仁大學貴重儀器預約系統
            </Typography>
            
            <Typography sx={{ 
              mb: 3,
              textAlign: 'center',
              color: 'rgba(255,255,255,0.7)'
            }}>
              請於方框中輸入 LDAP 帳號、密碼登入
            </Typography>

            <form>
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ mb: 1 }}>帳號</Typography>
                <LoginTextField 
                  fullWidth 
                  placeholder="請輸入 LDAP 帳號"
                  value={formData.ldapAccount}
                  onChange={(e) => setFormData({ ...formData, ldapAccount: e.target.value })}
                />
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ mb: 1 }}>密碼</Typography>
                <LoginTextField 
                  fullWidth 
                  type="password"
                  placeholder="請輸入密碼"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <LoginButton 
                  fullWidth 
                  onClick={() => handleLogin(false)}
                >
                  登入系統
                  <span className="dot"></span>
                </LoginButton>
                <LoginButton 
                  fullWidth 
                  className="outlined"
                  onClick={() => handleLogin(true)}
                >
                  登入無障礙版
                  <span className="dot"></span>
                </LoginButton>
              </Box>
                    {/* 添加對話框 */}
                  <StyledDialog
                    open={openDialog}
                    onClose={() => setOpenDialog(false)}
                  >
                    <DialogTitle sx={{ 
                      textAlign: 'center',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      pb: 1
                    }}>
                      確定登入一般版本
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText sx={{ 
                        color: 'rgba(255,255,255,0.7)',
                        textAlign: 'center'
                      }}>
                        確定登入一般版本，若您為視障生請選擇「登入無障礙版」？
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ 
                      justifyContent: 'center',
                      gap: 2,
                      pb: 3,
                      pt: 2
                    }}>
                      <LoginButton onClick={handleConfirm}>
                        確定
                      </LoginButton>
                      <LoginButton 
                        className="outlined"
                        onClick={() => setOpenDialog(false)}
                      >
                        取消
                      </LoginButton>
                    </DialogActions>
                  </StyledDialog>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                gap: 2 
              }}>
                <Button 
                  color="primary" 
                  sx={{ 
                    textDecoration: 'underline',
                    color: 'var(--primary)'
                  }}
                >
                  忘記密碼？
                </Button>
                <Button 
                  color="primary"
                  sx={{ 
                    textDecoration: 'underline',
                    color: 'var(--primary)'
                  }}
                >
                  操作手冊
                </Button>
              </Box>
            </form>
          </FormContainer>
        </LoginBox>
      </LoginContainer>
    </BackgroundAnimation>
  );
};

export default Login;