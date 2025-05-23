## Summary of repo
# Task 7 Wdio
Repo is dedicated for testing Website Telnyx on wdio, create a report with Allure.
## Requirements
Among requirements are installing project, node.JS, faker, any code editor, docker and allure.

## Setup

- Install any code editor (VS Code) or IDE

- Install node.js 22.13.1

- Clone the project:

```bash
git clone https://github.com/BilikSergey/Task-7-WebdriverIO.git
```

- Install dependencies:

```bash
npm install
```

- Install wdio

```bash
npm init wdio@latest .
```

- Install allure.

```bash
npm install @wdio/allure-reporter --save-dev
```

- Install faker.

```bash
npm install @faker-js/faker
```

- Install docker for desktop.

## Run tests
Run all tests in headless mode: 
```bash
test:headless:chrome
```
Run single test
```bash
test:login.e2e
```
```bash
test:mainFunctions.e2e
```
```bash
test:shop.e2e
```
```bash
test:signUp.e2e
```
Run all tests with UI:
```bash
test:ui:chrome
```
Run tests with Firefox:
```bash
test:headless:firefox
```
Run tests with microsoft Edge:
```bash
test:headless:edge
```
Run to build a docker
```bash
doker:build
```
Run docker
```bash
docker:run
```
## Create a report
```bash
report:allure:generate
```
