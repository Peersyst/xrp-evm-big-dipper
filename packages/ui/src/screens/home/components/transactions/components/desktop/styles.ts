import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    overflow: 'auto',
  },
  table: {
    '& .MuiTableBody-root': {
      '& .MuiTableCell-root': {
        whiteSpace: 'nowrap',
        height: 'auto',
      },
    },
  },
  link: {
    color: `${theme.palette.custom.link.color} !important`,
  },
  row: {
    margin: theme.spacing(2),
    borderLeft: `${theme.palette.custom.blockCard.border}px solid ${theme.palette.custom.blockCard.borderColor}`,
    borderRadius: theme.shape.borderRadius + 8,
  },
}));

export default useStyles;
