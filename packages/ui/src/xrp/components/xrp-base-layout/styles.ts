import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {},
  topImage: {
    display: 'absolute',
    top: 0,
    left: 0,
  },
  bottomImage: {
    display: 'absolute',
    bottom: 0,
    right: 0,
  },
}));

export default useStyles;
