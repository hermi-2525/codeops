class Report:
    def create(self):
        print("Report created")


class ReportSaver:
    def save(self):
        print("Report saved")


class ReportEmail:
    def send(self):
        print("Report emailed")


report = Report()
report.create()

saver = ReportSaver()
saver.save()

email = ReportEmail()
email.send()