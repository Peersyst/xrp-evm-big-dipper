import Layout from '@/xrp/components/layout';
import Blocks from '@/screens/home/components/blocks';
import Consensus from '@/screens/home/components/consensus';
import DataBlocks from '@/xrp/components/data-blocks';
import Hero from '@/screens/home/components/hero';
import Tokenomics from '@/screens/home/components/tokenomics';
import Transactions from '@/screens/home/components/transactions';
import useStyles from '@/screens/home/styles';
import XrpBaseLayout from '@/xrp/components/xrp-base-layout';

const Home = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.main}>
      <XrpBaseLayout />
      <Layout className={classes.root}>
        <DataBlocks className={classes.dataBlocks} />
        <Hero className={classes.hero} />
        <Tokenomics className={classes.tokenomics} />
        <Consensus className={classes.consensus} />
        <Blocks className={classes.blocks} />
        <Transactions className={classes.transactions} />
      </Layout>
    </div>
  );
};

export default Home;
