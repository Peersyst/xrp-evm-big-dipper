import ChainIcon from '@/components/ChainIcon';
import useStyles from './styles';
import Image from 'next/image';

const XrpBaseLayout = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <ChainIcon type="logo" chainName="backgroundTop" className={classes.bgTop} />
      <ChainIcon type="logo" chainName="backgroundBottom" className={classes.bgBottom} />
    </div>
  );
};

export default XrpBaseLayout;
