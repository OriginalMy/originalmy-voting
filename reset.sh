#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status.
dropdb -h helios-demo.cpiulccjfpta.us-east-1.rds.amazonaws.com -U postgres helios
createdb -h helios-demo.cpiulccjfpta.us-east-1.rds.amazonaws.com -U postgres helios
python manage.py makemigrations
python manage.py migrate
echo "from helios_auth.models import User; User.objects.create(user_type='google',user_id='osoriojr@daruni.net',name='Edilson Osorio Junior',admin_p=true, info={'name':'Edilson Osorio Junior','email':'osoriojr@daruni.net'})" | python manage.py shell
echo "from helios_auth.models import User; User.objects.create(user_type='google',user_id='oshiro.miriam@daruni.net',name='Miriam Tomie Oshiro',admin_p=true, info={'name':'Miriam Tomie Oshiro','email':'oshiro.miriam@daruni.net'})" | python manage.py shell
echo "from helios_auth.models import User; User.objects.create(user_type='google',user_id='fabiana.marcos@daruni.net',name='Fabiana Marcos',admin_p=true, info={'name':'Fabiana Marcos','email':'fabiana.marcos@daruni.net'})" | python manage.py shell
echo "from helios_auth.models import User; User.objects.create(user_type='google',user_id='mariana.zanotti@daruni.net',name='Mariana Zanotti',admin_p=true, info={'name':'Mariana Zanotti','email':'mariana.zanotti@daruni.net'})" | python manage.py shell
echo "from helios_auth.models import User; User.objects.create(user_type='google',user_id='murillo.marques@daruni.net',name='Murillo Marques',admin_p=true, info={'name':'Murillo Marques','email':'murillo.marques@daruni.net'})" | python manage.py shell
echo "from helios_auth.models import User; User.objects.create(user_type='google',user_id='miranda.uriel@daruni.net',name='Uriel Miranda',admin_p=true, info={'name':'Uriel Miranda','email':'miranda.uriel@daruni.net'})" | python manage.py shell