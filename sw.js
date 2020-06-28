console.log('Loaded service worker!');

self.addEventListener('push', ev => {
    const data = ev.data.json();
    console.log('Got push', data);
    console.log(self.registration)
    self.registration.showNotification(data.title, {
        body: 'Hello, World!',
    });
});