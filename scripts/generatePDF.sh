#!/bin/bash

ROUTE=${1:-}
URL="http://documentorator.lo/$ROUTE"

NAME=${ROUTE:-doc}
NAME=$NAME.pdf

app/console --env=prod cache:clear
app/console assetic:dump --env=prod --no-debug
prince --javascript --style=web/assets/style.css $URL $NAME
gnome-open $NAME
