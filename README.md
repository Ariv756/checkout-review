# Welcome 👋

Hi, this is my submission for the frontend tech test, below you can find a brief overview of how to get things started.

## Starting your review app.

To get started run `npm install` in the root of the folder.

```bash
npm install
```

Once the install is finished, run `npm run start`
```bash
npm run start
```

If you would like to run the tests seperately you can do this by running `npm run test`
```bash
npm run test
```

When you fist intialise your app youll be able to see a screen with a form and an error message.

` No data available, please check your Api connection.`

If you do get this error, this is expected as this means your local API isn't running.

## Starting you local API


To get you api started go to the path `/api`, In here 
run `npm install` in the root of the folder.

```bash
cd api/
npm install
```

Once the install is finished, run `npm run start` If successfull you should receive the message

```
> api@1.0.0 start
> node index.js

API serve is running...
```
Once you get this, you can navigation back to the page `http://localhost:3000` and preview your reviews.



## Notes
I have followed an atomic design approach in the way I have structured my files.
```
/src
 /components
  /Component
    index.tsx
    Component.tsx
    Component.module.tsx
    Component.test.tsx
 /utils
 App.tsx
```

I created the api provided to store the reviews locally and provide different end points for us to be able to retrieve `reviews, average and post new reviews`. I havent cleaned or commented this section of the test as this was just used to display the data rather than showcase my knowledge of Node.

Thank you for taking the time to review this,
Alex