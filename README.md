## 1 Environment
* ubuntu v16.04
* node v10.15.3
* mongodb v4.0.9







### node installation
1. download node file
```
curl -O https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz
```

2. install node
```
xz -d node-v10.15.3-linux-x64.tar.xz
tar xvf node-v10.15.3-linux-x64.tar
sudo cp -r node-v10.15.3-linux-x64 /usr/local/share/
sudo ln /usr/local/share/node-v10.15.3-linux-x64/bin/node /usr/bin/node
sudo ln /usr/local/share/node-v10.15.3-linux-x64/bin/npm /usr/bin/npm
// test
node -v
npm -v
```

### mongodb installation
1. download mongodb deb file
```
curl -O https://repo.mongodb.org/apt/ubuntu/dists/xenial/mongodb-org/4.0/multiverse/binary-amd64/mongodb-org-server_4.0.9_amd64.deb

curl -O https://repo.mongodb.org/apt/ubuntu/dists/xenial/mongodb-org/4.0/multiverse/binary-amd64/mongodb-org-tools_4.0.9_amd64.deb

curl -O https://repo.mongodb.org/apt/ubuntu/dists/xenial/mongodb-org/4.0/multiverse/binary-amd64/mongodb-org-shell_4.0.9_amd64.deb

curl -O https://repo.mongodb.org/apt/ubuntu/dists/xenial/mongodb-org/4.0/multiverse/binary-amd64/mongodb-org-mongos_4.0.9_amd64.deb
```
2. install
```
sudo dpkg -i mongodb-org-*
sudo systemctl status mongod.service
// test
mongo
```

### apidoc installation
```
 sudo npm install apidoc -g
// pay attention to the path of apidoc installed
// /usr/local/share/node-v10.15.3-linux-x64/bin/apidoc -> /usr/local/share/node-v10.15.3-linux-x64/lib/node_modules/apidoc/bin/apidoc
+ apidoc@0.17.7
// add `apidoc` command to `scripts` of package.json
// "apidoc": "/usr/local/share/node-v10.15.3-linux-x64/bin/apidoc -i routers/"
```


