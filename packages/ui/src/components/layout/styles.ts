import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    backgroundImage: 'url(/images/background.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  contentWrapper: {
    zIndex: 1,
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flex: 1,
      position: 'relative',
    },
  },
  footer: {
    [theme.breakpoints.up('lg')]: {
      position: 'relative',
      zIndex: 1299,
    },
  },
  appBarPlaceholder: {
    ...(theme.mixins.toolbar as CSSObject),
  },
  children: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    '& .main-content': {
      width: '100%',
      flex: 1,
    },
  },
  pageLayout: {
    [theme.breakpoints.up('xl')]: {
      width: '80%',
    },
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    width: '100%',
  },
  topImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    aspectRatio: '1',
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: -1,
    aspectRatio: '1/2',
  },
}));

export default useStyles;
