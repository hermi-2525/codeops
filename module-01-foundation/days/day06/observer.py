class NewsAgency:
    def __init__(self):
        self.subscribers = []

    def subscribe(self, subscriber):
        self.subscribers.append(subscriber)

    def notify(self, news):
        for subscriber in self.subscribers:
            subscriber.update(news)


class TV:
    def update(self, news):
        print("TV:", news)


class Radio:
    def update(self, news):
        print("Radio:", news)


agency = NewsAgency()

agency.subscribe(TV())
agency.subscribe(Radio())

agency.notify("Breaking News!")