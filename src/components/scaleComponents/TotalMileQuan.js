import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../../styles/scaleStyle/scale.css"
import { useState } from 'react';
const TotalMileQuan = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='mile__Accord my-2'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='mile__summary'
        >
        <div className='source__quantity__summary'>
             <Typography >اسم الجهة </Typography>
             <Typography > مطاحن بنها الجديده</Typography>
        </div>
        <div className='source__quantity__summary mx-3'>
             <Typography > الكمية المتبقية :</Typography>
             <Typography >1500</Typography>
        </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default TotalMileQuan