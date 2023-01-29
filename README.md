# React App - FX

## Overview

Quite Simple FX information app.


## Build docker image

`$ docker build -t xxxx/react-fx .`


## Run docker image

`$ docker run -d --name react-fx -e REACT_APP_FX_URL=https://fx.xxxxxxxx.net -p 8000:10080 xxxx/react-fx`

  - API Server `https://fx.xxxxxxxx.net` have to accept CORS request.


## Copyright

2023 [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
