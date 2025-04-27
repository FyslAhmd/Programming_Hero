import { useState } from "react";

const useInputField = (defaultValue) => {
    const [value,setValue] = useState(defaultValue);

    const handleFieldOnChange = (e) => {
        setValue(e.target.value);
    }
    return [value, handleFieldOnChange];
}
export default useInputField;