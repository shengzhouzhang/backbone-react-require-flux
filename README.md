backbone-react-require-flux
---------------------------

An example of using node, express, backbone, react, require, twitter & wiki apis. It fetchs 10 tweets and pops up a tooltip of wiki search results by selecting keywords.

Actions
-------
Actions and handlers drive the process of the runing program. All actions are defined in

```
public/actions/
```

Actions Tree:

```
app
  |-- initial components
  |-- components ready
  |
  |-- tweets
  |       |-- load tweets
  |       |-- tweets loaded
  |
  |--tooltip
          |-- load tooltip
          |-- tooltip loaded
```

Design
------

The architecture obeys the design of flux:

```
Views ---> (actions) ----> Dispatcher ---> (registered callback) ---> Stores -------+
Ʌ                                                                                   |
|                                                                                   V
+-- (Controller-Views "change" event handlers) ---- (Stores emit "change" events) --+
```

Stores communicate APIs with Actions:

```
(Views "change" event handlers) ...             ... (emit "load" actions) ---> Dispatcher ---> APIs
Ʌ                                                                                                 |
|                                                                                                 V
(Stores emit "change" events) --- (Stores "loaded" event handlers) --- (APIs emit "loaded" actions)
```

How to Run it
-------------
Clone the repo and run the following command, and navigate to [http://localhost:3000](http://localhost:3000).
Loading tweets is a little bit slow, you can watch the actions log in Chrome Console.

```sh
$ node server.js
```
