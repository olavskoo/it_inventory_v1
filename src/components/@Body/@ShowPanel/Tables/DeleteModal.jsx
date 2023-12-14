import React from "react";
import * as ReactDOM from 'react-dom';
import { useState, useRef } from "react";
import { Button, ModalHeader, ComposedModal, ModalBody, TextInput, Form, Stack, } from "@carbon/react";
import { LOCAL_DATA_ACTIONS, DELETE_MODAL_SELECTOR, ROW, LOGED_USER_SELECTOR} from "../../../../store/LOCAL_DATA";
import { DATA_ACTIONS } from "../../../../store/DATA";
import { USERS_SELECTORS } from "../../../../store/DATA";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Style from "./styled"


export default function DeleteModal(){
    const button = useRef();
    const dispatch = useDispatch()
    const deleteModal = useSelector(DELETE_MODAL_SELECTOR)
    const USERS = useSelector(USERS_SELECTORS)
    const row = useSelector(ROW)
    const loged_user = useSelector(LOGED_USER_SELECTOR)
    const ModalStateManager = ({
      renderLauncher: LauncherContent,
      children: ModalContent
    }) => {
      const [open, setOpen] = useState(deleteModal);
  
  
  
      return <>
          {!ModalContent || typeof document === 'undefined' ? null : ReactDOM.createPortal(<ModalContent open={open} setOpen={setOpen} />, document.body)}
          {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
  </>;
    };
    return <ModalStateManager> 
        {({
        open,
        setOpen
      }) => <ComposedModal preventCloseOnClickOutside open={open} onClose={() => {
        setOpen(false);
      }} launcherButtonRef={button}>
  <Style.HeaderButton>      
  <ModalHeader title={"Delete"} style={{fontFamily: "GE Inspira Sans"}}/>
  </Style.HeaderButton>
  <ModalBody>
    <Style.Delete>
    <Formik
      initialValues={{sso: ''}}
      onSubmit={(values, {setSubmitting})=>{
       if(USERS.find(user => loged_user.sso === values.sso)){
        dispatch(DATA_ACTIONS.deleteLaptop(row))
        dispatch(LOCAL_DATA_ACTIONS.setDeleteModal(false))
       }else{
        alert('Incorrect User')
       }  
       
      }}
      >
         {({
             values,
             handleChange,
             handleSubmit,
             isSubmitting,
             /* and other goodies */
           }) => (
          <Form onSubmit={handleSubmit}>
            <Stack gap={2}>
            <TextInput
                id="sso"
                labelText="Enter your SSO to confirm"
                onChange={handleChange}
                value={values.sso}
              />
            </Stack>
            <div style={{color: "#f4f4f4"}}>a</div>
            <Button style={{backgroundColor: "#0e0e52"}} onClick={()=>dispatch(LOCAL_DATA_ACTIONS.setDeleteModal(false))}>
                 Cancel
               </Button>
            <Button type="submit" >
                 Delete
               </Button>
          </Form>
           )}
          </Formik>    
          </Style.Delete>
  </ModalBody>
  
  </ComposedModal>}
  </ModalStateManager>;
}