import React from "react";
import * as Styled from "./styled";
import {ModalWrapper, Form, Stack, TextInput, TextArea, Select,SelectItem, Button} from "@carbon/react";

export function LaptopForm() {

  return(<>
      <Form>
        <Stack gap={7}>
          <TextInput
            helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
            id="test2"
            invalidText="Invalid error message."
            labelText="SSO"
            placeholder="Optional placeholder text"
          />
          <TextArea
            cols={50}
            helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
            id="test5"
            invalidText="Invalid error message."
            labelText="Text area label"
            placeholder="Optional placeholder text"
            rows={4}
          />
          <Select
            defaultValue="placeholder-item"
            id="select-1"
            invalidText="This is an invalid error message."
            labelText="Select"
          >
            <SelectItem text="Option 1" value="option-1" />
            <SelectItem text="Option 2" value="option-2" />
            <SelectItem text="Option 3" value="option-3" />
          </Select>
        </Stack>
      </Form>
  </>);
}
