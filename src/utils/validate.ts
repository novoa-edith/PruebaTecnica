const validateRFC = (value: string) => {
    const regex =
      /^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/g;
    return regex.test(value);
  };

export {
    validateRFC
};