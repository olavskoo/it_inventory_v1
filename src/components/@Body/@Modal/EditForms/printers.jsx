import React from "react";
import { DATA_ACTIONS } from "../../../../store/DATA";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Stack, TextInput, Button, Dropdown} from "@carbon/react";
import { Formik } from "formik";
import { PRINTERS_SELECTOR } from "../../../../store/DATA";
import { ITEM_SELECTOR } from "../../../../store/LOCAL_DATA";
import { LOCAL_DATA_ACTIONS } from "../../../../store/LOCAL_DATA";


export default function EditPrinterForm(){

    const brandItems=["ZEBRA","SATO"]
    const siteItems=["BOP1","BOP2"]
    const dispatch = useDispatch();
    const ITEM = useSelector(ITEM_SELECTOR)
    const PRINTER = useSelector(PRINTERS_SELECTOR)
console.log(PRINTER.filter(item=> item.id === ITEM)[0]);
    // useEffect(()=>{

      

    // });
   
      return PRINTER.filter(item=> item.id === ITEM).length > 0 ? <Formik
      initialValues={{newName: PRINTER.filter(item=> item.id === ITEM)[0].Name, 
        newAssetNumber: PRINTER.filter(item=> item.id === ITEM)[0].AssetNumber, 
        newSerialNumber: PRINTER.filter(item=> item.id === ITEM)[0].SerialNumber, 
        newBrand: PRINTER.filter(item=> item.id === ITEM)[0].Brand, 
        newModel: PRINTER.filter(item=> item.id === ITEM)[0].Model, 
        newIp: PRINTER.filter(item=> item.id === ITEM)[0].Ip, 
        newArea: PRINTER.filter(item=> item.id === ITEM)[0].Area, 
        newSite: PRINTER.filter(item=> item.id === ITEM)[0].Site}}
      onSubmit={(values, {setSubmitting})=>{
        values.id = ITEM;
        dispatch(DATA_ACTIONS.editPrinter(values))
        dispatch(LOCAL_DATA_ACTIONS.SetShowModal(false))
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
                id="newName"
                invalidText="Invalid error message."
                labelText="Printer Name"
                placeholder="Enter printer name"
                onChange={handleChange}
                value={values.newName}
              />
              <TextInput
                id="newAssetNumber"
                invalidText="Invalid error message."
                labelText="Asset Number"
                placeholder="Enter Asset Number Example: Z-123"
                value={values.newAssetNumber}
                onChange={handleChange}
              />
              <TextInput
                id="newSerialNumber"
                invalidText="Invalid error message."
                labelText="Serial Number"
                placeholder="Enter Serial Number Example: 71J123"
                value={values.newSerialNumber}
                onChange={handleChange}
              />
              <Dropdown
              id="newBrand"
              titleText="Brand"
              label="Select Brand"
              items={brandItems}
              value={values.Brand}
              onChange={(value)=>{setFieldValue( "newBrand", value.selectedItem ) }}
              />
               <TextInput
                helperText="Enter the Model"
                id="newModel"
                invalidText="Invalid error message."
                labelText="Model"
                placeholder="Enter the Model"
                value={values.newModel}
                onChange={handleChange}
              />
              <TextInput
                helperText="Enter the IP of the printer"
                id="newIp"
                invalidText="Invalid error message."
                labelText="IP"
                placeholder="Enter IP"
                value={values.newIp}
                onChange={handleChange}
              />
              <TextInput
                helperText="Enter the Area of the printer"
                id="newArea"
                invalidText="Invalid error message."
                labelText="Area"
                placeholder="Where is the printer located?"
                value={values.newArea}
                onChange={handleChange}
              />
            <Dropdown
              id="newSite"
              titleText="Site"
              labelText="Site"
              label="Select Site"
              items={siteItems}
              value={values.Site}
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
