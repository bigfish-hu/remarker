export class NotificationService {
    constructor (API, $log) {
        'ngInject';
        this.$log = $log;
        this.API = API;
    }

    /**
     * Register the service worker.
     */
    registerServiceWorker() {
        if (!('serviceWorker' in navigator)) {
            this.$log.debug('Service workers aren\'t supported in this browser.');
            return;
        }
        console.log('fakka2');

        navigator.serviceWorker.register('/sw.js').then(() => this.initialise());
    }

    initialise() {
        if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
            this.$log.debug('Notifications aren\'t supported.');
            return;
        }

        if (Notification.permission === 'denied') {
            this.$log.debug('The user has blocked notifications.');
            return;
        }

        if (!('PushManager' in window)) {
            this.$log.debug('Push messaging isn\'t supported.');
            return;
        }
        console.log('fakka3');

        navigator.serviceWorker.ready.then((registration) => {
            registration.pushManager.getSubscription()
                .then(subscription => {

                    if (!subscription) {
                        this.subscribe();
                        return;
                    }

                    this.updateSubscription(subscription);
                })
                .catch((err) => {
                    this.$log.debug('Error during getSubscription()', err);
                });
        });
    }

    /**
     * Subscribe for push notifications.
     */
    subscribe() {
        navigator.serviceWorker.ready.then((registration) => {
            registration.pushManager.subscribe({userVisibleOnly: true})
                .then(subscription => {
                    this.updateSubscription(subscription);
                })
                .catch(e => {
                    if (Notification.permission === 'denied') {
                        this.$log.debug('Permission for Notifications was denied');
                        this.pushButtonDisabled = true;
                    } else {
                        this.$log.debug('Unable to subscribe to push.', e);
                        this.pushButtonDisabled = false;
                    }
                });
        });
    }

    /**
     * Unsubscribe from push notifications.
     */
    unsubscribe() {
        navigator.serviceWorker.ready.then(registration => {
            registration.pushManager.getSubscription().then(subscription => {
                if (! subscription) {
                    this.isPushEnabled = false;
                    this.pushButtonDisabled = false;
                    return;
                }

                subscription.unsubscribe().then(() => {
                    this.deleteSubscription(subscription);

                    this.isPushEnabled = false;
                    this.pushButtonDisabled = false;
                }).catch(e => {
                    this.$log.debug('Unsubscription error: ', e);
                    this.pushButtonDisabled = false;
                });
            }).catch(e => {
                this.$log.debug('Error thrown while unsubscribing.', e);
            });
        });
    }

    /**
     * Send a request to the server to update user's subscription.
     *
     */
    updateSubscription(subscription) {
        const key = subscription.getKey('p256dh');
        const token = subscription.getKey('auth');

        console.log('fakka4', subscription);

        const data = {
            endpoint: subscription.endpoint,
            key: key ? btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
            token: token ? btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null
        };

        this.loading = true;

        this.API.service('subscriptions').post(data)
            .then(() => this.loading = false);
    }

    /**
     * Send a request to the server to delete user's subscription.
     */
    deleteSubscription(subscription) {
        this.loading = true;

        this.API.service('subscriptions').one(subscription.endpoint).delete()
            .then(() => this.loading = false);
    }

    /**
     * Send a request to the server for a push notification.
     */
    sendNotification() {
        this.loading = true;

        this.API.service('notifications').post()
            .catch(response => this.$log.debug(response))
            .then(() => this.loading = false);
    }

}