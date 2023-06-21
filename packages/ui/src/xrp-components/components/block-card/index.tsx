import Typography from '@mui/material/Typography';
import { ItemType } from '@/screens/blocks/types';
import useAppTranslation from '@/hooks/useAppTranslation';
import Timestamp from '@/components/Timestamp';
import numeral from 'numeral';
import useStyles from './styles';

type BlockCardProps = {
  item: ItemType;
};

const BlockCard = ({ item }: ComponentDefault & BlockCardProps) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('transactions');

  return (
    <div className={classes.root}>
      <div className={classes.blockTitle}>
        <Typography variant="body2" className={classes.blockTitleText}>
          {`${t('block')} ${numeral(item.height).format('0,0')}`}
        </Typography>
      </div>
      <div className={classes.blockContent}>
        <Typography variant="body2" className={classes.label}>
          {' '}
          {`${t('hash')}: ${item.hash}`}
        </Typography>
        <div className={classes.row}>
          <Typography variant="h4" className={classes.label}>
            {`${numeral(item.txs).format('0,0')} ${t('transactions')}`}
          </Typography>
          <Timestamp timestamp={item.timestamp} />
        </div>
      </div>
    </div>
  );
};

export default BlockCard;
