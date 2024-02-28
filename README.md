
# ApiSales

APi Users Manager For Projects


## Installation

npm-install

npm run dev

 
```
    
## Tech Stack
**Server:** Node, Express, PrismaDB, MongoDb


## Documentation

[Prisma](https://www.prisma.io/docs)

[express](https://expressjs.com/en/5x/api.html)

```


#### HTTP Requests
```http 
GET ALL SALES
  http://localhost:4000/api/sales
  
GET FOR ID
```http 
  http://localhost:4000/api/sales/1
  
```http 
    POST SALES
  http://localhost:4000/api/sales
  
  body request

  Json
  {
  "stock": 10,
  "unitPrice": 50,
  "otherProperty": "value",
  "clientId": 1
  }
  

```http 
PUT SALES
  http://localhost:3000/api/projects

    body request

  Json
 {
  "stock": 20,
  "unitPrice": 60,
  "otherProperty": "new value"
}
  
  
```http 
DELETED SALES
  http://localhost:4000/api/sales/:id

```


## Authors

- [@WellJhoon](https://github.com/WellJhoon)

