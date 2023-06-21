import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    background: '#232325',
    display: 'flex',
    flexDirection: 'column',
    '& .button': {
      color: theme.palette.custom.fonts.fontTwo,
      '&:hover': {
        cursor: 'pointer',
      },
    },
    ' & .MuiTypography-h2': {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
  label: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeMoreFooter: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${theme.palette.primary.main}`,
  },
  seeMoreButton: {
    color: theme.palette.primary.main,
    padding: theme.spacing(1, 2),
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius + 8,
    fontWeight: 600,
  },
}));

export default useStyles;
