web: gunicorn wsgi:application -b 0.0.0.0:$PORT -w 1 --log-file -
#worker: celery worker --app helios --events --beat --concurrency 6 --logfile celeryw.log --pidfile celeryw.pid
#worker: celery worker --app=helios
worker: celery worker --app helios --events --beat --concurrency 1