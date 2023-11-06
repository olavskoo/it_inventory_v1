import React from "react";
import { DATA_ACTIONS } from "../../../../store/DATA";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Stack, TextInput, Button, Dropdown} from "@carbon/react";
import { Formik } from "formik";
import { PHONES_SELECTOR } from "../../../../store/DATA";
import { ITEM_SELECTOR } from "../../../../store/LOCAL_DATA";
import { LOCAL_DATA_ACTIONS } from "../../../../store/LOCAL_DATA";


export default function EditPhoneForm(){

    const departmentItems=["IT","QA","Manufacture","Training","Production","Warehouse","Lean","Manteinance","HR","Finance"]
    const brandItems=["Apple"]
    const siteItems=["BOP1","BOP2"]
    const dispatch = useDispatch();
    const ITEM = useSelector(ITEM_SELECTOR)
    const PHONE = useSelector(PHONES_SELECTOR)
console.log(PHONE.filter(item=> item.id === ITEM)[0]);
    // useEffect(()=>{

      

    // });
   
      return PHONE.filter(item=> item.id === ITEM).length > 0 ? <Formik
      initialValues={{newUserName: PHONE.filter(item=> item.id === ITEM)[0].UserName, 
        newsso: PHONE.filter(item=> item.id === ITEM)[0].sso, 
        newDepartment: PHONE.filter(item=> item.id === ITEM)[0].Department, 
        newBrand: PHONE.filter(item=> item.id === ITEM)[0].Brand, 
        newModel: PHONE.filter(item=> item.id === ITEM)[0].Model, 
        newSerialNumber: PHONE.filter(item=> item.id === ITEM)[0].SerialNumber, 
        newSite: PHONE.filter(item=> item.id === ITEM)[0].Site}}
      onSubmit={(values, {setSubmitting})=>{
        values.id = ITEM;
        dispatch(DATA_ACTIONS.editPhone(values))
        dispatch(LOCAL_DATA_ACTIONS.SetShowModal(false))
      }}
      >
         {({
             values,
             errors,
             touched,
             handleChange,
             handleBlur,
             handleSubmit,
             isSubmitting,
             setFieldValue
             /* and other goodies */
           }) => (
          <Form onSubmit={handleSubmit}>
            <Stack gap={7}>
            <TextInput
                id="UserName"
                name="newUserName"
                invalidText="Invalid error message."
                labelText="User"
                placeholder="Only enter one name and one surname"
                onChange={handleChange}
                value={values.newUserName}
                
              />
              <TextInput
                id="sso"
                name="newsso"
                invalidText="Invalid error message."
                labelText="SSO"
                placeholder="Enter SSO Example: 123456789"
                value={values.newsso}
                onChange={handleChange}
              />
              <Dropdown
              id="Department"
              name="newDepartment"
              titleText="Department"
              label="Select Department"
              items={departmentItems}
              value={values.newDepartment}
              onChange={(value)=>{setFieldValue( "newDepartment", value.selectedItem ) }}
              />
              <Dropdown
              id="Brand"
              name="newBrand"
              titleText="Brand"
              label="Select Brand"
              items={brandItems}
              value={values.newBrand}
              onChange={(value)=>{setFieldValue( "newBrand", value.selectedItem ) }}
              />
               <TextInput
                id="Model"
                name="newModel"
                invalidText="Invalid error message."
                labelText="Model"
                placeholder="Enter the Model"
                value={values.newModel}
                onChange={handleChange}
              />
              <TextInput
                id="Imei"
                name="newImei"
                invalidText="Invalid error message."
                labelText="IMEI"
                placeholder="Enter Imei"
                value={values.newImei}
                onChange={handleChange}
              />
               <Dropdown
              id="Site"
              name="newSite"
              titleText="Site"
              labelText="Site"
              label="Select Site"
              items={siteItems}
              value={values.newSite}
              onChange={(value)=>{setFieldValue( "newSite", value.selectedItem ) }}
              />
            </Stack>
            <Button type="submit" disabled={isSubmitting}>
                 Submit
               </Button>
          </Form>
           )}
          </Formik>: null
}
