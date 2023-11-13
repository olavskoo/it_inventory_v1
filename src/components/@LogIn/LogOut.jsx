import React from "react";
import * as ReactDOM from 'react-dom';
import { useState, useRef } from "react";
import { Button, ModalHeader, ComposedModal, ModalBody, TextInput, Form, Stack, } from "@carbon/react";
import { LOCAL_DATA_ACTIONS } from "../../store/LOCAL_DATA";
import { Formik } from "formik";
import { useDispatch} from "react-redux";
import * as Style from "./styled"


export default function LogOut(){
    const button = useRef();
    const dispatch = useDispatch()
    const ModalStateManager = ({
      renderLauncher: LauncherContent,
      children: ModalContent
    }) => {
      const [open, setOpen] = useState(false);
  
  
  
      return <>
          {!ModalContent || typeof document === 'undefined' ? null : ReactDOM.createPortal(<ModalContent open={open} setOpen={setOpen} />, document.body)}
          {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
  </>;
    };
    return <ModalStateManager renderLauncher={({
        setOpen
      }) => <Button style={{background: "transparent"}} ref={button} onClick={() => setOpen(true)}>    
                <h4><i class="fa-solid fa-user-xmark"></i></h4>
                </Button>
    }> 
        {({
        open,
        setOpen
      }) => <ComposedModal preventCloseOnClickOutside open={open} onClose={() => {
        setOpen(false);
      }} launcherButtonRef={button}>
  <Style.HeaderButton>
  <ModalHeader title={"Are you sure wanna log out?"} style={{fontFamily: "GE Inspira Sans"}}/>
  </Style.HeaderButton>
  <ModalBody>

    <Style.LogIn>
    <Formik
      initialValues={{sso: '', password: ''}}
      onSubmit={(values, {setSubmitting})=>{
        dispatch(LOCAL_DATA_ACTIONS.setLogedUser(values))
        dispatch(LOCAL_DATA_ACTIONS.setLogInModal(true))
      }}
      >
         {({
             handleSubmit,
           }) => (
          <Form onSubmit={handleSubmit}>
            <div style={{color: "#f4f4f4"}}>a</div>
            <Button style={{backgroundColor: "#0e0e52"}} onClick={()=>setOpen(false)}>
                 Cancel
               </Button>
            <Button type="submit">
                 Log Out
               </Button>
          </Form>
           )}
          </Formik>
    </Style.LogIn>
        
  </ModalBody>
  
  </ComposedModal>}
  </ModalStateManager>;
}