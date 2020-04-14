# NoteList

## How to Run:
Clone this repo, from the command line navigate to the root directory and in the command line check to see if you ahave node.js installed on yout machine by typing:

```
node -v
```

If not, install it by typing in the following command:

```
brew install node
```

Now we want to initialize Node with the Http-Server library. From the root directory, in the command line type:

```
npm install http-server --save
```

You can now run the local server from command line by typing:

```
node node_modules/http-server/bin/http-server
```

Then visit: localhost://8080

## How to Run Tests
To run the homeade test suite, in the root directory, right click on the specRunner.html file and click Copy Path. Pase this into the Google Chrome Browser's URL, then open the Chrome Dev Tools (right click, click on inspect).

Then navigate to the `console' tab of the Dev tools, you will here 16 tests passing.