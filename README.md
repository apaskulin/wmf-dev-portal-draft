# wmf-dev-portal-draft
Working content draft for the Wikimedia Developer Portal, available at [apaskulin.github.io/wmf-dev-portal-draft](https://apaskulin.github.io/wmf-dev-portal-draft/)

## Test changes locally
After [cloning the repo](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository), use npm to run the VuePress development server:

```
cd docs
npm install
npm run dev
```

Visit http://localhost:8080 to view the local server.

## Deploy the site

From the main project directory, run the deploy script to deploy the main branch to GitHub pages:

```
bash deploy.sh
```

If you get a `No such file` error, make sure you are in the main project directory, not in `/docs`.
