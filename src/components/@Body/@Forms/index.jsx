import React from "react";
import * as Styled from "./styled";
import {ModalWrapper, Form, Stack, TextInput, TextArea, Select,SelectItem, Button, Dropdown} from "@carbon/react";

export function LaptopForm() {

const departmentItems=["IT","QA","Manufacture","Training","Production","Warehouse","Lean","Manteinance","HR","Finance"]
const brandItems=["DELL","HP","Apple"]
const siteItems=["BOP1","BOP2"]


  return(<>
      <Form>
        <Stack gap={7}>
        <TextInput
            helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
            id="Username"
            invalidText="Invalid error message."
            labelText="User"
            placeholder="Name and surname"
          />
          <TextInput
            helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
            id="Sso"
            invalidText="Invalid error message."
            labelText="SSO"
            placeholder="Enter SSO"
          />
          <Dropdown
          id="Department"
          label="Select Department"
          items={departmentItems}
          />
          <Dropdown
          id="Department"
          label="Select Brand"
          items={brandItems}
          />
          <TextInput
            helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
            id="SerialNumber"
            invalidText="Invalid error message."
            labelText="Serial Number"
            placeholder="Enter Serial Number"
          />
           <Dropdown
          id="Site"
          label="Select Site"
          items={siteItems}
          />
        </Stack>
      </Form>
  </>);
}
