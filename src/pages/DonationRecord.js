import React from 'react';
import { Box, Container, Typography, Grid, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
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

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '16px',
  '& .MuiDataGrid-cell': {
    color: '#fff',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: 'rgba(120, 255, 205, 0.1)',
    color: 'var(--primary)',
    borderBottom: '2px solid var(--primary)'
  },
  '& .MuiDataGrid-footerContainer': {
    backgroundColor: 'rgba(120, 255, 205, 0.05)',
    color: '#fff',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  },
  '& .MuiTablePagination-root': {
    color: '#fff'
  },
  '& .MuiDataGrid-toolbarContainer': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: theme.spacing(2),
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px'
  },
  '& .MuiButton-root': {
    color: 'var(--primary)'
  },
  '& .MuiInputBase-root': {
    color: '#fff'
  },
  '& .MuiSvgIcon-root': {
    color: 'var(--primary)'
  }
}));

const generateDonationData = () => {
  const donationData = [
    { id: 1, name: '王小明', amount: 15000, date: '2024-01-15' },
    { id: 2, name: '仁愛醫療集團', amount: 50000, date: '2024-01-10' },
    { id: 3, name: '陳美玲', amount: 8000, date: '2024-01-05' },
    { id: 4, name: '永續發展基金會', amount: 100000, date: '2024-01-01' },
    { id: 5, name: '張大華', amount: 20000, date: '2023-12-28' },
    { id: 6, name: '誠信企業股份有限公司', amount: 80000, date: '2023-12-25' },
    { id: 7, name: '李志明', amount: 12000, date: '2023-12-20' },
    { id: 8, name: '慈善文教基金會', amount: 60000, date: '2023-12-15' },
    { id: 9, name: '吳美珠', amount: 5000, date: '2023-12-10' },
    { id: 10, name: '大愛科技有限公司', amount: 30000, date: '2023-12-05' },
    { id: 11, name: '林建國', amount: 25000, date: '2023-12-01' },
    { id: 12, name: '和平醫療財團', amount: 150000, date: '2023-11-28' },
    { id: 13, name: '黃小芳', amount: 10000, date: '2023-11-25' },
    { id: 14, name: '福祉關懷協會', amount: 45000, date: '2023-11-20' },
    { id: 15, name: '謝明德', amount: 18000, date: '2023-11-15' },
    { id: 16, name: '博愛慈善基金會', amount: 120000, date: '2023-11-10' },
    { id: 17, name: '劉家豪', amount: 7000, date: '2023-11-05' },
    { id: 18, name: '信實工業股份有限公司', amount: 90000, date: '2023-11-01' },
    { id: 19, name: '周淑華', amount: 13000, date: '2023-10-28' },
    { id: 20, name: '仁心醫療基金會', amount: 200000, date: '2023-10-25' },
    { id: 21, name: '楊志豪', amount: 16000, date: '2023-10-20' },
    { id: 22, name: '永續關懷協會', amount: 70000, date: '2023-10-15' },
    { id: 23, name: '蔡美玲', amount: 9000, date: '2023-10-10' },
    { id: 24, name: '大同慈善基金會', amount: 180000, date: '2023-10-05' },
    { id: 25, name: '鄭建華', amount: 22000, date: '2023-10-01' }
  ];
  return donationData;
};

const columns = [
  { field: 'id', headerName: '編號', width: 100 },
  { field: 'name', headerName: '捐款人', width: 350 },
  {
    field: 'amount',
    headerName: '捐款金額',
    width: 250,
    type: 'number',
    headerAlign: 'left',
    valueFormatter: (params) => {
      return `NT$ ${params.value.toLocaleString()}`;
    }
  },
  { field: 'date', headerName: '捐款日期', width: 400, type: 'date', valueGetter: (params) => new Date(params.value), align: 'right' }
];

const DonationRecord = () => {
  const rows = generateDonationData();
  const [searchText, setSearchText] = React.useState('');
  const [filteredRows, setFilteredRows] = React.useState(rows);
  
  React.useEffect(() => {
    const filtered = rows.filter(row =>
      row.name.toLowerCase().includes(searchText.toLowerCase()) ||
      row.amount.toString().includes(searchText) ||
      row.date.includes(searchText)
    );
    setFilteredRows(filtered);
  }, [searchText, rows]);
  
  const localeText = {
    MuiTablePagination: {
      labelRowsPerPage: '每頁筆數：',
      labelDisplayedRows: ({ from, to, count }) => `${from}-${to} / ${count}`
    }
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
            捐款徵信
          </Typography>
  
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
            <TextField
              placeholder="搜尋捐款資訊"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              sx={{
                width: '300px',
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  borderRadius: '50px',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                    borderRadius: '50px'
                  },
                  '&:hover fieldset': {
                    borderColor: 'var(--primary)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'var(--primary)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'var(--primary)' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
  
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <Box sx={{ height: 600, width: '100%' }}>
                <StyledDataGrid
                  rows={filteredRows}
                  columns={columns}
                  localeText={localeText}
                  getRowId={(row) => row.id}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 10,
                      },
                    },
                    sorting: {
                      sortModel: [{ field: 'date', sort: 'desc' }],
                    },
                  }}
                  pageSizeOptions={[10, 20]}
                  disableRowSelectionOnClick
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ mt: 8 }}>
          <Footer />
        </Box>
      </ScrollContainer>
    </MainLayout>
  );
};

export default DonationRecord;