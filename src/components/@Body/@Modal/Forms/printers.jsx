import React from "react";
import { Formik } from "formik";
import { DATA_ACTIONS } from "../../../../store/DATA";
import { LOCAL_DATA_ACTIONS } from "../../../../store/LOCAL_DATA";
import { useDispatch } from "react-redux";
import { Form, Stack, TextInput, Button, Dropdown} from "@carbon/react";

export default function PrinterForm() {

    const brandItems=["Zebra","Sato"]
    const siteItems=["BOP1","BOP2"]
    const dispatch = useDispatch();
    
    
      return(<>
      <Formik
      initialValues={{id: '', Name: '', AssetNumber: '', SerialNumber: '', Brand: '', Model: '', Ip: '', Area: '', Site:''}}
      onSubmit={(values, {setSubmitting})=>{
        dispatch(DATA_ACTIONS.addPrinter(values))
        dispatch(LOCAL_DATA_ACTIONS.setModal(false))
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
            <Stack gap={2}>
            {/* <TextInput
                id="id"
                invalidText="Invalid error message."
                labelText="User"
                placeholder="Only enter one name and one surname"
                onChange={handleChange}
                value={values.id}
              /> */}
            <TextInput
                id="Name"
                invalidText="Invalid error message."
                labelText="Printer Name"
                placeholder="Enter printer name"
                onChange={handleChange}
                value={values.Name}
              />
              <TextInput
                id="AssetNumber"
                invalidText="Invalid error message."
                labelText="Asset Number"
                placeholder="Enter Asset Number Example: Z-123"
                value={values.AssetNumber}
                onChange={handleChange}
              />
              <TextInput
                id="SerialNumber"
                invalidText="Invalid error message."
                labelText="Serial Number"
                placeholder="Enter Serial Number Example: 71J123"
                value={values.SerialNumber}
                onChange={handleChange}
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
                id="Model"
                invalidText="Invalid error message."
                labelText="Model"
                placeholder="Enter the Model"
                value={values.Model}
                onChange={handleChange}
              />
              <TextInput
                id="Ip"
                invalidText="Invalid error message."
                labelText="IP"
                placeholder="Enter IP"
                value={values.Ip}
                onChange={handleChange}
              />
              <TextInput
                id="Area"
                invalidText="Invalid error message."
                labelText="Area"
                placeholder="Where is the printer located?"
                value={values.Area}
                onChange={handleChange}
              />
            <Dropdown
              id="Site"
              direction="top"
              titleText="Site"
              labelText="Site"
              label="Select Site"
              items={siteItems}
              value={values.Site}
              onChange={(value)=>{setFieldValue( "Site", value.selectedItem ) }}
              />
            </Stack>
            <div style={{color: "#f4f4f4"}}>a</div>
            <Button style={{backgroundColor: "#0e0e52"}} onClick={()=> dispatch(LOCAL_DATA_ACTIONS.setModal(false))}>
                 Cancel
               </Button>
            <Button type="submit" disabled={isSubmitting}>
                 Submit
               </Button>
          </Form>
           )}
          </Formik>
      </>);
    }
    