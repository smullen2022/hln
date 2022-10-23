# HLN Front-end Challenge

## Submission Instructions

- ✔ Provide your GitHub username, and we'll invite you to a project which contains the challenge.
- ⚠️Don't fork the challenge repository on GitHub or submit a pull request directly there, as that would make your solution public for
  others to see. Instead, just clone the repository and work locally on it.
- 📧 When you're done, squash your work into a single commit and use `git format-patch` to generate a patch file. Email the patch file
  to us as your challenge submission.

## HLN Challenge

The running application skeleton has instructions to guide you. Start the app with `yarn start` and follow the instructions. The synopsis is:

1. Style the main page and implement the login form.
2. Add a component to the page to show the logged in user information along with a way for the user to logout.
3. Implement the WoodWarehouse core application functionality by:
   1. Creating a form to prompt for an individual wood species and price, and provide a way to submit the new species and price for addition to the warehouse by using the `addWoodSpecies` mutation.
   2. Creating a listing of added wood species with their prices. Use the `woodPrices` query to get the stored data. Provide the ability to sort species by name and/or price. Also provide the ability to remove types from the list using the `deleteWoodPrice` mutation. As a bonus, preserve the sort state between page refreshes.

### Dependencies for Running

The base application is configured to use yarn 3.x with zero install PnP, and contains a Visual Studio Code dev container configuration. This means all base node package dependencies will already be included when you clone the repo. For the best dev experience we suggest using Visual Studio Code with the dev container so that we can more easily be assured we are running your code with all the same dependencies. You may use another IDE if you wish, and bypass the dev container, but if you do we suggest you take a look at the `.devcontainer` configs, and stick to the same version of Node.

### Notes

The back-end for this application is a simulated GraphQL endpoint that uses service workers to mock functionality. Avoid modifying the `mocks` directory since it exists to provide this simulated back-end functionality that your app will interact with. For reference, the GraphQL API schema that you'll be interfacing with is defined in `src/types/schema.graphql` and the mutations and queries you'll be using are already defined in `src/data`. You should program your API calls to access the mock GraphQL API at http://localhost:3000/graphql. The API is completely mocked using client-side service worker network request listeners in the browser, meaning you will not be able to directly navigate to the endpoint URL since it requires the React app to be loaded before it can respond to requests. Calls originating from your code to that URL will respond appropriately.

**This exercise will be judged on the use of standard coding practices (including error handling, code formatting, and parameter checking), efficiency, input validations, user experience, performance and attention to detail.**
