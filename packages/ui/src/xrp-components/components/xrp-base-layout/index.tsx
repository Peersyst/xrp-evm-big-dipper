import useStyles from './styles';

const XrpBaseLayout = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <img src="/images/bg_top.png" alt="bg-top" className={classes.topImage} />
      <img src="/images/bg_bottom.png" alt="bg-top" className={classes.bottomImage} />
    </div>
  );
};

export default XrpBaseLayout;
