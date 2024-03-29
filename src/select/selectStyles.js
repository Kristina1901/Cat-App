const customStyles = {
  placeholder: () => ({
    fontFamily: 'Jost',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#8c8c8c',
    position: 'relative',
    top: '25%',
  }),
  container: () => ({
    fontFamily: 'Jost',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#8c8c8c',
    height: '36px',
    position: 'relative',
    marginLeft: '10px',
    background: '#f8f8f7',
    borderRadius: '10px',
    paddingLeft: '10px',
    width: '196px',
    paddingRight: '16px',
    zIndex: '9',
    border: '2px solid #FFFFFF',
    '&:hover': {
      border: '2px solid #FBE0DC',
    },
  }),
  dropdownIndicator: () => ({
    position: 'absolute',
    width: '12px',
    height: '8px',
    top: '30%',
    left: '85%',
  }),
  option: () => ({
    fontFamily: 'Jost',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#8C8C8C',
    marginBottom: '10px',
  }),
  input: () => ({
    display: 'none',
  }),
  control: () => ({
    border: 'none',
  }),
  menu: () => ({
    background: '#FFFFFF',
    borderRadius: '30px',
    paddingTop: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingBottom: '18px',
    zIndex: '1',
    marginBottom: '-10px',
    width: '260px',
  }),
  menuList: () => ({
    overflowY: 'auto',
    position: 'relative',
    height: '262px',
  }),

  singleValue: () => ({
    fontFamily: 'Jost',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#8c8c8c',
    position: 'relative',
    top: '25%',
  }),
};

export default customStyles;
