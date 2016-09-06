# Contributing to Croquet Australia - Admin Website

We would love for you to contribute to **Croquet Australia - Admin Website** and help make it even 
better than it is today! As a contributor, here are the guidelines we would like you to follow:

- [Code of Conduct](#coc)
- [Question or Problem?](#question)
- [Issues and Bugs](#issue)
- [Feature Requests](#feature)
- [Submission Guidelines](#submit)
- [Coding Rules](#rules)
- [Commit Message Guidelines](#commit)

## <a name="coc"></a> Code of Conduct

Help us keep **Croquet Australia - Admin Website** open and inclusive.

As contributors and maintainers of the **Croquet Australia - Admin Website** project, we pledge to 
respect everyone who contributes by posting issues, updating documentation, submitting pull 
requests, providing feedback in comments, and any other activities.

Communication through any of **Croquet Australia - Admin Website**'s channels (GitHub, IRC, mailing 
lists, Google+, Twitter, etc.) must be constructive and never resort to personal attacks, trolling, 
public or private harassment, insults, or other unprofessional conduct.

We promise to extend courtesy and respect to everyone involved in this project regardless of gender, 
gender identity, sexual orientation, disability, age, race, ethnicity, religion, or level of 
experience. We expect anyone contributing to the **Croquet Australia - Admin Website** project to do 
the same.

If any member of the community violates this code of conduct, the maintainers of the 
**Croquet Australia - Admin Website** project may take action, removing issues, comments, and PRs or 
blocking accounts as deemed appropriate.

If you are subject to or witness unacceptable behavior, or have any other concerns, please email us 
at [admin@croquet-australia.com.au](mailto:admin@croquet-australia.com.au).

## <a name="question"></a> Got a Question or Problem?

If you have questions about how to *use* **Croquet Australia - Admin Website**, please direct them to 
[Tim Murphy](mailto:tim@26tp.com).

## <a name="issue"></a> Found an Issue?

If you find a bug in the source code, you can help us by
[submitting an issue](#submit-issue) to our [GitHub Repository][github]. Even better, you can
[submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Want a Feature?

You can *request* a new feature by [submitting an issue](#submit-issue) to our [GitHub
Repository][github]. If you would like to *implement* a new feature, please submit an issue with
a proposal for your work first, to be sure that we can use it.
Please consider what kind of change it is:

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, search the archive, maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue.
Help us to maximize the effort we can spend fixing issues and adding new
features, by not reporting duplicate issues. Providing the following information will increase the
chances of your issue being dealt with quickly:

* **Overview of the Issue** - if an error is being thrown a non-minified stack trace helps
* **Croquet Australia - Admin Website Version** - what version of 
  **Croquet Australia - Admin Website** is affected (e.g. 2.0.0-alpha.53)
* **Motivation for or Use Case** - explain what are you trying to do and why the current behavior 
  is a bug for you
* **Browsers and Operating System** - is this a problem with all browsers?
* **Reproduce the Error** - provide detailed steps on how to reproduce the error.
* **Related Issues** - has a similar issue been reported before?
* **Suggest a Fix** - if you can't fix the bug yourself, perhaps you can point to what might be
  causing the problem (line of code or commit)

You can file new issues by providing the above information 
[here](https://github.com/croquet-australia/croquet-australia-admin-website/issues/new).

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

* Search [GitHub](https://github.com/croquet-australia/croquet-australia-admin-website/pulls) for 
  an open or closed PR that relates to your submission. You don't want to duplicate effort.
* Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch master
     ```

* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Run the full **Croquet Australia - Admin Website** test suite, as described in the 
  [developer documentation][dev-doc], and ensure that all tests pass.
* Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit). Adherence to these conventions
  is necessary because release notes are automatically generated from these messages.

     ```shell
     git commit -a
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

* In GitHub, send a pull request to `croquet-australia-admin-website:master`.
* If we suggest changes then:
  * Make the required updates.
  * Re-run the **Croquet Australia - Admin Website** test suites to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit-tests).
* All public API methods **must be documented**. (Details TBC).

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
(todo) we use the git commit messages to generate the **Croquet Australia - Admin Website** change log.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

Footer should contain a 
[closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) 
if any.

Samples: (even more [samples](https://github.com/angular/angular/commits/master))

```
docs(changelog): update change log to beta.5
```
```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header 
of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash 
is the SHA of the commit being reverted.

### Type

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests or correcting existing tests
* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **chore**: Other changes that don't modify `src` or `test` files

### Scope

The scope could be anything specifying place of the commit change. For example
`content`, `tournaments`, etc.

### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. 
The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].

## References

- Original source for this document is [Angular's contributing guide]
(https://github.com/**Croquet Australia - Admin Website**/**Croquet Australia - Admin Website**/blob/511fe3d9f8c9eab0f97160a309b2df38804a43c0/CONTRIBUTING.md).

- Original source for **Code of Conduct** section is [Contributor Code of Conduct]
(https://github.com/angular/code-of-conduct/blob/5991df2ead96c5dbb3f7d5b4ac39b7b9419e40e4/CODE_OF_CONDUCT.md)   
