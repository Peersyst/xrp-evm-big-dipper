import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    height: '110px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: theme.palette.custom.fonts.fontFive,
    '& .MuiTypography-h1': {
      color: theme.palette.custom.fonts.fontOne,
      fontWeight: 600,
    },
    '& .label': {
      color: theme.palette.custom.fonts.fontTwo,
      fontSize: '1rem',
    },
    '& .content': {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    '& .description': {
      display: 'none',

      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
  },
}));

export default useStyles;
