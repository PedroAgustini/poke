import { configureStore } from "@reduxjs/toolkit";
import changeInput from "./slices/changeInput";
import inputWelcome from "./slices/inputWelcome.slices";


export default configureStore({
    reducer: {
      input: inputWelcome,
      change: changeInput
    }
})