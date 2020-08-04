# Back-End

## Schema

#### Users

| Field    | Type    | Notes                              |
| -------- | ------- | ---------------------------------- |
| id       | integer | _primary key_ and _autoincrements_ |
| email    | string  | _required_ and _unique_            |
| password | string  | _required_                         |
| username | string  | _required_                         |
| role     | string  | _required_                         |

#### Strains

| Field       | Type    | Notes                                                                      |
| ---------   | ------- | -----------------------------------------------------------------------    |
| id          | integer | _primary key_ and _autoincrements_                                         |
| name        | string  | _required_; name of the strain                                             |
| image_URL   | string  | product image                                                              |
| type        | text    | type of strain: Indica, Sativa, Hybrid                                     |
| description | text    | _required_; description of the cannabis strains, background, etc.          |
| taste       | text    | flavor of the product                                                      |
| effects     | text    | different effects obtained                                                 |
| rating      | string  | rating from 1 to 5 stars                                                   |

## API

BASE URL: https://mc-7-be.herokuapp.com

test account:

```json
{
  "email": "tester@email.com",
  "password": "test",
  "username": "test123",
  "role": "patient"
}
```

#### Table of Contents

| Type   | Path                        | Notes                                                                                                 | Example                            |
| ------ | ------------------------    | ----------------------------------------------------------------------------------------------------- | ---------------------------------- |
| POST   | `/api/auth/register`        | register a new user                                                                                   | [link](#post-apiauthregister)      |
| POST   | `/api/auth/login`           | login an user                                                                                         | [link](#post-apiauthlogin)         |
| &nbsp; |                             |                                                                                                       |                                    |
| GET    | `/api/user/:user_id`        | get user info; requires authorization                                                                 | [link](#get-apiusersuser_id)       |
| PUT    | `/api/user/:user_id`        | update user info; requires authorization                                                              | [link](#put-apiusersuser_id)       |
| DELETE | `/api/user/:user_id`        | delete a user account; requires authorization                                                         | [link](#delete-apiusersuser_id)    |
| &nbsp; |                             |                                                                                                       |                                    |
| GET    | `/api/strains`             | get strains                                                                                          | [link](#get-apistrains)            |
| POST   | `/api/strains`             | create a new product post; requires `name` and `description`                                              | [link](#post-apiproducts)           |
| GET    | `/api/strains/:strain_id` | get a strain                                                                                         | [link](#get-apireviewsreview_id)    |
| PUT    | `/api/strains/:strain_id` | update a strain; change `liked` key to like or unlike a submitted product; requires authorization;   | [link](#put-apistrainsstrain_id)    |
| DELETE | `/api/strains/:strain_id`  | delete a product; requires authorization;                                                            | [link](#delete-apiproductsproduct_id) |

## Examples

#### POST /api/auth/register

request data:

```json
{
  "email": "username@email.com",
  "password": "password",
  "username": "Name",
  "role": "provider"
}
```

response data:

```json
{
  "user": {
    "id": 1,
    "email": "username@email.com",
    "username": "Name"
  },
  "authorization": "really.long.token"
}
```

#### POST /api/auth/login

request data:

```json
{
  "username": "test123",
  "password": "test"
}
```

response data:

```json
{
  "user": {
    "id": 1,
    "email": "username@email.com",
    "username": "Name"
  },
  "authorization": "really.long.token"
}
```

#### GET /api/users/:user_id

response data

```json
{
  "id": 1,
  "email": "username@email.com",
  "username": "Name",
  "role": "provider"
}
```

#### PUT /api/users/:user_id

request data

```json
{
  "email": "username@email.com",
  "username": "Name"
}
```

response data

```json
{
  "id": 1,
  "email": "username@email.com",
  "username": "Name"
}
```

#### DELETE /api/users/:user_id

response data

```
no content
```

#### GET /api/strains/:strain_id

response data

```json
{
  "id": 1,
  "name": "Name of strain",
  "image_URL": "image.com",
  "type": "Type of strain", 
  "description": "About the product text",
  "taste": "Taste of smoke",
  "effects": "Different effects obtained",
  "rating": 1
}
```

#### PUT /api/strains/:strain_id

request data

```json
{
  "name": "Name of strain",
  "image_URL": "image.com",
  "type": "Type of strain", 
  "description": "About the strain text",
  "taste": "Taste of smoke",
  "effects": "Different effects obtained",
  "rating": 1
}
```

response data

```json
{
  "id": 1,
  "name": "Name of strain",
  "image_URL": "image.com",
  "type": "Type of strain", 
  "description": "About the strain text",
  "taste": "Taste of smoke",
  "effects": "Different effects obtained",
  "rating": 1
}
```

#### DELETE /api/strains/:strain_id

response data

```
no content
```

#### GET /api/strains

response data

```json
[
  {
    "id": 1,
    "name": "Name of strain",
    "image_URL": "image.com",
    "type": "Type of strain", 
    "description": "About the strain text",
    "taste": "Taste of smoke",
    "effects": "Different effects obtained",
    "rating": 1
  },
  {
    "id": 2,
    "name": "Name of strain",
    "image_URL": "image.com",
    "type": "Type of strain", 
    "description": "About the strain text",
    "taste": "Taste of banana",
    "effects": "Different effects obtained",
    "rating": 2
  }
]
```

#### POST /api/strains

request data

```json
{
  "name": "Name of strain",
  "image_URL": "image.com",
  "type": "Type of strain", 
  "description": "About the strain text",
  "taste": "Taste of smoke",
  "effects": "Different effects obtained",
  "rating": 3
}
```

response data

```json
{
  "id": 1,
  "name": "Name",
  "image_URL": "image.com",
  "type": "Type of strain", 
  "description": "About the strain text",
  "taste": "Taste of smoke",
  "effects": "Different effects obtained",
  "rating": 1
}
```

#### GET /api/stories/:product_id

response data

```json
{
  "id": 1,
  "name": "Name",
  "image_URL": "image.com",
  "type": "Type of strain", 
  "description": "About the strain text",
  "taste": "Taste of smoke",
  "effects": "Different effects obtained",
  "rating": 1
}
```


