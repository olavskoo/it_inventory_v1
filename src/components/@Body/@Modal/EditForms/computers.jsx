import React from "react";
import { DATA_ACTIONS } from "../../../../store/DATA";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Stack, TextInput, Button, Dropdown} from "@carbon/react";
import { Formik } from "formik";
import { LAPTOPS_SELECTOR } from "../../../../store/DATA";
import { ITEM_SELECTOR } from "../../../../store/LOCAL_DATA";


export default function EditLaptopForm(){

    const departmentItems=["IT","QA","Manufacture","Training","Production","Warehouse","Lean","Manteinance","HR","Finance"]
    const brandItems=["DELL","HP","Apple"]
    const siteItems=["BOP1","BOP2"]
    const dispatch = useDispatch();
    const ITEM = useSelector(ITEM_SELECTOR)
    const LAPTOP = useSelector(LAPTOPS_SELECTOR)
console.log(LAPTOP.filter(item=> item.id === ITEM)[0]);
    // useEffect(()=>{

      

    // });
   
      return LAPTOP.filter(item=> item.id === ITEM).length > 0 ? <Formik
      initialValues={{newUserName: LAPTOP.filter(item=> item.id === ITEM)[0].UserName, newsso: '', newDepartment: '', newBrand: '', newModel: '', newSerialNumber: '', newSite: ''}}
      onSubmit={(values, {setSubmitting})=>{
        values.id = ITEM;
        dispatch(DATA_ACTIONS.editLaptop(values))
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
              onChange={(value)=>{setFieldValue( "Department", value.selectedItem ) }}
              />
              <Dropdown
              id="Brand"
              name="newBrand"
              titleText="Brand"
              label="Select Brand"
              items={brandItems}
              value={values.newBrand}
              onChange={(value)=>{setFieldValue( "Brand", value.selectedItem ) }}
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
                id="SerialNumber"
                name="newSerialNumber"
                invalidText="Invalid error message."
                labelText="Serial Number"
                placeholder="Enter Serial Number"
                value={values.newSerialNumber}
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
              onChange={(value)=>{setFieldValue( "Site", value.selectedItem ) }}
              />
            </Stack>
            <Button type="submit" disabled={isSubmitting}>
                 Submit
               </Button>
          </Form>
           )}
          </Formik>: null
}
