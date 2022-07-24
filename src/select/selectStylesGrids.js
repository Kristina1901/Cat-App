const customStylesGrids = {
  placeholder: () => ({
    fontFamily: 'Jost',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#8c8c8c',
    position: 'relative',
    top: '25%',
    right: '-10%',
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
    width: '97px',
    background: '#f8f8f7',
    borderRadius: '10px',
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
    left: '75%',
  }),
  option: () => ({
    fontFamily: 'Jost',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#8C8C8C',
    marginTop: '10px',
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
    right: '-50%',
    zIndex: '3',
    marginBotton: '-10px',
  }),
  menuList: () => ({
    paddingRight: '219px',
    marginTop: '-10px',
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
    right: '-5%',
  }),
};

export default customStylesGrids;
