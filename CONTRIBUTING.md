# Contributing

1.  Fork the project and clone your fork.

2.  Create a local feature branch:

        $ git checkout -b <branch>

3.  If adding a function `R_.foo`, define it in `packages/ramda-extension/src/foo.js`, export it from
    `packages/ramda-extension/src/index.js`, and include unit tests in `packages/ramda-extension/src/__tests__/foo-test.js`.
    - We prefer pointfree implementations. See [Thinking in Ramda: Pointfree Style](http://randycoulman.com/blog/2016/06/21/thinking-in-ramda-pointfree-style/).
    - Use composition of functions from Ramda or Ramda-extensioin
    - Use declarative style over imperative. We do not `while`, `for`, `if` etc. in our codebase.
 
4.  Make one or more atomic commits. Each commit should have a descriptive
    commit message, wrapped at 72 characters. Do not commit changes to
    `dist/ramda.js`.

5.  Run `yarn test` and address any errors. Preferably, fix commits in place using `git
    rebase` or `git commit --amend` to make the changes easier to review and to
    keep the history tidy.

6.  Push to your fork:

        $ git push origin <branch>

7.  Open a pull request.

