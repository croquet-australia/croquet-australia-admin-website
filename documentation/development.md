# Croquet Australia Amdmin Website - Development

All instructions work for Windows. It is anticipated that it would not take much effort to run on OSX or Linux.

## Requirements

The following shell commands must be Run as Administrator.

Install [chocolatey](https://chocolatey.org/)

```shell
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
```

Install [git](https://git-scm.com/)

```shell
choco install git
```

Install [node >= 5.1.1 & npm >= 3.7.3](https://nodejs.org/en/download/)

```shell
choco install nodejs nodejs.install
```

## Installation

Clone this repository

```shell
git clone https://github.com/croquet-australia/croquet-australia-admin-website.git
```

Move into development directory

```shell
cd croquet-australia-admin-website
```

Install Dependencies

```shell
run install
```
