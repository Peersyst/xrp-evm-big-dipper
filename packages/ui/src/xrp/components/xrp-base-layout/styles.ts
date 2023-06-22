import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  topImage: {
    display: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  bottomImage: {
    display: 'absolute',
    bottom: 0,
    right: 0,
  },
  root: {
    height: '100vh',
    display: 'flex',
  },
}));

export default useStyles;
