(() => {
  'use strict';

  const WebPush = {
    init() {
      self.addEventListener('push', this.notificationPush.bind(this));
      self.addEventListener('notificationclick', this.notificationClick.bind(this));
      self.addEventListener('notificationclose', this.notificationClose.bind(this));
    },

    /**
     * Handle notification push event.
     *
     * https://developer.mozilla.org/en-US/docs/Web/Events/push
     */
    notificationPush(event) {
      if (!(self.Notification && self.Notification.permission === 'granted')) {
        return;
      }

      // Check if the notification has a payload.
      if (event.data) {
        event.waitUntil(
            this.sendNotification(JSON.parse(event.data.text()))
        );
      }
      // Otherwise just fetch the last notification from the server.
      else {
        event.waitUntil(
          self.registration.pushManager.getSubscription().then((subscription) => {
            if (subscription) {
              return this.fetchNofication(subscription);
            }
          })
        );
      }
    },

    /**
     * Handle notification click event.
     *
     * https://developer.mozilla.org/en-US/docs/Web/Events/notificationclick
     */
    notificationClick(event) {
      // const data = event.notification.data

      if (event.action == 'open') {
        self.clients.openWindow('/');
      } else if (event.action === 'other') {
        //
      } else {
        self.clients.openWindow('/');
      }
    },

    /**
     * Handle notification close event (Chrome 50+).
     *
     * https://developers.google.com/web/updates/2016/03/notifications?hl=en
     */
    notificationClose(event) {
      self.registration.pushManager.getSubscription().then((subscription) => {
        if (subscription) {
          this.dismissNotification(event, subscription);
        }
      });
    },

    /**
     * Show notification to the user.
     */
    sendNotification(data) {
      return self.registration.showNotification(data.title, {
        body: data.body,
        data: data,
        actions: data.actions || []
      });
    },

    /**
     * Fetch the last notification from the server.
     *
     */
    fetchNofication({endpoint}) {
      return fetch(`/notifications/last?endpoint=${encodeURIComponent(endpoint)}`).then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }

        return response.json().then((data) => {
          return this.sendNotification(data);
        });
      });
    },

    /**
     * Send request to server to dismiss a notification.
     *
     */
    dismissNotification({notification}, {endpoint}) {
      if (!notification.data.id) {
        return;
      }

      const data = new FormData;
      data.append('endpoint', endpoint);

      // Send a request to the server to mark the notification as read.
      fetch(`/notifications/${notification.data.id}/dismiss`, {
        method: 'POST',
        body: data
      });
    }
  };

  WebPush.init();
})();
