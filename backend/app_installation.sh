#!/bin/bash

#functions 
function coolGoodbye {
    echo "bye :D"
    exit
}

function runKnexConfig {

    echo 'Setting up app database'
    rm ./src/database/dev.sqlite3

    echo 'Migrating database to local folders'
    npx knex migrate:latest

    echo 'Running seeders'
    npx knex seed:run --specific=user.js --verbose
    npx knex seed:run --specific=address.js --verbose
    npx knex seed:run --specific=contact.js --verbose
    npx knex seed:run --specific=donation.js --verbose
    
}  

function runNpmInstallation {

    echo 'Installing packages'
    npm clean-install
    echo "ok"

}

cat << "EOF" 
   db    88b 88 88 8b    d8    db    88                      
  dPYb   88Yb88 88 88b  d88   dPYb   88                      
 dP__Yb  88 Y88 88 88YbdP88  dP__Yb  88  .o                  
dP""""Yb 88  Y8 88 88 YY 88 dP""""Yb 88ood8          

8888b.   dP"Yb  88b 88    db    888888 88  dP"Yb  88b 88     
 8I  Yb dP   Yb 88Yb88   dPYb     88   88 dP   Yb 88Yb88     
 8I  dY Yb   dP 88 Y88  dP__Yb    88   88 Yb   dP 88 Y88     
8888Y"   YbodP  88  Y8 dP""""Yb   88   88  YbodP  88  Y8     

   db    88""Yb 88""Yb                                       
  dPYb   88__dP 88__dP                                       
 dP__Yb  88"""  88"""                                        
dP""""Yb 88     88                                           

88 88b 88 .dP"Y8 888888    db    88     88     888888 88""Yb 
88 88Yb88 `Ybo."   88     dPYb   88     88     88__   88__dP 
88 88 Y88 o.`Y8b   88    dP__Yb  88  .o 88  .o 88""   88"Yb  
88 88  Y8 8bodP'   88   dP""""Yb 88ood8 88ood8 888888 88  Yb                 

Authors : Lino Mota & Gabriel Meneses

EOF

echo "1) full installation/reeinstallation Please run this option once"
echo "2) only packages"
echo "3) only knex for database"
echo "4) exit"

echo "Enter your option"
read op


if [ "$op" = "1" ]; then

    runNpmInstallation
    runKnexConfig

    coolGoodbye

elif [ "$op" = "2" ]; then
    runNpmInstallation

    coolGoodbye

elif [ "$op" = "3" ]; then
    runKnexConfig

    coolGoodbye

elif [ "$op" = "4" ]; then
    coolGoodbye
else

clear
    echo "Invalid option"
    coolGoodbye
fi

