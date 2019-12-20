const styles = () => ({
    icon: {
      marginTop: 10,
    },
    centeredCol: {
      padding: 0,
      alignItems: "center",
      maxWidth: "275px",
  
      "@media (max-width: 599px)": {
        display: "flex",
      },
      "@media (max-width: 575px)": {
        flexBasis: "100%",
        maxWidth: "100%",
      },
      "&:not(:last-of-type)": {
        marginRight: 10,
        "@media (max-width: 400px)": {
          marginRight: 5,
        },
      },
    },
    secondDatePickerCol: {
      maxWidth: "275px",
      "@media (max-width: 575px)": {
        flexBasis: "100%",
        maxWidth: "100%",
      },
    },
    filtersAligment :{
      "text-align": "end",
      "justify-content": "flex-start",
  
      "@media (min-width: 1410px)": {
        "justify-content": "flex-end !important",
      },
    },
    maxWidth600: {
      maxWidth: 600,
    },
    data: {
      'margin-left': '110px',
      width: 100,
    },
    departmentSelect: {
      minWidth: 100,
      width: 100,
      marginRight: 10,
    },
    datePicker: {
      width: "135px !important",
      flex: 1,
    },
    mirroredIcon: {
      transform: "rotateX(180deg)",
    },
  })
  
  export default styles