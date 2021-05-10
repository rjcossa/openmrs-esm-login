![Node.js CI](https://github.com/openmrs/openmrs-esm-login/workflows/Node.js%20CI/badge.svg)

# OpenMRS ESM Login

An [OpenMRS Microfrontend](https://wiki.openmrs.org/display/projects/Frontend+-+SPA+and+Microfrontends).

## How do I use it??

openmrs-esm-login is registered as a
[core application](https://github.com/openmrs/openmrs-esm-root-config/blob/master/src/single-spa-applications/core-applications.js)
inside of openmrs-esm-root-config. This means that it will automatically activate 
whenever you are on one of the frontend routes that it controls.

## Configuration
<!-- GENERATED BY OPENMRS CONFIG CLI -->
See the [openmrs-esm-module-config docs](https://wiki.openmrs.org/display/projects/openmrs-esm-module-config)
for information about how to provide configuration files.

- chooseLocation
  - **enabled** *(default: true)*\
    Whether to show a 'Choose Location' screen after login. If true, the user will be taken to the loginSuccess URL after they choose a location.\
    *must be a boolean.*
- links
  - loginSuccess\
    Where to take the user after they are logged in.
    - **url** *(default: /home)*
    - **spa** *(default: true)*
- logo
  - **src** *(default: null)*\
    A path or URL to an image. Defaults to the OpenMRS SVG sprite.
  - **alt** *(default: Logo)*\
    Alt text, shown on hover
<!-- END OF GENERATED -->

## Contributing / Development

[Setup local development environment for OpenMRS SPA](https://wiki.openmrs.org/display/projects/Setup+local+development+environment+for+OpenMRS+SPA)
