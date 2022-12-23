import chainConfig from '@/chainConfig';
import Name from '@/components/name';
import MsgAddLiquidity from '@/models/msg/clp/msg_add_liquidity';
import { useProfileRecoil } from '@/recoil/profiles';
import { formatNumber, formatToken } from '@/utils/format_token';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const { primaryTokenUnit } = chainConfig();

const AddLiquidity: React.FC<{ message: MsgAddLiquidity }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  const nativeAmount = formatToken(message.nativeAssetAmount, primaryTokenUnit);

  const parsedNativeAmount = `${formatNumber(
    nativeAmount.value,
    nativeAmount.exponent
  )} ${nativeAmount.displayDenom.toUpperCase()}`;

  const externalAmount = formatToken(message.externalAssetAmount, message.externalAsset.symbol);
  const parsedExternalAmount = `${formatNumber(
    externalAmount.value,
    externalAmount.exponent
  )} ${externalAmount.displayDenom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgAddLiquidity"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          nativeAssetAmount: parsedNativeAmount,
          externalAssetAmount: parsedExternalAmount,
        }}
      />
    </Typography>
  );
};

export default AddLiquidity;
