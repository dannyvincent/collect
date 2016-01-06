# Collect
A waste collection booking application.

## Background

Global Economy is an extreme waste management software company that likes to lead by example. In an effort to cut down on the squandering of resources, no developer, QA or product owner is allocated a specific workstation and of the desks that do exist there are only enough for 1 between 2. In an effort to cut down on the provisioning of wasteful infrastructure, as much documentation as possible is contained within github, along with the source code.

These factors lead to certain processes being prevalent: 
* All work is completed by at least 2 people in collaboration
* Application requirements are written in plain language in text files and stored in the github repo (usually by a QA/PO/Dev collaboration)
* Tests are written in plain language to clearly match the requirements so that the product owner can read and understand them without needing to understand the implementation

Management still likes to track what each individual staff member has been committing to Github. Tracking who has authored specific lines of code in Github is done by setting the author name on each commit. The implication is that each commit has a distinct author - due to the fact that although the work may be collaborative, in reality only one person at a time can be typing. Management prefers a fairly even split of actual code contribution among developers in order to ensure that everybody is working at a consistent level.

Due to the need to logically split contributions, commits usually fall into one of the following categories, and commit messages are prefixed accordingly:
* Red: write a test that fails due to lack of functionality. Code should ideally still compile.
* Green: make the previous test pass by adding new functionality
* Refactor: usually consists of making some existing tests fail then pass again as the code moves underneath them. No new functionality should be added during a refactor.

To make the process of changing author name easier, a helpful member of the team has created a script to enable easy switching between preset pairings. Instructions for installing and using it are here: https://github.com/ben-biddington/xp-mode

## Task 

Global Economy has been commissioned to create an app to enable customers to book waste collection. Your team has been tasked with writing the logic for the booking screen. Today  you and at least 1 buddy are going to tackle the validating and saving of booking submissions.

Your QA and product owner have collaborated to generate the requirements for this part of the app. The requirements have been written out by the QA in a way that can easily be translated into tests. The tests should read as plainly as possible, so that the product owner can track progress easily by looking at which tests are passing. The requirements document can be found here: [link]
