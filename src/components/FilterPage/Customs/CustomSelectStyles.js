const customSelectStyle={
    control: (base, state) => ({
        ...base,
   boxShadow: state.isFocused ? "0 0 0 0.07vw orange":'none',
   height:'3vw',
   width:'63vw',
  //  margin:'0 auto',
   borderColor: state.isFocused ?'orange':'grey',
   '&:hover': {
    borderColor: 'orange'
 }
    }),
    menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding:0
      }),
      option: (base,state) => ({
        ...base,
        // kill the white space on first and last option
       backgroundColor: state.isFocused ? "rgb(255, 165, 0,0.7)" :""
      }),
  };

  const customModelSelectStyle={
    control: (base, state) => ({
        ...base,
   boxShadow: state.isFocused ? "0 0 0 0.07vw orange":'none',
   height:'3vw',
   width:'30vw',
  //  margin:'0 auto',
   borderColor: state.isFocused ?'orange':'grey',
   '&:hover': {
    borderColor: 'orange'
 }
    }),
    menu:base=>({
      ...base,
      width:'30vw'
    })
    ,
    menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding:0
        // width:'30vw'
      }),
      option: (base,state) => ({
        ...base,
        // kill the white space on first and last option
       backgroundColor: state.isFocused ? "rgb(255, 165, 0,0.7)" :""
      }),
  };

  export  {customSelectStyle,customModelSelectStyle}