# infra

VPS deploy artifacts.

## `doBuild.sh`

The build script that runs on the VPS to publish the site. Triggered remotely via SSH. See [CLAUDE.md → Deploy](../CLAUDE.md#deploy) for the full deploy command and the script's safety properties.

This file is the **canonical source of truth**. The copy at `/var/www/webhooks/doBuild.sh` on the VPS must be kept in sync with this one.

### Syncing the VPS copy after a change

After editing `doBuild.sh` here, push the change up and copy it to the VPS:

```sh
scp -i ~/.ssh/vultr infra/doBuild.sh root@fireandsmoke.life:/var/www/webhooks/doBuild.sh
ssh -i ~/.ssh/vultr root@fireandsmoke.life "chmod +x /var/www/webhooks/doBuild.sh"
```

A future improvement would be to symlink `/var/www/webhooks/doBuild.sh` to a persistent checkout of this repo on the VPS — making the sync automatic on `git pull`. Worth doing once you're confident the script is stable; for now, manual `scp` is simpler.

### Recovery

If the VPS is ever rebuilt and `/var/www/webhooks/doBuild.sh` is missing, recreate it from this directory:

```sh
scp -i ~/.ssh/vultr infra/doBuild.sh root@fireandsmoke.life:/var/www/webhooks/doBuild.sh
ssh -i ~/.ssh/vultr root@fireandsmoke.life "chmod +x /var/www/webhooks/doBuild.sh"
```

(Same command — the absence of the file isn't special.)
