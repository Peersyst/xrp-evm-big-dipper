import { NextSeo } from 'next-seo';
import useAppTranslation from '@/hooks/useAppTranslation';

import List from '@/screens/validators/components/list';
import useStyles from '@/screens/validators/styles';
import Layout from '@/xrp/components/layout';

const Validators = () => {
  const { t } = useAppTranslation('validators');
  const { classes } = useStyles();
  return (
    <>
      <NextSeo
        title={t('validators') ?? undefined}
        openGraph={{
          title: t('validators') ?? undefined,
        }}
      />
      <Layout navTitle={t('validators') ?? undefined} className={classes.root}>
        <List />
      </Layout>
    </>
  );
};

export default Validators;
