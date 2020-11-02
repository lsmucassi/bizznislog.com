# bizznislog.com

#### About
> BizznisLog is a site that gathers all the information you'd want to know about startups and local businesses. After struggling all the time to find information about start-ups, what they are doing, where they are and if they are hiring we dicided to build this site to get start-ups and local businesses to use this platform to reach out to the masses and be known and also to make it eaisier for them to be found easier.


#### Site 
> The site has two types of users
> 1. Business Clients - This kind of users will create profiles of their businesses and give all details needed for general users to query
> 2. General Users - This users get to query for information about companies,

### Overview
#### Documentation   
* useful info *

#### Setup
- Clone/download project to your desired destination 
- cd to cloned project
- run:
  ```npm install   ```
- open local host displayed on output from running script
- start testing

#### Testing 
> after running the server:
visit these pages to test functionality
```
-
-
-
-
-
-
```

**Endpoints**
- /
- /about
- /companies
- /register
- /biz_login
- /admin_login



**Responses**
 - `200 OK` - on success
 - `404 Not Found` - Message Not Found
 - `404 Not Found` - Bad Request, encountered an error

```json
{
  "title": "message title, can be arbitrary string (with limited lengths)",
  "content": "body of the message, can be arbitrary string (with limited lengths)",
  "sender": "sender of the message, can be arbitrary string (with limited lengths)",
  "url": "Url should be a valid url"
}
```

### TODO:
- [x] create a developer branches
- [ ] create an API
- [ ] create a landing page
- [ ] create a About page
- [ ] create a All Companies page
- [ ] Implement query/search
- [ ] Implement a Business Register
- [ ] Implement a Business Profile
- [ ] Implement a Business rating by user
- [ ] Validate one user to rate once
- [ ] Implement an admin dashbord for businesses
- [ ] Implement an admin dashboard for developers/support


