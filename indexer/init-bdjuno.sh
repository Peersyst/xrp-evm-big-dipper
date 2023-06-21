#! /bin/bash

cd /bdjuno/.bdjuno/
rm genesis.json | true
wget https://raw.githubusercontent.com/Peersyst/xrp-evm-archive/main/poa-devnet/genesis.json
bdjuno parse genesis-file --home /bdjuno/.bdjuno
bdjuno start --home /bdjuno/.bdjuno
