/// <reference types="cypress" />

describe("user-follow-happypath", () => {
  beforeEach(() => {
    cy.viewport(1440, 960);
  });
  // it("is welcomed to the home page!", () => {
  //   cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/");
  //   cy.get('[style="text-align: center;"] > .chakra-button', {})
  //     .wait(100)
  //     .click()
  //     .wait(3000);
  //   cy.get('[style="text-align: center;"] > img').then(($homeImage) => {
  //     if ($homeImage.is(":visible")) {
  //       expect(1).to.equal(1);
  //     }
  //   });

  //   cy.get(".css-1qw75wv").click();
  //   cy.get(".css-1urha0v > .chakra-text", { timeout: 500 }).should(
  //     "have.text",
  //     "Create New Account"
  //   ); // Implies that we reached the sign up page successfully
  // });

  // it("can sign up as a new user", () => {
  //   cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/signup");
  //   cy.get(".css-1urha0v > .chakra-text", { timeout: 500 }).should(
  //     "have.text",
  //     "Create New Account"
  //   ); // Confirm on sign in page

  //   // fill fields
  //   cy.get("#firstName").type("Cid", { delay: 50 });
  //   cy.get("#lastName").type("Kagenou", { delay: 10 });
  //   cy.get("#email").type("eminence@gmail.com", { delay: 10 });
  //   cy.get("#username").type("shadowwizardmoneygangleader", { delay: 25 });
  //   cy.get("#password").type("eminence", { delay: 50 });
  //   cy.get("#confirmPassword").type("eminence", { delay: 50 });
  //   cy.get(".css-1d3g696").click();
  // });

  // it("can login", () => {
  //   cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/login");
  //   cy.get(".chakra-stack > .chakra-text", { timeout: 500 }).should(
  //     "have.text",
  //     "Login"
  //   );
  //   cy.get("#username").type("shadowwizardmoneygangleader", { delay: 25 });
  //   cy.get("#password").type("eminence", { delay: 50 });
  //   cy.get(".css-1d3g696").click().wait(1000);
  // });

  context("As a logged in user...", () => {
    const groupDescription =
      "This is the best description i think the world has ever seen. There's literally never been a better description than this one right now. This description is so descriptive, so exciting, so fun and so amazing. Man, I love this description.";
    // it("can visit groups after being logged in", () => {
    //   // Login setup: tried wrapping this in a beforeEach, but didn't persist between the "beforeEach" call and the "it" call
    //   cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/login");
    //   cy.get("#username").type("shadowwizardmoneygangleader");
    //   cy.get("#password").type("eminence");
    //   cy.get(".css-1d3g696").click().wait(3000);

    //   // Check that the pre-made group renders properly
    //   cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/groups");
    //   cy.get(
    //     ':nth-child(1) > a > .container > .css-7q1b89 > [style="font-size: 2rem; font-weight: 600; text-align: center;"]'
    //   ).should("have.text", "shadow wiza...");

    //   // Creating a group
    //   cy.get(`#popover-trigger-\\:r6\\:`).click().wait(100);
    //   cy.get("#popover-header-\\:r6\\:").should(
    //     "have.text",
    //     "Create new group"
    //   );
    //   cy.get("#name").type("Zielke's group", { delay: 50 });
    //   cy.get("#desc").type(groupDescription);
    //   cy.get(".submit-button").click();
    //   cy.get(".chakra-popover__close-btn").click().wait(500);

    //   // Check that the newly created group is there
    //   cy.get(
    //     ':nth-child(2) > a > .container > .css-7q1b89 > [style="font-size: 2rem; font-weight: 600; text-align: center;"]'
    //   ).should("have.text", "Zielke's group");

    //   // Check that a user can search for a specific group
    //   cy.get(".chakra-input").type("Zielke").wait(200);
    //   cy.get(
    //     ':nth-child(1) > a > .container > .css-7q1b89 > [style="font-size: 2rem; font-weight: 600; text-align: center;"]'
    //   ).should("have.text", "Zielke's group"); // Confirms that Zielke's group (which before was in the second position) is now in first

    //   // Access the newly created group
    //   cy.get(
    //     ':nth-child(1) > a > .container > .css-7q1b89 > [style="font-size: 2rem; font-weight: 600; text-align: center;"]'
    //   )
    //     .click()
    //     .wait(1000);
    //   cy.get(".css-mt0dvk > .chakra-heading")
    //     .should("have.text", "Zielke's group")
    //     .wait(500);
    // });

    // it("can switch between item and groups pages", () => {
    //   // Login setup: tried wrapping this in a beforeEach, but didn't persist between the "beforeEach" call and the "it" call
    //   cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/login");
    //   cy.get("#username").type("shadowwizardmoneygangleader");
    //   cy.get("#password").type("eminence");
    //   cy.get(".css-1d3g696").click().wait(3000);

    //   cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/groups");
    //   cy.get(".css-1ag3xfv").should("have.text", "Your GROUPS");

    //   //Can visit items from groups via the "switch to items"
    //   cy.get(".custom-link").click().wait(1000);
    //   cy.get(".css-1ag3xfv").should("have.text", "Your ITEMS");

    //   //Can return to groups via "switch to groups"
    //   cy.get(".custom-link").click().wait(1000);
    //   cy.get(".css-1ag3xfv").should("have.text", "Your GROUPS");

    //   //Can visit items via "My Items"
    //   cy.get(".css-5rxp7y > .chakra-stack > :nth-child(1)").click().wait(1000);
    //   cy.get(".css-1ag3xfv").should("have.text", "Your ITEMS");

    //   //Can visit groups via "My Groups"
    //   cy.get(".css-5rxp7y > .chakra-stack > :nth-child(2)").click().wait(1000);
    //   cy.get(".css-1ag3xfv").should("have.text", "Your GROUPS");
    // });

    // it("can manuver on the individual group page", () => {
    //   // Login setup: tried wrapping this in a beforeEach, but didn't persist between the "beforeEach" call and the "it" call
    //   cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/login");
    //   cy.get("#username").type("shadowwizardmoneygangleader");
    //   cy.get("#password").type("eminence");
    //   cy.get(".css-1d3g696").click().wait(3000);
    //   cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/groups");

    //   // Access new group made in previous test
    //   cy.get(":nth-child(2) > a > .container").click();

    //   // Add a pre-existing friend to group      TODOO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //   // Create a new basket and check that its display is rendered properly
    //   cy.get("#popover-trigger-\\:rf\\:").click().wait(200);
    //   cy.get("#name").type("Secret basket");
    //   cy.get("#desc").type("this basket holds all of my secrets");
    //   cy.get(".submit-button").click().wait(1000);
    //   cy.get(".b-header > .chakra-avatar").should("have.text", "s");

    //   // Create a new item inside this basket and check its display
    //   cy.get("#popover-trigger-\\:rf\\:").click().wait(500);
    //   cy.get("#popover-content-\\:rf\\: > form > #name").type(
    //     "307 quiz answers",
    //     {
    //       force: true,
    //       delay: 50,
    //     }
    //   );
    //   cy.get("#notes").type(
    //     "These are the answers to every quiz I ever made.",
    //     {
    //       force: true,
    //       delay: 50,
    //     }
    //   );
    //   cy.get("#price").type("10", { force: true, delay: 10 });
    //   cy.get("#field-\\:rh\\:", { force: true, delay: 10 });
    //   cy.get(
    //     "#popover-content-\\:rf\\: > form > .chakra-popover__footer > .submit-button"
    //   ).click();
    //   // Edit item

    //   // Delete item

    //   // Add a friend to the basket and check its new display

    //   // Edit the group and check before/after state of description
    //   cy.get(".css-phpbkd > .chakra-text", { delay: 1000 }).should(
    //     "have.text",
    //     groupDescription
    //   );
    //   cy.get("#popover-trigger-\\:r9\\:").click().wait(500);
    // });

    it("can visit items after being logged in", () => {
      // Login setup: tried wrapping this in a beforeEach, but didn't persist between the "beforeEach" call and the "it" call
      cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/login");
      cy.get("#username").type("shadowwizardmoneygangleader");
      cy.get("#password").type("eminence");
      cy.get(".css-1d3g696").click().wait(3000);

      cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/items");

      //Check that we are on the items page
      cy.get(".css-1ag3xfv").should("have.text", "Your ITEMS");

      //Check that you can see the items that are in each group

      //Check that you can view more details on an item

      // Add an item
      const itemName = "good stuff";
      cy.get("#popover-trigger-\\:r6\\:").click().wait(200);
      cy.get("#name").type(itemName);
      cy.get("#notes").type("tested this mystelfs...  delicious");
      cy.get("#price").type("123456789");
      cy.get("#field-\\:r8\\:").type(3);
      cy.get(".submit-button").click().wait(1000);
      cy.get(":nth-child(3) > .css-nlzu2v").should("have.text", itemName);

      //check moving an item
      cy.get("#menu-button-\\:ro\\:").click().wait(200);
      cy.get("#menu-list-\\:ro\\:-menuitem-\\:rq\\:").click().wait(1000);
      //cy.get(":nth-child(3) > .css-1ev6irb > .chakra-button").click();

      //Check that you can edit an item

      //Check that you can delete an item
    });

    // it("can delete a group", () => {
    //   // Login setup: tried wrapping this in a beforeEach, but didn't persist between the "beforeEach" call and the "it" call
    //   cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/login");
    //   cy.get("#username").type("shadowwizardmoneygangleader");
    //   cy.get("#password").type("eminence");
    //   cy.get(".css-1d3g696").click().wait(3000);
    //   cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/groups");

    //   // Access individual group
    //   cy.get(":nth-child(2) > a > .container").click();

    //   // Delete group
    //   cy.get("#popover-trigger-\\:rc\\:").click().wait(500);
    //   cy.get(".css-1wyqqd2").click();

    //   // Check that group no longer displays on MyGroups
    //   cy.wait(1000); // Visual confirmation
    // });

    // it("can operate the profile page", () => {
    //   // Login setup: tried wrapping this in a beforeEach, but didn't persist between the "beforeEach" call and the "it" call
    //   cy.visit("https://thankful-tree-04ab28e1e.5.azurestaticapps.net/login");
    //   cy.get("#username").type("shadowwizardmoneygangleader");
    //   cy.get("#password").type("eminence");
    //   cy.get(".css-1d3g696").click().wait(3000);

    //   // Visit the profile page
    //   cy.get("#menu-button-\\:r3\\:").click().wait(500);
    //   cy.get("#menu-list-\\:r3\\:-menuitem-\\:r4\\:").click().wait(200);

    //   // Assert username, then change username, then assert change
    //   cy.get(".css-1csops8 > .chakra-heading").should(
    //     "have.text",
    //     "Cid Kagenou's Profile"
    //   );
    //   cy.get(".css-1t8s8ud").click();
    //   cy.get("#first-name").clear().type("Shadow");
    //   cy.get("#last-name").clear().type("Wizard");
    //   cy.get(".css-1t8s8ud").click().wait(100);
    //   cy.get(".css-1csops8 > .chakra-heading")
    //     .should("have.text", "Shadow Wizard's Profile")
    //     .wait(500);
    //   cy.get(".css-1t8s8ud").click();
    //   cy.get("#first-name").clear().type("Cid");
    //   cy.get("#last-name").clear().type("Kagenou");
    //   cy.get(".css-1t8s8ud").click().wait(100);

    //   // Add a friend

    //   // Logout
    //   cy.get("#menu-button-\\:r3\\:").click().wait(500);
    //   cy.get("#menu-list-\\:r3\\:-menuitem-\\:r5\\:").click().wait(200);
    // });
  });
});
