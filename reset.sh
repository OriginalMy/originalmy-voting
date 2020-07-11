#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status.
#dropdb helios
#createdb helios
python manage.py makemigrations
python manage.py migrate
echo "from helios_auth.models import User; User.objects.create(user_type='password',user_id='osoriojr@originalmy.com', info={'name':'Edilson Osorio Junior'})" | python manage.py shell