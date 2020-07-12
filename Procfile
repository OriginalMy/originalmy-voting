web: gunicorn wsgi:application -b 0.0.0.0:$PORT -w 8 --log-file -
worker: celery worker --app helios --events --beat --concurrency 8 --logfile celeryw.log --pidfile celeryw.pid