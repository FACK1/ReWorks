# What’s the problem?

The fashion industry is currently very unsustainable, with millions of clothes being wasted each year. Many of us don’t know what to do with our extra piles of clothes lying around and, more often than not, these clothes are thrown in a dump rather than being recycled, sold, or repurposed. Recently, even when we give to charity, they cannot deal with the amount of items donated. So what’s the solution?

# What’s the solution?

eComit aims to help users make their wardrobe visible, provide information on each individual garment and allow the user to do whatever they see fit with this information. For example, donate it to charity, or list it on ebay to sell. eComit looks to make a circular economy where clothes are repurposed instead of thrown away.
In addition to providing users with information about their item, it also serves as an admin tool for the ReWorks team.

# Link to the prototype: 
https://www.figma.com/proto/Z5SWa6KmOufBDFreUojx7mL0/ReWorks?node-id=409%3A503&scaling=min-zoom

# User Stories: what can I do on this app?

 1. As a user, I want to see a description of the app. user story
 1. As a user, I want to upload a photo of the item I want to be reused. user story
 1. As a user, I want to see pointers on how to upload a good photo. user story
 1. As a user, I want to see the headline details about the photo I uploaded. user story
 1. As a user, I want to add/update/edit the details. user story
 1. As a user, I want to login to save my items and data. user story
 1. As a user, I want to sign up to save my items and data. user story
 1. As a user, I want to see a list of my items. user story
 1. As a user, I want to see details of one item. user story
 1. As a user, I want to export my data as CSV. user story
 1. As a user, I want to suggest future features in the app. user story
 1. As a user, I want to contribute to environmental sustainability. user story
 1. As an admin, I want to see a spreadsheet of all users’ items.
 
 ## DEMO
 
 https://ecommit.herokuapp.com/

## Getting Started
How to get the project up and running on your local machine.

_Please ensure you have this software **installed and running** on your local machine **before** you attempt to run this webapp._

>>**Node** (via nvm) see: https://github.com/creationix/nvm

>>**MongoDB** see: https://docs.mongodb.com/manual/installation/

### Setup

**1. Clone the repo:**

```$ git clone https://github.com/FACK1/ReWorks.git```

**2. Install dependencies**

```
$ cd ReWork
$ npm i
```

**3. Install dependencies in the client folder**
```
$ cd client
$ npm i
```

**4. Add initial environment Variables**

Create a config.env file in the root directory.

_Add the following line to make your local database work, inserting your own username and password._

```DB_URL = mongodb://localhost:password/username```

_Add a 'secret' for password encryption._

```SECRET = "[SOMETHING SECRET]"```

**5. Add additional more .env Variables (S3 Amazon, Clarifai API, Airtable API)**

**For S3 Amazon** (via https://aws.amazon.com/)

_You will need to create an aws.amazon account, and add your access key, secret, and bucket name._

```
AWS_ACCESS_KEY_ID = "[YOUR_AWS_ACCESS_KEY_ID]"
AWS_SECRET_ACCESS_KEY = "[YOUR_AWS_SECRET_ACCESS_KEY]"
S3_BUCKET = "[YOUR_S3_BUCKET]"
```


**For Clarifai** (via www.clarifai.com)

_You will need to create an Clarifai account --> create new project --> add your api key._

  ```Clarifai_API_KEY = "[YOUR_Clarifai_API_KEY]"```
  
  
**For Airtable** (via www.airtable.com)

_You will need to create an Airtable account --> create new project --> create work_space --> create tables --> add your api key_

  ```Airtable_API_KEY = "[YOUR_Airtable_API_KEY]"```
  
   - _**Tables Details**_
     - Items
     
     ```Name, Age: Single line text | Details: Long text | Image URL: URL | Image: Attachment | Users: Link to Users | Brand         : Link to Brands (Allow linking to multiple records) | Brand Names: Lookup (Brand : Name) | Type, Colors, Condition,         Size: Single select```
     

     
     - Users 
     
     ```Name: Single line text| Feedback: Multiple select | Items: Link to Items (Allow linking to multiple records)```
  
     
     - Brands
     
     ```ID: Formula (RECORD_ID()) | Name: Single line text```
   

**6. Run the app**

```$ npm run dev```
