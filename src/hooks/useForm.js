import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formValues, setFormValues] = useState(initialValue);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onClearForm = () => {
    setFormValues(initialValue);
  };

  // FORMA 2 ---> RETORNAR TODOS LOS INPUTS DIRECTAMENTE

  //   return {
  //     formValues,
  //     onInputChange,
  //     onClearForm,
  //   };

  return {
    ...formValues,
    onInputChange,
    onClearForm,
  };
};
