# Tribes API specification

## Mandatory request header parameter to all endpoints except the `/register` and `/login`:
`X-tribes-token=<token>`


## Registration

### `POST /register`
Creates a new User.

#### Request parameters
- `username` [String]
- `password` [String, optional]
- `kingdom` [String, optional, defaults to "`username`'s kingdom"]


e.g.:
```json
{
  "username" : "Bond",
  "password" : "password123",
  "kingdom" : "MI6"
}

```

#### Response
- if all required parameters provided, returns a `HTTP 200` status with a mock `User` object:
```json
{
  "id" : 1,
  "username" : "Bond",
  "kingdomId" : 1
}
```

- if all required parameter provided, but username equals "occupiedUserName", it returns a `HTTP 409` status and the following error message:
```json
{
  "status" : "error",
  "error" : "Username already taken, please choose an other one."
}
```

- if a required parameter is missing, returns a `HTTP 400` status with the following message:
```json
{
  "status" : "error",
  "message" : "Missing parameter(s): username!"
}
```

## Login
Authenticates a user.

### `POST /login`

#### Request parameters
- `username` [String]
- `password` [String, optional]


e.g.:
```json
{
  "username" : "Bond",
  "password" : "password123"
}
```

#### Response
- if all parameters are provided and username equals "Bond", it returns a `HTTP 200` status with a mock `User` object:
```json
{
  "status" : "ok",
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
}
```

- if all parameters are provided and username doesn't equals "Bond", it returns a `HTTP 401` status with the following message:
```json
{
  "status" : "error",
  "message" : "No such user: <username>!"
}
```

- if all parameters are provided and password doesn't equals "password123", it returns a `HTTP 401` status with the following message:
```json
{
  "status" : "error",
  "message" : "Wrong password!"
}
```

- if a required parameter is missing, returns a `HTTP 400` status with the following message:
```json
{
  "status" : "error",
  "message" : "Missing parameter(s): <comma separated list of missing parameters>!"
}
```

## Kingdom

### `GET /kingdom`
Gets all data of a kingdom that belongs to the user encoded in the token.

#### Response
- if the token is valid, it returns a `HTTP 200` status with the `Kingdom` object of the user

### `GET /kingdom/[userId]`
Gets all data of a kingdom that belongs to the given userId.

#### Response
- if userId is an existing userId, it returns a `HTTP 200` status with the `Kingdom` object of the user:
```json
{
  "id" : 1,
  "name" : "London",
  "userId" : 1,
  "buildings": [
    {
      "id" : 1,
      "type" : "townhall",
      "level": 1,
      "hp": 1,
      "started_at": 12345789,
      "finished_at": 12399999
    }
  ],
  "resources": [
    {
      "type" : "food",
      "amount": 1,
      "generation": 1
    },
    {
      "type" : "gold",
      "amount": 1,
      "generation": 1
    }
  ],
  "troops": [
    {
      "id": 1,
      "level": 1,
      "hp": 1,
      "attack": 1,
      "defence": 1,
      "started_at": 12345789,
      "finished_at": 12399999
    }
  ],
  "location": {
    "x": 1,
    "y": 1
  }
}
```

- if userId doesn't exist, it returns a `HTTP 404` status and the following error message:
```json
{
  "status" : "error",
  "message" : "UserId not found"
}
```

### `PUT /kingdom`
Modifies data of a kingdom belongs to the user encoded in the token.

#### Request parameters (all optional)
- `name` [String]
- `locationX` [int]
- `locationY` [int]


e.g.:
```json
{
  "name" : "MI5"
}
```

#### Response
- if the token is valid, it returns a `HTTP 200` status with the `Kingdom` object of the user:
```json
{
  "id" : 1,
  "name" : "London",
  "userId" : 1,
  "buildings": [
    {
      "id" : 1,
      "type" : "townhall",
      "level": 1,
      "hp": 1,
      "started_at": 12345789,
      "finished_at": 12399999
    }
  ],
  "resources": [{
      "type" : "food",
      "amount": 1,
      "generation": 1
    }, {
      "type" : "gold",
      "amount": 1,
      "generation": 1
    }
  ],
  "troops": [
    {
      "id": 1,
      "level": 1,
      "hp": 1,
      "attack": 1,
      "defence": 1,
      "started_at": 12345789,
      "finished_at": 12399999
    }
  ],
  "location": {
    "x": 1,
    "y": 1
  }
}
```

## Buildings

### `GET /kingdom/buildings`
Get the list of buildings of the kingdom belongs to the user encoded in the token.

#### Response
- if token is valid, it returns a `HTTP 200` status with the list of `Building` objects of the user:
```json
{
  "buildings" : [{
      "id" : 1,
      "type" : "townhall",
      "level": 1,
      "hp": 1,
      "started_at": 12345789,
      "finished_at": 12399999
    }, {
      "id" : 2,
      "type" : "farm",
      "level": 1,
      "hp": 1,
      "started_at": 12345789,
      "finished_at": 12399999
    }
  ]
}
```

### `GET /kingdom/buildings/[buildingId]`
Get the details of the certain building belongs to the user encoded in the token.

#### Response

- if token is valid and buildingId is an existing ids, it returns a `HTTP 200` status with a `Building` object:
```json
{
  "id" : 1,
  "type" : "townhall",
  "level": 1,
  "hp": 1,
  "started_at": 12345789,
  "finished_at": 12399999
}
```

- if buildingId doesn't exist, it returns a `HTTP 404` status and the following error message:
```json
{
  "status" : "error",
  "message" : "<id> not found"
}
```

### POST /kingdom/buildings
Creates a new building in the kingdom belongs to the user encoded in the token

#### Request parameters
- `type` [String, farm|mine|barracks]

