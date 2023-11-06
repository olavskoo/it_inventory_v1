import React from "react";
import { Formik } from "formik";
import { DATA_ACTIONS } from "../../../../store/DATA";
import { useDispatch } from "react-redux";
import { Form, Stack, TextInput, Button, Dropdown} from "@carbon/react";

export default function LaptopForm() {

    const departmentItems=["IT","QA","Manufacture","Training","Production","Warehouse","Lean","Manteinance","HR","Finance"]
    const brandItems=["DELL","HP","Apple"]
    const siteItems=["BOP1","BOP2"]
    const dispatch = useDispatch();
    
    
      return(<>
      <Formik
      initialValues={{id: '', UserName: '', sso: '', Department: '', Brand: '', Model: '', SerialNumber: '', Site: ''}}
      onSubmit={(values, {setSubmitting})=>{
        dispatch(DATA_ACTIONS.addLaptop(values))
      }}
      >
         {({
             values,
             handleChange,
             handleSubmit,
             isSubmitting,
             setFieldValue
             /* and other goodies */
           }) => (
          <Form onSubmit={handleSubmit}>
            <Stack gap={7}>
            <TextInput
                id="id"
                invalidText="Invalid error message."
                labelText="User"
                placeholder="Only enter one name and one surname"
                onChange={handleChange}
                value={values.id}
              />
            <TextInput
                id="UserName"
                invalidText="Invalid error message."
                labelText="User"
                placeholder="Only enter one name and one surname"
                onChange={handleChange}
                value={values.UserName}
              />
              <TextInput
                id="sso"
                invalidText="Invalid error message."
                labelText="SSO"
                placeholder="Enter SSO Example: 123456789"
                value={values.sso}
                onChange={handleChange}
              />
              <Dropdown
              id="Department"
              titleText="Department"
              label="Select Department"
              items={departmentItems}
              value={values.Department}
              onChange={(value)=>{setFieldValue( "Department", value.selectedItem ) }}
              />
              <Dropdown
              id="Brand"
              titleText="Brand"
              label="Select Brand"
              items={brandItems}
              value={values.Brand}
              onChange={(value)=>{setFieldValue( "Brand", value.selectedItem ) }}
              />
               <TextInput
                helperText="Enter the Model"
                id="Model"
                invalidText="Invalid error message."
                labelText="Model"
                placeholder="Enter the Model"
                value={values.Model}
                onChange={handleChange}
              />
              <TextInput
                helperText="Enter the service tag of the PC"
                id="SerialNumber"
                invalidText="Invalid error message."
                labelText="Serial Number"
                placeholder="Enter Serial Number"
                value={values.SerialNumber}
                onChange={handleChange}
              />
               <Dropdown
              id="Site"
              titleText="Site"
              labelText="Site"
              label="Select Site"
              items={siteItems}
              value={values.Site}
              onChange={(value)=>{setFieldValue( "Site", value.selectedItem ) }}
              />
            </Stack>
            <Button type="submit" disabled={isSubmitting}>
                 Submit
               </Button>
          </Form>
           )}
          </Formik>
      </>);
    }
    