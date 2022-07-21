const typeimg = {
  placeholder: () => ({
    fontFamily: 'Jost',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#1D1D1D',
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
    background: '#FFFFFF',
    borderRadius: '10px',
    paddingLeft: '10px',
    width: '196px',
    paddingRight: '80px',
    zIndex: '12',
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
    marginTop: '5px',
    width: '280px',
    paddingBottom: '18px',
    position: 'absolute',
    zIndex: '5',
    left: 0,
  }),
  menuList: () => ({
    marginBottom: '-10px',
  }),
  singleValue: () => ({
    fontFamily: 'Jost',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#1D1D1D',
    position: 'relative',
    top: '25%',
  }),
};

export default typeimg;
