#!/bin/bash
set -eo pipefail

export HOME=/var/build
if [ ! -d /var/build/nvm ]; then
  mkdir /var/build/nvm
fi
export NVM_DIR=/var/build/nvm

# Install nvm only if missing
if [ ! -s "$NVM_DIR/nvm.sh" ]; then
  wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash 2>&1 | tee /var/build/engineeringexcellence.build.log
fi
export PATH=/var/build/nvm/bin:$PATH
source $NVM_DIR/nvm.sh

# Astro 6 requires Node >=22.12.0
# NOTE: `nvm use` cannot be piped — pipes spawn subshells, PATH wouldn't persist.
nvm install 22 2>&1 | tee --append /var/build/engineeringexcellence.build.log
nvm alias default 22 2>&1 | tee --append /var/build/engineeringexcellence.build.log
nvm use 22
echo "Using node $(node --version) / npm $(npm --version)" | tee --append /var/build/engineeringexcellence.build.log

pushd /var/build
if [ -d /var/build/ee-ai ]; then
  rm -rf ee-ai
fi
git -c "core.sshCommand=ssh -i /var/build/id_rsa -F /dev/null -o StrictHostKeyChecking=no" clone git@github.com:rfkeith/ee-ai.git 2>&1 | tee --append /var/build/engineeringexcellence.build.log

pushd ee-ai
npm ci 2>&1 | tee --append /var/build/engineeringexcellence.build.log
npm run build 2>&1 | tee --append /var/build/engineeringexcellence.build.log

# Refuse to deploy a broken/empty build
if [ ! -d dist ] || [ -z "$(ls -A dist)" ]; then
  echo "ERROR: dist/ is missing or empty after build — refusing to wipe /var/www/ee" | tee --append /var/build/engineeringexcellence.build.log
  exit 1
fi

# Build succeeded — swap to live
rm -rf /var/www/ee/*
cp -rf dist/* /var/www/ee/ 2>&1 | tee --append /var/build/engineeringexcellence.build.log
