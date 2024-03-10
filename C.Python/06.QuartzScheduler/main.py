# from pytz import utc

# from apscheduler.schedulers.background import BackgroundScheduler
# from apscheduler.jobstores.mongodb import MongoDBJobStore
# from apscheduler.jobstores.sqlalchemy import SQLAlchemyJobStore
# from apscheduler.executors.pool import ThreadPoolExecutor, ProcessPoolExecutor
############
from apscheduler.schedulers.blocking import BlockingScheduler
from apscheduler.triggers.cron import CronTrigger
from datetime import datetime

def my_job():
    print("Job executed at:", datetime.now())

def schedule_job():
    # Create a scheduler
    scheduler = BlockingScheduler()

    # Add the job to the scheduler
    scheduler.add_job(my_job, trigger=CronTrigger.from_crontab("0/10 * * * *"))

    try:
        # Start the scheduler
        scheduler.start()
    except (KeyboardInterrupt, SystemExit):
        # Shut down the scheduler gracefully when interrupted
        scheduler.shutdown()

if __name__ == "__main__":
    schedule_job()
############
# from datetime import datetime
# from pytz import timezone
# from apscheduler.schedulers.quartz import QuartzScheduler
# from apscheduler.triggers.quartz import CronTrigger

# def my_job():
#     print("Job executed at:", datetime.now())

# def schedule_job():
#     # Create a scheduler
#     scheduler = QuartzScheduler()

#     # Add the job to the scheduler
#     scheduler.add_job(my_job, trigger=CronTrigger.from_crontab("0/10 * * * *"))

#     # Start the scheduler
#     scheduler.start()

#     try:
#         # Keep the program running
#         while True:
#             pass
#     except (KeyboardInterrupt, SystemExit):
#         # Shut down the scheduler gracefully when interrupted
#         scheduler.shutdown()

# if __name__ == "__main__":
#     schedule_job()
