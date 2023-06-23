import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    borderLeft: `${theme.palette.custom.blockCard.border}px solid ${theme.palette.custom.blockCard.borderColor}`,
    borderRadius: theme.shape.borderRadius + 8,
    background: theme.palette.custom.blockCard.background,
  },
  blockTitle: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    background: '#454549',
    borderRadius: `${theme.shape.borderRadius + 8}px ${theme.shape.borderRadius + 8}px 0 0`,
    flex: 2,
    padding: theme.spacing(2),
  },
  blockContent: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    padding: theme.spacing(2),
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing(4),
  },
  blockTitleText: {
    fontWeight: 600,
  },
  label: {
    color: '#a2a2a4',
  },
}));

export default useStyles;
