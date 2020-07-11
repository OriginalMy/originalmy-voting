#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status.
dropdb -h helios-demo.cpiulccjfpta.us-east-1.rds.amazonaws.com -U postgres helios
createdb -h helios-demo.cpiulccjfpta.us-east-1.rds.amazonaws.com -U postgres helios
python manage.py makemigrations
python manage.py migrate
echo "from helios_auth.models import User; User.objects.create(user_type='google',user_id='osoriojr@daruni.net', info={'name':'Edilson Osorio Junior'})" | python manage.py shell