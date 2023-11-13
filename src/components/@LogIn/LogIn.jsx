import React from "react";
import * as ReactDOM from 'react-dom';
import { useState, useRef } from "react";
import { Button, ModalHeader, ComposedModal, ModalBody, TextInput, Form, Stack, } from "@carbon/react";
import { LOCAL_DATA, LOCAL_DATA_ACTIONS, LOGIN_MODAL_SELECTOR, LOGED_USER_SELECTOR } from "../../store/LOCAL_DATA";
import { USERS_SELECTORS } from "../../store/DATA";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Style from "./styled"


export default function LogIn(){
    const button = useRef();
    const ShowLogin = useSelector(LOGIN_MODAL_SELECTOR)
    const LOGED_USERS = useSelector(LOGED_USER_SELECTOR)
    const USERS = useSelector(USERS_SELECTORS)
    const dispatch = useDispatch()
    const ModalStateManager = ({
      renderLauncher: LauncherContent,
      children: ModalContent
    }) => {
      const [open, setOpen] = useState(ShowLogin);
  
  
  
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
  <ModalHeader title={"Log In"} style={{fontFamily: "GE Inspira Sans"}}/>
  </Style.HeaderButton>
  <ModalBody>
    <Style.LogIn>
    <Formik
      initialValues={{sso: '', password: ''}}
      onSubmit={(values, {setSubmitting})=>{
       if(USERS.find(user => user.sso === values.sso) && USERS.find(user => user.password === values.password)){
        dispatch(LOCAL_DATA_ACTIONS.setLogedUser(values))
        dispatch(LOCAL_DATA_ACTIONS.setLogInModal(false))
       }else{
        alert('Usuario incorrecto')
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
                labelText="SSO"
                onChange={handleChange}
                value={values.sso}
              />
            <TextInput
                id="password"
                labelText="Password"
                type="password"
                onChange={handleChange}
                value={values.password}
              />
            </Stack>
            <div style={{color: "#f4f4f4"}}>a</div>
            <Button type="submit" >
                 Submit
               </Button>
          </Form>
           )}
          </Formik>
    </Style.LogIn>
        
  </ModalBody>
  
  </ComposedModal>}
  </ModalStateManager>;
}