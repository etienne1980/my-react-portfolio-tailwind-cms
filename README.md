# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# add webHook in contentful

1. go to netlify (hosting platform) -> build and deploy -> continuous deployment -> build hooks (unique url we can use to trigger the build of the site )
2. copy the url
3. go to contenful -> settings -> webhook -> add webhooks -> paste the url to the url field

now, each time the data are modified in contentful, the webhook is triggered and the application will sync automatically

4. save
