import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';
import LogoutIcon from '@mui/icons-material/Logout';
import "../../styles/gateStyle/gate.css"
import Scalemodal from './Scaleaddmodal';
import TotalMileQuan from './TotalMileQuan';
import ScaleEditModal from './scaleEditModal';
const Scaletable = () => {      
      const rows = [
        {name:'محمد عبد السلام',calories: '15647 / 35569' , fat:'روسي', carbs:'800 كليو',protein: '3 كيلو' },
        {name:'محمد عبد السلام',calories: '15647 / 35569' , fat:'روسي', carbs:'800 كليو',protein: '3 كيلو' },
        {name:'محمد عبد السلام',calories: '15647 / 35569' , fat:'روسي', carbs:'800 كليو',protein: '3 كيلو' },
      ];
  return (
    <>
    <div className='container my-4 gate__table'>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell align="center">اضافة بيان</TableCell>
                <TableCell align="center">اسم المورد / المندوب</TableCell>
                <TableCell align="center">رقم السيارة / نوعها</TableCell>
                <TableCell align="center">نوع القمح </TableCell>
                <TableCell align="center"> الوزن الصافى</TableCell>
                <TableCell align="center">العجز </TableCell>
                <TableCell align="center">الحالة </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row,index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="center" className='special__field'>
                     <Scalemodal/>
                    </TableCell>
                    <TableCell  align="center">
                    {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                    <TableCell align="center">
                    <Button variant="contained"color="success" endIcon={<CarRentalIcon/>}>
                        <span className='mx-2'>دخول</span>
                    </Button>
                    {/* <Button variant="contained" color="warning" endIcon={<EditIcon/>} className='mx-3 my-2'>
                        <span className='mx-2'>تعديل</span>
                     </Button> */}
                        <ScaleEditModal/>
                    <Button variant="contained" color='error' endIcon={<LogoutIcon/>}>
                        <span className='mx-2'>خروج</span>
                    </Button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
    </TableContainer>
                <TotalMileQuan/>
          </div>
    </>
  )
}

export default Scaletable