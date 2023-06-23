import ChainIcon from '@/components/ChainIcon';
import useStyles from './styles';

const XrpBaseLayout = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <ChainIcon type="logo" chainName="backgroundTop" className={classes.topImage} />
      <ChainIcon type="logo" chainName="backgroundBottom" className={classes.bottomImage} />
    </div>
  );
};

export default XrpBaseLayout;