e.g.:
```json
{
  "type" : "farm"
}
```

#### Response

- if type parameter is provided and it's a valid building type (farm|mine|barracks), it returns a `HTTP 200` response with a mock `Building` object:
```json
{
  "id" : 2,
  "type" : "farm",
  "level": 1,
  "hp": 1,
  "started_at": 12345789,
  "finished_at": 12399999
}
```

- if type parameter is provided, but it's not a valid building type (farm|mine|barracks), it returns a `HTTP 400` response with the following error message:
```json
{
  "status" : "error",
  "message" : "Invalid building type!"
}
```

- if type parameter is missing, it returns a `HTTP 400` status and the following error message:
```json
{
  "status" : "error",
  "message" : "Missing parameter(s): type!"
}
```


### PUT /kingdom/buildings/[buildingId]
Upgrades or downgrades a building in the kingdom to a certain level

#### Request parameters
- `level` [int]

#### Response

- if level parameter is provided and it's more than 0 and the user has enough money for the upgrade, it returns a `HTTP 200` response with a mock `Building` object:
```json
{
  "id" : 2,
  "type" : "farm",
  "level": 1,
  "hp": 1,
  "started_at": 12345789,
  "finished_at": 12399999
}
```

- if level parameter is provided and it's more than 0 BUT the user doesn't have enough money for the upgrade, it returns a `HTTP 400` response with the following error message:
```json
{
  "status" : "error",
  "message" : "Not enough gold!"
}
```


- if level parameter is provided, but it's less then 0 or not integer, it returns a `HTTP 400` response with the following error message:
```json
{
  "status" : "error",
  "message" : "Invalid building level!"
}
```

- if level parameter is missing, it returns a `HTTP 400` status and the following error message:
```json
{
  "status" : "error",
  "message" : "Missing parameter(s): type!"
}
```


## Resources

### `GET /kingdom/resources`
Get the list of resources of the kingdom

#### Response
- if token is valid, it returns a `HTTP 200` status with a mock list of `Resource` objects:
```json
{
  "resources": [{
      "type" : "food",
      "amount": 1,
      "generation": 1
    }, {
      "type" : "gold",
      "amount": 1,
      "generation": 1
    }
  ]
}
```


### GET /kingdom/resources/[resourceType]
Get the details of a certain resource type

#### Response

- if token is valid and resourceType is a valid resource type, it returns a `HTTP 200` status with a mock `Resource` object:
```json
{
  "type" : "gold",
  "amount": 1,
  "generation": 1
}
```

- if resource type doesn't exist, it returns a `HTTP 404` status and the following error message:
```json
{
  "status" : "error",
  "message" : "<parameter> not found"
}
```

## Troops

### `GET /kingdom/troops`
Get the list of troops in the kingdom

#### Response
- if token is valid, it returns a `HTTP 200` status with a mock list of `Troop` objects:
```json
{
  "troops": [
    {
      "id": 1,
      "level": 1,
      "hp": 1,
      "attack": 1,
      "defence": 1,
      "started_at": 12345789,
      "finished_at": 12399999
    }, {
      "id": 2,
      "level": 1,
      "hp": 1,
      "attack": 1,
      "defence": 1,
      "started_at": 12345789,
      "finished_at": 12399999
    }
  ]
}
```


### GET /kingdom/troops/[troopId]
Get the detail of a certain troop

#### Response

- if token is valid and troopId is an existing ids, it returns a `HTTP 200` status with a mock `Troop` object:
```json
{
  "id": 1,
  "level": 1,
  "hp": 1,
  "attack": 1,
  "defence": 1,
  "started_at": 12345789,
  "finished_at": 12399999
}
```

- if troopId doesn't exist, it returns a `HTTP 404` status and the following error message:
```json
{
  "status" : "error",
  "message" : "<id> not found"
}
```

### POST /kingdom/troops
Creates a new troop in the kingdom (gets the user's id from the token provided in the header).

#### Response

- if the token is valid, and the user has enough gold to create a troop, it returns a `HTTP 200` response with the create `Troop` object:
```json
{
  "id": 1,
  "level": 1,
  "hp": 1,
  "attack": 1,
  "defence": 1,
  "started_at": 12345789,
  "finished_at": 12399999
}
```

- if the user doesn't have enough money for the create a troop, it returns a `HTTP 400` response with the following error message:
```json
{
  "status" : "error",
  "message" : "Not enough gold!"
}
```

### PUT /kingdom/troops/[troopId]
Upgrades or downgrades a troop in the kingdom to a certain level (gets the user's id from the token provided in the header).

#### Request parameters
- `level` [int]

#### Response

- if level parameter is provided and it's more than 0 and the user has enough money for the upgrade, it returns a `HTTP 200` response with the modified `Troop` object:
```json
{
  "id": 1,
  "level": 2,
  "hp": 1,
  "attack": 1,
  "defence": 1,
  "started_at": 12345789,
  "finished_at": 12399999
}
```

- if level parameter is provided and it's more than 0 BUT the user doesn't have enough money for the upgrade, it returns a `HTTP 400` response with the following error message:
```json
{
  "status" : "error",
  "message" : "Not enough gold!"
}
```


- if level parameter is provided, but it's less then 0 or not integer, it returns a `HTTP 400` response with the following error message:
```json
{
  "status" : "error",
  "message" : "Invalid troop level!"
}
```

- if level parameter is missing, it returns a `HTTP 400` status and the following error message:
```json
{
  "status" : "error",
  "message" : "Missing parameter(s): type!"
}
```

- if troopId doesn't exist, it returns a `HTTP 404` status and the following error message:
```json
{
  "status" : "error",
  "message" : "<id> not found"
}
```
