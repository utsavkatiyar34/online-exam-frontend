import * as React from 'react';
import '../styles/Forms.css';
import '../styles/Profile.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../styles/Forms.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addtestError, addtestLoading, addtestSuccess } from '../../redux/staff/Actions';

const style = {
  position: 'absolute',
  top: '15%',
  left: '50%',
  transform: 'translate(-50%)',
  width:'maxContent',
  bgcolor: 'background.paper',
  border: '1px solid #28a745;',
  boxShadow: 24,
  textAlign:'center',
  p: 4,
};

export default function Addquestion({course_id, name}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [tname, setTname]=React.useState("");
  let dispatch=useDispatch();
  let addTest=()=>{
 if(!tname){
    alert("Please enter Name.")
 }
 else{
    dispatch(addtestLoading());
    axios({
        method:"post",
        url:"http://localhost:8000/courseapi/test/",
        data:{
            Test_name:tname,
            Course:course_id
        }
    }).then((response)=>{
          dispatch(addtestSuccess());
    }).catch((error)=>{
           console.log(error);
           dispatch(addtestError());
    })
 }
}
  return (
    <div>
      <button onClick={handleOpen} className='profile-button' style={{width:"100%"}}>Add Question</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <h3 style={{color:"#28a745",fontSize:"2vw",fontWeight:"400",textAlign:"center"}}>Add Question for {name}</h3>
         <p className='form-label'>Question</p>
         <textarea rows = "3" className='course-form-textfield' placeholder="500 characters maximum...." type='text'/>
         <input id="email" className='course-form-input'
          style={{marginLeft:"auto",marginRight:"auto"}} type='text'
          placeholder='Opton 1...'
          />
          <input id="email" className='course-form-input'
          style={{marginLeft:"auto",marginRight:"auto"}} type='text'
          placeholder='Opton 2...'
          />
          <input id="email" className='course-form-input'
          style={{marginLeft:"auto",marginRight:"auto"}} type='text'
          placeholder='Opton 3...'
          />
          <input id="email" className='course-form-input'
          style={{marginLeft:"auto",marginRight:"auto"}} type='text'
          placeholder='Opton 4...'
          />
          <input id="email" className='course-form-input'
          style={{marginLeft:"auto",marginRight:"auto"}} type='text'
          placeholder='Correct answer'
          />
         <button className='form-button' onClick={addTest}>Add</button>
        </Box>
      </Modal>
    </div>
  );
}