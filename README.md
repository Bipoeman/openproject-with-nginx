## OpenProject Docker Compose with NGINX
### Useful link
[Backup and restoring openproject](https://www.openproject.org/docs/installation-and-operations/operation/restoring/)
[Install and configure openproject with subpath on NGINX](https://www.openproject.org/docs/installation-and-operations/installation/docker/)
[NGINX and Docker Compose network setup example](https://github.com/docker/awesome-compose/tree/master/nginx-nodejs-redis)

one thing to note is that this line is important when dealing with "external" network device
```
upstream main{
    server openproject-server.local:80;
}
```