ARG CYPRESS_VERSION
FROM cypress/included:${CYPRESS_VERSION}

ARG CYPRESS_VERSION
COPY binary_state.json /root/.cache/Cypress/${CYPRESS_VERSION}