# wmf-dev-portal-draft
Working content draft for the Wikimedia Developer Portal

## Test changes locally
After [cloning the repo](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository), use npm to run the VuePress development server:

```
cd docs
npm install
npm run dev
```

Visit http://localhost:8080 to view the local server.

## Deploy the site

From the docs directory, run:

```
npm run build
```

Once the build files are generated, commit the changes to the main branch.

Once you've built the site and committed your changes, deploy the site to GitHub pages by running:

```
bash deploy.sh
```
